// module for time formatting by TinnovAce...
const languages = require('./languages');

const detectLanguage = () => {
    if (typeof navigator !== 'undefined' && navigator.language) {
        // For browser environment
        return navigator.language.split('-')[0]; // Extract base language
    } else if (typeof process !== 'undefined' && process.env.LANG) {
        // For Node.js environment
        return process.env.LANG.split('_')[0]; // Extract base language
    } else {
        // Default to English if detection fails
        return 'en';
    }
};

const timeAgo = (data, language = null, compact = false) => {
    // Detect language if not provided
    if (!language) {
        language = detectLanguage();
    }

    // Find difference between given time and current time.
    const timeNow = Date.now();
    let difference = Math.round((timeNow / 1000) - (data / 1000));

    // Choose the language strings
    const langStrings = languages[language] || languages.en;

    // Time difference conversion to seconds, minutes, hours, days, weeks, months and years.
    let seconds = difference;
    let minutes = Math.round(difference / 60);
    let hours = Math.round(difference / 3600);
    let days = Math.round(difference / 86400);
    let weeks = Math.round(difference / 604800);
    let months = Math.round(difference / 2600640);
    let years = Math.round(difference / 31207680);

    if (compact) {
        if (seconds <= 60) {
            return seconds <= 1 ? langStrings.justNowCompact : `${seconds}s`;
        } else if (minutes <= 60) {
            return minutes === 1 ? '1m' : `${minutes}m`;
        } else if (hours <= 24) {
            return hours === 1 ? '1h' : `${hours}h`;
        } else if (days < 7) {
            return days === 1 ? '1d' : `${days}d`;
        } else if (weeks < 4.3) {
            return weeks === 1 ? '1w' : `${weeks}w`;
        } else if (months < 12) {
            return months === 1 ? '1mo' : `${months}mo`;
        } else {
            return years === 1 ? '1y' : `${years}y`;
        }
    } else {
        if (seconds <= 60) {
            if (seconds <= 1) {
                return langStrings.justNow;
            } else if (seconds === 60) {
                return langStrings.minuteAgo;
            } else {
                return seconds + ' ' + langStrings.secondsAgo;
            }
        } else if (minutes <= 60) {
            if (minutes === 1) {
                return langStrings.minuteAgo;
            } else if (minutes === 60) {
                return langStrings.hourAgo;
            } else {
                return minutes + ' ' + langStrings.minutesAgo;
            }
        } else if (hours <= 24) {
            if (hours === 1) {
                return langStrings.hourAgo;
            } else if (hours === 24) {
                return langStrings.yesterday;
            } else {
                return hours + ' ' + langStrings.hoursAgo;
            }
        } else if (days < 7) {
            if (days === 1) {
                return langStrings.yesterday;
            } else {
                return days + ' ' + langStrings.daysAgo;
            }
        } else if (weeks < 4.3) {
            if (weeks === 1 || days === 7) {
                return langStrings.weekAgo;
            } else {
                return weeks + ' ' + langStrings.weeksAgo;
            }
        } else if (months < 12) {
            if (months === 1) {
                return langStrings.monthAgo;
            } else {
                return months + ' ' + langStrings.monthsAgo;
            }
        } else {
            if (years === 1 || months === 12) {
                return langStrings.yearAgo;
            } else if (years === 10) {
                return '1 decade ago';
            } else if (years === 100) {
                return '1 century ago';
            } else {
                return years + ' ' + langStrings.yearsAgo;
            }
        }
    }
};

module.exports = timeAgo;
