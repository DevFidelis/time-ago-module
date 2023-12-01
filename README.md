# TinnovAce - Time Ago Module

[![2.0.0](https://badge.fury.io/js/cc-time-ago.svg)](https://www.npmjs.com/package/cc-time-ago)
![GitHub](https://github.com/DevFidelis/time-ago-module)

This is a simple module that calculates the time elapsed by subtracting the time an entry was made from the current time. It has a good pattern of displaying the time like "just now," "1 second ago," "2 minutes ago," "2 hours ago," "1 day ago," "2 weeks ago," "1 month ago," "2 years ago," and so on.

The module now supports multiple languages for time formatting. You can specify the language you want to use when formatting the time. Check the [Languages Supported](#languages-supported) section for more information.

The module can be useful and integrated into various applications for time formatting, such as in blog posts, comments, user posts, social networks, or literally any app that uses time. The module is constantly being updated and is open source, easy to use, flexible, and scalable.

## Installation

To use the module in your project, install it via npm:

```bash
npm install cc-time-ago
```
## Usage

Include the module in your project using the import syntax:

```bash
const timeAgo = require('cc-time-ago');
```
The **time-ago** module has one method, which accepts the time an entry was made in milliseconds as the first argument and an optional second argument for specifying the language. We advise you to use the JavaScript time object with the method **now()** (e.g., **Date.now()**).

```bash
const entryTime = /* your entry time in milliseconds */;
const formattedTime = timeAgo(entryTime, 'es'); // Pass the language code as the second argument
console.log(formattedTime);
```
## Languages Supported

The module supports the following languages for time formatting:

- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Japanese (ja)
- Chinese (zh)
- Russian (ru)
- Portuguese (pt)
- Arabic (ar)
- Hindi (hi)
- Turkish (tr)
- Dutch (nl)

You can customize the language by passing the language code as the second argument when using the module. Otherwise English will be used as the default language.

## Suggesting New Languages

We value your feedback and encourage you to suggest additional languages for time formatting. If there's a language you'd like to see supported, please [open an issue](https://github.com/DevFidelis/time-ago-module/issues) in the repository, and we'll do our best to add it in future updates. Your input is essential in making this module more inclusive and versatile.

## Contribution

Feel free to contribute to the module. Your pull requests will be reviewed and approved. For any problems encountered or further queries, please [raise an issue](https://github.com/DevFidelis/time-ago-module/issues).

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/DevFidelis/time-ago-module/blob/master/LICENSE) file for details.

**Time Ago Module © 2022 - 2023, a product of TinnovAce.**
