// Typescript support for time-ago module
declare type TimeAgoOptions = {
  language?: string;
  compact?: boolean;
  thresholds?: Partial<Thresholds>;
  allowFuture?: boolean;
};

declare type Thresholds = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  months: number;
};

declare type LanguageStrings = {
  justNow: string;
  secondsAgo: string;
  minuteAgo: string;
  minutesAgo: string;
  hourAgo: string;
  hoursAgo: string;
  yesterday: string;
  daysAgo: string;
  weekAgo: string;
  weeksAgo: string;
  monthAgo: string;
  monthsAgo: string;
  yearAgo: string;
  yearsAgo: string;
  justNowCompact: string;
  inSeconds?: string;
  inMinutes?: string;
  inHours?: string;
  inDays?: string;
  inWeeks?: string;
  inMonths?: string;
  inYears?: string;
};

declare function timeAgo(date: Date | number | string, options?: TimeAgoOptions): string;
declare function addLanguage(langCode: string, translations: LanguageStrings): void;
declare function autoUpdate(
  date: Date | number | string,
  callback: (formattedTime: string) => void,
  interval?: number
): { stop: () => void };

declare const DEFAULT_THRESHOLDS: Thresholds;

export {
  timeAgo,
  addLanguage,
  autoUpdate,
  DEFAULT_THRESHOLDS,
  TimeAgoOptions,
  LanguageStrings,
  Thresholds
};