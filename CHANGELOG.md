# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fix

- Fix proptypes warnings.

## [2.6.14] - 2019-03-18

### Added

- sectionLinks now contains the prop `target` in links where is possible to use one of the values `[_self_, _blank_]`. That will define the value for target attribute. `<a href="/" target="_self">`

## [2.6.13] - 2019-03-14

### Changed

- Change language files to most generic.

## [2.6.12] - 2019-03-07

### Fixed

- Check if prop logoUrl exists before render, preventing to render a inexistent image

## [2.6.11] - 2019-03-01

### Changed

- Using `store-icons` instead of `dreamstore-icons`

### Added

- Test setup and snapshots tests.

## [2.6.10] - 2019-02-25

### Fixed

- Fix typo in `footer.css`, `.navegation` to `.navigation`.

## [2.6.9] - 2019-02-22

### Fixed

- Update GoCommerce BW logo and documentation.

## [2.6.8] - 2019-02-21

## [2.6.7] - 2019-02-21

### Added

- Add option to choose color of VTEX logo and update GoCommerce logo.

## [2.6.6] - 2019-02-14

## [2.6.5] - 2019-02-14

### Added

- Update documentation.

## [2.6.4] - 2019-02-13

### Added

- Add missing css-handles in components in order to allow customization with CSS Modules.

## [2.6.3] - 2019-02-12

## [2.6.2] - 2019-02-05

### Fixed

- Warning of React Intl of missing messages on footer titles.

## [2.6.1] - 2019-02-01

## [2.6.0] - 2019-01-31

### Changed

- Use icons from `vtex.dreamstore-icons`.

## [2.5.2] - 2019-01-29

### Fixed

- Remove `inheritComponent` from blocks.

## [2.5.1] - 2019-01-26

### Fixed

- Fix footer padding to be aligned with the other page elements.

## [2.5.0] - 2019-01-22

## [2.4.1] - 2019-01-18

### Changed

- Adjust the way to import render-runtime components.

## [2.4.0] - 2019-01-18

### Changed

- Update React builder to 3.x.
- Bump vtex.styleguide to 9.x.

## [2.3.4] - 2019-01-15

### Fixed

- Using html5 tags to a more semantic structure.

## [2.3.3] - 2019-01-11

### Fixed

- Fix component responsive behavior.

## [2.3.2] - 2019-01-11

### Changed

- Add Container for adjusting search result to store padding.

## [2.3.1] - 2019-01-11

### Changed

- Remove `undefined` class.

## [2.3.0] - 2019-01-09

### Changed

- Add padding on footer through `Container` component.
- Bye `pages.json`! Welcome `store-builder`.

## [2.2.2] - 2019-01-07

### Fixed

- Fixed footer item class and link

## [2.2.1] - 2019-01-02

### Added

- Support to GoCommerce logo.

## [2.2.0] - 2018-12-18

### Added

- Support to CSS Modules.

## [2.1.0] - 2018-12-17

### Added

- Support to messages builder.
- Rebrand the app name to `store-footer`.

## [2.0.1] - 2018-11-27

### Fixed

- Paddings and margins to match other components.

## [2.0.0] - 2018-11-21

### Changed

- Replace some `Tachyons`' CSS classes with the design tokens.

## [1.0.8] - 2018-11-09

### Fixed

- Fix vertical alignment of links on footer

## [1.0.7] - 2018-10-31

### Fixed

- Fix paddings of elements in footer index

## [1.0.6] - 2018-10-24

### Fixed

- Replace shadow by line.

## [1.0.5] - 2018-10-18

### Changed

- Refactored to use tachyons classes instead of custom CSS.

## [1.0.4] - 2018-10-15

### Fixed

- Fixed sections title's and spacing of social network's icons

## [1.0.3] - 2018-10-11

### Fixed

- Display store info as list instead of columns in mobile.

## [1.0.2] - 2018-09-27

### Fixed

- Removed call to `console.log`.

## [1.0.1] - 2018-09-20

### Fixed

- **Hotfix** fix components location.

## [1.0.0] - 2018-09-20

### Changed

- Migrated footer to new app.
