# Changelog

## [3.0.0] - 2025-04-03

### Added

- **Future Date Support**: Format dates in the future ("in 5 minutes")

- **Threshold Customization**: Control when time units switch (seconds→minutes→etc)

- **Real-Time Auto Updates**: `autoUpdate()` for live-refreshing UIs

- **TypeScript Support**: Full type definitions (`index.d.ts`)

- **Runtime Language Addition**: `addLanguage()` method

- **Improved i18n**: Use `Intl.RelativeTimeFormat` where available

- **Memoization Cache**: 60s TTL for performance

### Changed

- **Breaking**: API now uses options object instead of positional args

```bash
  // Old
  timeAgo(date, 'es', true);

  // New
  timeAgo(date, { language: 'es', compact: true });
```

- **Language Detection**: More robust browser/Node.js environment checks

- **Documentation**: Complete rewrite with interactive examples

### Fixed

- Proper pluralization for all languages

- RTL support for Arabic

- Timezone handling in Node.js

## [2.1.0] - 2024-07-13

- Initial public release

- Basic time formatting

- 14 language support

- Compact mode

[Unreleased]: https://github.com/DevFidelis/time-ago-module/compare/v3.0.0...HEAD

[3.0.0]: https://github.com/DevFidelis/time-ago-module/releases/tag/v3.0.0

[2.1.0]: https://github.com/DevFidelis/time-ago-module/releases/tag/v2.1.0


### **Key Documentation Updates**

1\. **Modernized README**: Interactive code samples, feature highlights, and options table

2\. **Clear Migration Guide**: Breaking changes highlighted in CHANGELOG

3\. **TypeScript Support**: Added badge and usage notes

4\. **Real-World Examples**: React/Vue auto-update snippet

5\. **Contributor Focus**: Simplified language addition process
