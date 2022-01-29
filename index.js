// function for time formatting...
exports.timeAgo = function (data) {
    
    // find defference between given time and current time.
    const timeNow = Date.now();
    let difference = Math.round((timeNow / 1000) - (data / 1000));

    // time difference conversion to seconds, minutes, hours, days, weeks, months and years.
    let seconds = difference;
    let minutes = Math.round(difference / 60);
    let hours = Math.round(difference / 3600);
    let days = Math.round(difference / 86400);
    let weeks = Math.round(difference / 604800);
    let months = Math.round(difference / 2600640);
    let years = Math.round(difference / 31207680);

    // check time mark and return appropriate message.
    if (seconds <= 60) {
        
        if (seconds <= 1) {
            return 'just now';
        } else if (seconds == 60) {
            return '1 minute ago';
        } else {
            return seconds + ' seconds ago';
        }

    } else if (minutes <= 60) {
        
        if (minutes == 1) {
            return '1 minute ago';
        } else if (minutes == 60) {
            return '1 hour ago';
        } else {
            return minutes + ' minutes ago';
        }

    } else if (hours <= 24) {
        
        if (hours == 1) {
            return '1 hour ago';
        } else if (hours == 24) {
            return 'Yesterday';
        } else {
            return hours + ' hours ago';
        }
        

    } else if (days < 7) {
        
        if (days == 1) {
            return 'Yesterday';
        } else {
            return days + ' days ago';
        }

    } else if (weeks <= 4.3) {
        
        if (weeks == 1 || $days == 7) {
            return '1 week ago';
        } else {
            return weeks + ' weeks ago';
        }

    } else if (months < 12) {
        
        if (months == 1) {
            return '1 month ago';
        }  else {
            return months + ' months ago';
        }

    } else {
        
        if (years == 1 || $months == 12) {
            return '1 year ago';
        } else if (years == 10) {
            return '1 decade ago';
        } else if (years == 100) {
            return '1 century ago';
        } else {
            return years + ' years ago';
        }
        
    }

}
