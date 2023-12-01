// module for time formatting by TinnovAce...
const languages = require('./languages');

const timeAgo = (data, language = 'en') => {
    // find defference between given time and current time.
    const timeNow = Date.now();
    let difference = Math.round((timeNow / 1000) - (data / 1000));

    // Choose the language strings
    const langStrings = languages[language] || languages.en;

    // time difference conversion to seconds, minutes, hours, days, weeks, months and years.
    let seconds = difference;
    let minutes = Math.round(difference / 60);
    let hours = Math.round(difference / 3600);
    let days = Math.round(difference / 86400);
    let weeks = Math.round(difference / 604800);
    let months = Math.round(difference / 2600640);
    let years = Math.round(difference / 31207680);

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
};

module.exports = timeAgo;
