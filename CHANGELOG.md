# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.27.0] - 2023-03-28

### Added
- German translation.

## [2.26.0] - 2022-09-29

### Added
- Indonesian and Thai translations.

### Fixed
- English, Italian and Portuguese translations.

## [2.25.0] - 2022-03-09

### Added
- Arabic, Norwegian and Norwegian variant translations.

## [2.24.1] - 2021-12-13

### Fixed
- English, French, Japanese, Korean and Dutch translation.

### Removed
- Pseudolanguage.

## [2.24.0] - 2021-09-24

### Added
- I18n Bg and Bs (pseudo-language to implement In-context tool).

### Fixed
- I18n En, Es, Fr, It, Nl, Pt and Ro.
## [2.23.1] - 2021-06-17

### Fixed
- Crowdin configuration file.

## [2.23.0] - 2021-05-05

### Added

- I18n It, Ko, Fr and Nl.

### Changed

- Crowdin configuration file.

## [2.22.0] - 2021-03-03

### Added

- I18n Ro and Jp.

### Fixed

- Crowdin configuration file.

## [2.21.0] - 2020-12-16

### Changed
- Update `vtex.css-handles` to `1.x`.

## [2.20.1] - 2020-04-08
### Changed
- Footer is no longer sensitive to `__fold__`--it relies on partial hydration for performance instead.

## [2.20.0] - 2020-03-20
### Changed
- Hydrate footer on view.

## [2.19.2] - 2020-03-04
### Added
- [test] `useRuntime` mock.

### Changed
- Stop needlessly lazy loading icons.

## [2.19.1] - 2020-02-12
### Changed
- `__fold__` now affects the footer.

## [2.19.0] - 2020-02-10
### Changed
- Lazy load legacy footer

## [2.18.3] - 2020-01-31
### Changed
- Make `.desktop` or `.mobile` blocks only come to runtime depending on device.

## [2.18.2] - 2019-12-05
### Fixed
- Docs

## [2.18.1] - 2019-12-05
### Fixed
- Prop `showInColors` of `social-networks`.

## [2.18.0] - 2019-12-02
### Added
- Default blocks implementation for `footer` block.

## [2.17.2] - 2019-10-18

## [2.17.1] - 2019-10-14
### Fixed
- Get `platform` from `runtime` properly.

## [2.17.0] - 2019-10-11
### Added
- New CSS handles.

## [2.16.7] - 2019-09-23
### Changed
- Get `platform` from `runtime`

## [2.16.6] - 2019-09-19
### Changed
- Removed @gocommerce/utils dependency.

## [2.16.5] - 2019-09-10
### Changed
- Make render strategy `client`, i.e. component assets are fetched client-side with same priority as server-side blocks.

## [2.16.4] - 2019-08-30
### Changed
- Render type set to lazy

## [2.16.3] - 2019-08-29

## [2.16.2] - 2019-08-22
### Fixed
- Bug in IE11

## [2.16.1] - 2019-08-01
### Fixed
- Issue on legacy mobile-mode menu, where clicking on it wouldn't expand the accordion menu.

## [2.16.0] - 2019-07-29

### Added

- Hyperlink to GoCommerce powered by logo

## [2.15.3] - 2019-07-29
### Changed
- Use vtex.device-detector for device detection.

## [2.15.2] - 2019-07-24

### Fixed

- Build assets with new builder hub.

## [2.15.1] - 2019-07-02
### Fixed
- Remove `native-type text` from `socialNetwork` contentSchema prop

## [2.15.0] - 2019-07-01
### Changed
- Adds a flex-grow div on top of the footer, aligning it to the bottom of the screen.

## [2.14.1] - 2019-06-27

### Fixed

- Build assets with new builder hub.

## [2.14.0] - 2019-06-10

### Added

- Support for shop-review-interfaces app to display block in site footer.

## [2.13.2] - 2019-06-05

### Fixed

- Absolute path for contentSchema Footer definition

## [2.13.1] - 2019-05-28

### Fix

- Intl prop undefined in `FooterLinkItem`.

## [2.13.0] - 2019-05-28

### Added

- Content schema.

## [2.12.0] - 2019-05-25

### Added

- Added new `rowContainer` CSS override class.

## [2.11.5] - 2019-05-09

### Fixed

- Fix reference to `VTEX` logo reference and `Diner's club` image name.

## [2.11.4] - 2019-05-08

###

- Use lowercase in assets references in legacy component.

## [2.11.3] - 2019-05-08

- Use lowercase in assets references.

## [2.11.2] - 2019-05-07

### Added

- Added `Linkedin` and `Pinterest` social network options.
- Fixed messages keys in pt.json.

## [2.11.1] - 2019-05-07

### Fixed

- React `key` for SocialNetworks and AcceptedPaymentMethods.

## [2.11.0] - 2019-04-30

### Added

- Added social network name as a modifier to their CSS classes.
- Added `title` prop to SocialNetworks block.

## [2.10.0] - 2019-04-24

### Changes

- Scopes messages by domain

## [2.9.2] - 2019-04-22

## [2.9.1] - 2019-04-22

### Fixed

- Build passes in new react3.x builder

## [2.9.0] - 2019-04-12

### Added

- Added permission for `flex-layout` on the footer.

## [2.8.0] - 2019-04-11

### Added

- Allow `menu` as `footer-layout` child.

## [2.7.0] - 2019-04-11

### Added

- Add new interfaces: `footer-layout`, `social-networks`, `accepted-payment-methods`, `powered-by`, `footer-row` and `footer-spacer`.

## [2.6.17] - 2019-04-03

### Fixed

- `withImage` setting state when unmounted.

## [2.6.16] - 2019-04-03

### Fixed

- `withImage` now updates image when props are changed.

## [2.6.15] - 2019-03-26

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
