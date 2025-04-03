# TinnovAce Time Ago Module

[![npm version](https://badge.fury.io/js/cc-time-ago.svg)](https://www.npmjs.com/package/cc-time-ago)

![GitHub](https://img.shields.io/github/license/DevFidelis/time-ago-module)

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue)](https://www.typescriptlang.org)

A lightweight time formatter with i18n support, future dates, real-time updates, and TypeScript types. Formats dates as "just now", "1h ago", or "in 5 minutes".

## Features

- 🌍 **14 Built-in Languages** + Custom Language Support

- ⏳ **Future Date Formatting** ("in 5 minutes")

- ⚡ **Real-Time Auto Updates** (Perfect for UIs)

- 🔧 **Customizable Thresholds** (Control when units change)

- 📦 **TypeScript Ready** with Full Type Definitions

- 🚀 **Compact Mode** ("1h" instead of "1 hour ago")

- 🧠 **Smart Caching** for High Performance

## Installation

```bash

npm install cc-time-ago

```

## Basic Usage

```javascript

const { timeAgo } = require('cc-time-ago');

// Basic usage

console.log(timeAgo(Date.now() - 300000)); // "5 minutes ago"

// With options

console.log(timeAgo(Date.now() + 3600000, { 

  language: 'es',

  allowFuture: true

})); // "en 1 hora"

```

## Advanced Usage

### Custom Thresholds

```javascript

timeAgo(date, {

  thresholds: {

    seconds: 120,  // Show seconds up to 2 minutes

    minutes: 3600  // Show minutes up to 1 hour

  }

});

```

### Real-Time Updates (React/Vue/etc)

```javascript

const { autoUpdate } = require('cc-time-ago');

const { stop } = autoUpdate(someDate, (formattedTime) => {

  console.log(formattedTime); // Updates every 30s

});

// Call stop() when done

```

### Add Custom Languages

```javascript

const { addLanguage } = require('cc-time-ago');

addLanguage('ko', {

  justNow: '방금',

  minuteAgo: '1분 전',

  // ...

});

```

## Options

| Parameter    | Type     | Default               | Description                          |

|--------------|----------|-----------------------|--------------------------------------|

| `language`   | string   | Auto-detected         | Language code (e.g., 'es', 'fr')     |

| `compact`    | boolean  | false                 | Compact format ("1h" vs "1 hour ago")|

| `allowFuture`| boolean  | false                 | Format future dates ("in 5 minutes") |

| `thresholds` | object   | [See below](#default-thresholds) | Custom unit thresholds |

### Default Thresholds

```javascript

{

  seconds: 60,     // Show seconds until 1 minute

  minutes: 3600,   // Show minutes until 1 hour

  hours: 86400,    // Show hours until 1 day

  days: 604800,    // Show days until 1 week

  weeks: 2600640,  // Show weeks until ~1 month

  months: 31207680 // Show months until 1 year

}

```

## Supported Languages

| Code | Language   | Code | Language  |

|------|------------|------|-----------|

| `en` | English    | `nl` | Dutch     |

| `es` | Spanish    | `ja` | Japanese  |

| `fr` | French     | `zh` | Chinese   |

| `de` | German     | `ru` | Russian   |

| `it` | Italian    | `pt` | Portuguese|

| `ar` | Arabic     | `hi` | Hindi     |

| `tr` | Turkish    |      |           |

**Missing a language?**  

[Add it yourself](#contributing) or [request it](https://github.com/DevFidelis/time-ago-module/issues)!

## Contributing

1\. Fork the repository

2\. Add/Update languages in `languages.js`

3\. Write tests for new features

4\. Submit a PR

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/DevFidelis/time-ago-module/blob/master/LICENSE) file for details.

**Time Ago Module © 2022 - 2025, a product of [TinnovAce](https://tinnovace.tech).**
