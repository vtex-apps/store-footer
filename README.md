# VTEX Footer

## Description
The VTEX Footer app shows information about the store such as address, social networks and payment methods. Furthermore, it is possible to add hyperlinks for privacy policy, FAQ, benefits and attendance. This is a VTEX app that is used by Dreamstore product.

:loudspeaker: **Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Release schedule
| Release  | Status              | Initial Release | Maintenance LTS Start | End-of-life | Dreamstore Compatibility
| :--:     | :---:               |  :---:          | :---:                 | :---:       | :---: 
| [1.x]    | **Maintenance LTS** |  2018-09-20     | 2018-11-21            | March 2019  | 1.x
| [2.x]    | **Current Release** |  2018-11-21     |                       |             | 2.x


See our [LTS policy](https://github.com/vtex-apps/awesome-io#lts-policy) for more information.

## Table of Contents
- [Usage](#usage)
  - [Blocks API](#blocks-api)
    - [Configuration](#configuration)
  - [Styles API](#styles-api)
- [Troubleshooting](#troubleshooting)

## Usage

This app uses our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object)

To use this app you need to add it in your `dependencies` in the `manifest.json` file.

```json
  dependencies: {
    "vtex.store-footer: 2.x"
  }
```

Then, add `footer` block into our app theme, like we do in our [Dreamstore app](https://github.com/vtex-apps/dreamstore/blob/master/store/blocks.json).

### Blocks API
:construction: :construction: :construction:

This app has an interface that describes what rules must be implemented by a block when you want to use the footer. 

```json
  "footer": {
    "component": "index"
  }
```
#### Configuration
Through the Storefront you can change the behavior and interface of the footer. But, you can also make adjusts in your theme app, like Dreamstore does.

Store Footer:

| Prop name | Type | Description |
| --- | --- | --- |
| `socialNetworks` | `Array(Social Network)` | Array of social networks |
| `sectionLinks` | `Array(Section Link)` | Array of section links |
| `storeInformations` | `Array(String)` | Array of informations about the store |
| `badges` | `Array(Badge)` | Array of badges |
| `paymentForms` | `Array(Payment Form)` | Array of payment forms |
| `showPaymentFormsInColor` | `Boolean` | Set color of payment forms |
| `showSocialNetworksInColor` | `Boolean` | Set color of social networks |
| `logo` | `String` | Link of Store logo |

Social Network:

| Prop name | Type | Description |
| --- | --- | --- |
| `links` | `Array(Link)` | Array of links |

Section Link:

| Prop name | Type | Description |
| --- | --- | --- |
| `title` | `String!` | Title of the section |
| `links` | `Array(Link)` | Array of links |

Link:

| Prop name | Type | Description |
| --- | --- | --- |
| `url` | `String` | URL |
| `title` | `String` | Title of the link |

Badge:

| Prop name | Type | Description |
| --- | --- | --- |
| `image` | `String` | URL of the badge |

Payment Form:

| Prop name | Type | Description |
| --- | --- | --- |
| `title` | `String!` | Title of payment form |
| `paymentTypes` | `Array(String)` | Array of strings containing the payment types |

### Styles API
:construction: :construction: :construction:

## Troubleshooting
You can check if others are passing through similar issues [here](https://github.com/vtex-apps/store-footer/issues). Also feel free to [open issues](https://github.com/vtex-apps/store-footer/issues/new) or contribute with pull requests.

## Tests
:construction: :construction: :construction: