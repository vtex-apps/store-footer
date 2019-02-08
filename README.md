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

This app use our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object)

To use this app you need to import in your dependencies on `manifest.json` file.

```json
  dependencies: {
    "vtex.store-footer: 2.x"
  }
```

Then, add `footer` block into our app theme, like we do in our [Dreamstore app](https://github.com/vtex-apps/dreamstore/blob/master/store/blocks.json).

### Blocks API
:construction: :construction: :construction:

This app have an interface that describes what are the rules that the blocks must implement when you want to use the footer block. 

```json
  "footer": {
    "component": "index"
  }
```
#### Configuration
Through the Storefront you can change the behavior and interface of the footer. But, you can also make adjusts in your theme app, like Dreamstore does.

| Prop name | Type | Description |
| --- | --- | --- |
| `socialNetworks` | `Array` | Array of social network links |
| `sectionLinks` | `Array` | Array of name and links |
| `storeInformations` | `Array` | Array of links about store information |
| `badges` | `Array` | Array of badges |
| `paymentForms` | `Array` | Array of payment forms |
| `showPaymentFormsInColor` | `Boolean` | Set color of payment forms |
| `showSocialNetworksInColor` | `Boolean` | Set color of social networks |
| `logo` | `String` | Link of Store logo |

### Styles API
:construction: :construction: :construction:

## Troubleshooting
You can check if others are passing through similar issues [here](https://github.com/vtex-apps/minicart/issues). Also feel free to [open issues](https://github.com/vtex-apps/minicart/issues/new) or contribute with pull requests.
