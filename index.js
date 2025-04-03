// index.js
const languages = require('./languages');

// Memoization cache with TTL
const cache = new Map();
const CACHE_TTL = 60000;

// Default thresholds configuration
const DEFAULT_THRESHOLDS = {
  seconds: 60,
  minutes: 3600,
  hours: 86400,
  days: 604800,
  weeks: 2600640,
  months: 31207680
};

// Language detection
const detectLanguage = () => {
  if (typeof navigator !== 'undefined' && navigator.language) {
    return navigator.language.split('-')[0];
  }
  if (typeof process !== 'undefined' && process.env.LANG) {
    return process.env.LANG.split('_')[0];
  }
  return 'en';
};

// Custom language registry
const customLanguages = {};

function addLanguage(langCode, translations) {
  customLanguages[langCode] = { ...languages.en, ...translations };
}

function timeAgo(date, options = {}) {
  const {
    language = detectLanguage(),
    compact = false,
    thresholds = DEFAULT_THRESHOLDS,
    allowFuture = false
  } = options;

  // Input validation
  const timestamp = new Date(date).getTime();
  if (isNaN(timestamp)) {
    throw new Error(`Invalid date: ${date}`);
  }

  // Cache check
  const cacheKey = `${timestamp}-${language}-${compact}-${allowFuture}`;
  const cached = cache.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
    return cached.result;
  }

  // Time calculations
  const now = Date.now();
  let difference = Math.round((now - timestamp) / 1000);
  const isFuture = difference < 0;
  difference = Math.abs(difference);

  // Language resolution
  const langStrings = customLanguages[language] || languages[language] || languages.en;

  // Intl.RelativeTimeFormat attempt
  if (Intl?.RelativeTimeFormat && !compact) {
    try {
      const rtf = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });
      const result = formatWithIntl(rtf, difference, thresholds, isFuture, langStrings);
      cache.set(cacheKey, { timestamp: now, result });
      return result;
    } catch (e) {}
  }

  // Format selection
  const formatter = compact ? formatCompact : formatFull;
  const result = formatter(difference, thresholds, langStrings, isFuture, allowFuture);
  cache.set(cacheKey, { timestamp: now, result });
  return result;
}

// Formatting helpers
function formatWithIntl(rtf, diff, thresholds, isFuture, strings) {
  const units = [
    { threshold: thresholds.seconds, unit: 'second', value: diff },
    { threshold: thresholds.minutes, unit: 'minute', value: Math.round(diff / 60) },
    { threshold: thresholds.hours, unit: 'hour', value: Math.round(diff / 3600) },
    { threshold: thresholds.days, unit: 'day', value: Math.round(diff / 86400) },
    { threshold: thresholds.weeks, unit: 'week', value: Math.round(diff / 604800) },
    { threshold: thresholds.months, unit: 'month', value: Math.round(diff / 2600640) },
    { unit: 'year', value: Math.round(diff / 31207680) }
  ];

  const { unit, value } = units.find(({ threshold }) => diff < (threshold || Infinity));
  return isFuture ? rtf.format(value, unit) : rtf.format(-value, unit);
}

function formatCompact(diff, thresholds, strings, isFuture) {
  const prefix = isFuture ? (strings.inPrefix || 'in ') : '';
  const suffix = isFuture ? '' : (strings.agoSuffix || ' ago');
  
  const format = (value, unit) => {
    if (isFuture && strings[`in${unit}`]) {
      return strings[`in${unit}`].replace('{value}', value);
    }
    return `${prefix}${value}${unit}${suffix}`;
  };

  if (diff < thresholds.seconds) return diff <= 1 ? strings.justNowCompact : format(diff, 's');
  if (diff < thresholds.minutes) return format(Math.round(diff/60), 'm');
  if (diff < thresholds.hours) return format(Math.round(diff/3600), 'h');
  if (diff < thresholds.days) return format(Math.round(diff/86400), 'd');
  if (diff < thresholds.weeks) return format(Math.round(diff/604800), 'w');
  if (diff < thresholds.months) return format(Math.round(diff/2600640), 'mo');
  return format(Math.round(diff/31207680), 'y');
}

function formatFull(diff, thresholds, strings, isFuture) {
  const format = (value, unitKey) => {
    if (isFuture && strings[`in${unitKey}`]) {
      return strings[`in${unitKey}`].replace('{value}', value);
    }
    return value === 1 ? strings[`${unitKey}Ago`] : `${value} ${strings[`${unitKey}sAgo`]}`;
  };

  if (diff < thresholds.seconds) {
    return diff <= 1 ? strings.justNow : format(diff, 'second');
  }
  if (diff < thresholds.minutes) return format(Math.round(diff/60), 'minute');
  if (diff < thresholds.hours) return format(Math.round(diff/3600), 'hour');
  if (diff < thresholds.days) return format(Math.round(diff/86400), 'day');
  if (diff < thresholds.weeks) return format(Math.round(diff/604800), 'week');
  if (diff < thresholds.months) return format(Math.round(diff/2600640), 'month');
  return format(Math.round(diff/31207680), 'year');
}

// Auto-update system
function autoUpdate(date, callback, interval = 30000) {
  let timer;
  let lastTimestamp = Date.now();
  
  const update = () => {
    const now = Date.now();
    if (now - lastTimestamp >= interval) {
      callback(timeAgo(date));
      lastTimestamp = now;
    }
    timer = setTimeout(update, 1000);
  };
  
  update();
  return { stop: () => clearTimeout(timer) };
}

module.exports = {
  timeAgo,
  addLanguage,
  autoUpdate,
  DEFAULT_THRESHOLDS
};
