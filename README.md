# VTEX Footer

## Description
The VTEX Footer app shows information about the store such as address, social networks and payment methods. Furthermore, it is possible to add hyperlinks for privacy policy, FAQ, benefits and attendance. This app is used by store theme.

:loudspeaker: **Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Release schedule
| Release  | Status              | Initial Release | Maintenance LTS Start | End-of-life | Dreamstore Compatibility
| :--:     | :---:               |  :---:          | :---:                 | :---:       | :---: 
| [2.x]    | **Current Release** |  2018-11-21     |                       |             | 2.x
| [1.x]    | **Maintenance LTS** |  2018-09-20     | 2018-11-21            | March 2019  | 1.x


See our [LTS policy](https://github.com/vtex-apps/awesome-io#lts-policy) for more information.

## Table of Contents
- [Usage](#usage)
  - [Blocks API](#blocks-api)
    - [Configuration](#configuration)
  - [Styles API](#styles-api)
    - [CSS namespaces](#css-namespaces)
- [Troubleshooting](#troubleshooting)
- [Tests](#tests)

## Usage

This app uses our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object)

To configure or customize this app, you need to import it in your dependencies in `manifest.json`.

```json
  dependencies: {
    "vtex.store-footer: 2.x"
  }
```

Then, add `footer` block into our app theme, like we do in our [Store theme app](https://github.com/vtex-apps/store-theme/blob/master/store/blocks.json). 

Now, you can change the behavior of the footer block. See an example of how to configure: 
```json
"footer": {
    "props": {
      "socialNetworks": [{"links": [{ "url":"www.facebook.com", "title":"Facebook" }, 
                                    { "url":"www.twitter.com", "title":"Twitter" }]}],
      "sectionLinks": [{"title": "About us", "links": [{ "url":"www.mystore.com/faq", "title":"FAQ" }, 
                                                       { "url":"www.mystore.com/talktous", "title":"Talk to us" }]}],
      "storeInformations": ["CNPJ n.º 1231132.231.1231/000", "All the rights reserved."],
      "badges": [{"image":"https://phots.icons8.com/foo"}, 
                 {"image":"https://phots.icons8.com/xpto"}],
      "paymentForms": [{"title": "Payment form", "paymentTypes": ["MasterCard"]}],
      "showPaymentFormsInColor": true,
      "showSocialNetworksInColor": true,
      "logo": "My store logo",
    }
  }
```

### Blocks API
This app has an interface that describes what rules must be implemented by a block when you want to use the footer. 

```json
  "footer": {
    "component": "index"
  }
```
#### Configuration
Through the Storefront you can change the behavior and interface of the footer. But, you can also make adjusts in your theme app, like Dreamstore does.

Store Footer:

| Prop name | Type | Description | Default Value |
| --- | --- | --- | ------ |
| `socialNetworks` | `Array(Social Network)` | Array of social networks | [{socialNetwork: 'Facebook', url: '#',},] |
| `sectionLinks` | `Array(Section Link)` | Array of section links | [] |
| `storeInformations` | `Array(String)` | Array of informations about the store | [] |
| `badges` | `Array(Badge)` | Array of badges | [] |
| `paymentForms` | `Array(Payment Form)` | Array of payment forms | [{title: 'editor.footer.paymentForms.paymentForm',paymentTypes: ['MasterCard'],},] |
| `showPaymentFormsInColor` | `Boolean` | Set color of payment forms | false |
| `showSocialNetworksInColor` | `Boolean` | Set color of social networks | false |
| `logo` | `String` | Link of Store logo | -

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

This app provides some CSS classes as an API for style customization.

To use this CSS API, you must add the `styles` builder and create an app styling CSS file.

1. Add the `styles` builder to your `manifest.json`:

```json
  "builders": {
    "styles": "1.x"
  }
```

2. Create a file called `vtex.footer.css` inside the `styles/css` folder. Add your custom styles:

```css
.container {
  margin-top: 10px;
}
```
Also, create a `vtex.footer.css` file in `styles/css` for your handlers customization.

#### CSS namespaces
Below, we describe the namespaces that are define in the `Footer`.

| Class name         |    Description     |  Component Source                                      |
| ------------------ | ----------         |------------------------------------------------------- |
| `footer`        |  The main content of the footer                     | [index](/react/index.js) |
| `container`        |  The generical container of the footer                     | [index](/react/index.js) |
| `linksContainer`        |  The wrapper containing the matrices of links                     | [index](/react/index.js) |
| `matrixContainer`        |  The container that holds all the listContainers                    | [FooterLinksMatrix](react/components/FooterLinksMatrix.js) |
| `matrixItem`        |  The wrapper for an item of the matrix. (e.g, `listContainer`)           | [FooterLinksMatrix](react/components/FooterLinksMatrix.js) |
| `listContainer`        |  The wrapper containing the `listTitle` and a `list`                     | [footerList](react/components/footerList.js) |
| `listContainerHorizontal`        |  The properties to be applied when the `listContainer` is horizontal | [footerList](react/components/footerList.js) |
| `listContainerRightAligned`        |  The properties to be applied when the `listContainer` is right aligned | [footerList](react/components/footerList.js) |
| `listTitle`        |  The title of a item list. (e.g, `Institutional`) | [footerList](react/components/footerList.js) |
| `list`        |  The container for a list of `listItem`                      | [footerList](react/components/footerList.js) |
| `listHorizontal`        |  The properties to be applied to the list when the `horizontal` props is true | [footerList](react/components/footerList.js) |
| `listItem`        |  The item of a list                     | [footerList](react/components/footerList.js) |
| `listLink`        |  The link inside a list                     | [footerList](react/components/footerList.js) |
| `listItemHorizontal`        |  The properties to be applied to the item list when the `horizontal` props is true| [footerList](react/components/footerList.js) |
| `socialNetworkContainer`        |  The social networks container                    | [index](/react/index.js) |
| `socialNetworkItem`        |  The image of a social network                     | [FooterSocialNetworkList](react/components/FooterSocialNetworkList.js) |
| `paymentMatrix`        |  The wrapper that holds all the paymentMatrixItems                     | [FooterPaymentFormMatrix](react/components/FooterPaymentFormMatrix.js) |
| `paymentMatrixItem`        |  The image of a social network                     | [FooterPaymentFormMatrix](react/components/FooterPaymentFormMatrix.js) |
| `paymentFormItem`        |  The image of the payment form                     | [FooterPaymentFormList](react/components/FooterPaymentFormList.js) |
| `textContainer`        |  The container for the text informations of the store | [index](/react/index.js) |
| `badgeList`        |  The wrapper for all the bagdes                     | [FooterVtexLogo](react/components/FooterVtexLogo.js) |
| `badge`        |  One store badge                     | [FooterVtexLogo](react/components/FooterVtexLogo.js) |
| `vtexLogoItem`        |  The 'Powered by VTEX' logo                     | [FooterVtexLogo](react/components/FooterVtexLogo.js) |
| `logoImage`        |  The image of one logo of the store                     | [FooterVtexLogo](react/components/FooterVtexLogo.js) |

When the footer is displayed in mobile view, the `matrixContainer` constricts itself and displays a list of `matrixItemSmall`, each one containing an `accordion`. Below, we describe the tokens, their explanation and the component where it is located.

| Class name         |    Description     |  Component Source                                      |
| ------------------ | ----------         |------------------------------------------------------- |
| `matrixItemSmall`        |  The item of the matrix                     | [FooterLinksMatrix](react/components/FooterLinksMatrix.js) |
| `accordionTitle`        |  The accordion title                     | [Accordion](react/components/Accordion.js) |
| `accordion`        |  The accordion container for a list of `accordionItem` | [Accordion](react/components/Accordion.js) |
| `accordionItem`        |  The item inside the accordion (e.g, `listLink`) |[FooterLinksMatrix](react/components/FooterLinksMatrix.js)|
| `accordionIcon`        |  The accordion icon                     | [Accordion](react/components/Accordion.js) |


## Troubleshooting
You can check if others are passing through similar issues [here](https://github.com/vtex-apps/store-footer/issues). Also feel free to [open issues](https://github.com/vtex-apps/store-footer/issues/new) or contribute with pull requests.

## Tests
:construction: :construction: :construction: