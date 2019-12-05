📢 Don't fork this project. Use, [contribute](https://github.com/vtex-apps/awesome-io#contributing), or open issues through [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Footer

Footer is a store component that shows information about the store such as address, social networks and payment methods. Furthermore, it is possible to add hyperlinks for privacy policy, FAQ, benefits and attendance. This app is used by store theme.

![image](https://user-images.githubusercontent.com/284515/70253374-dde10680-1761-11ea-8a81-856cec500f89.png)

## Configuration

1. Import the `vtex.store-footer`'s app to your theme's dependencies in the `manifest.json`, for example:

```json
  dependencies: {
    "vtex.store-footer: 2.x"
  }
```

2. Define the `footer` block. For example:

```json
{
  "footer": {
    "blocks": ["footer-layout.desktop", "footer-layout.mobile"]
  },
  "footer-layout.desktop": {
    "children": [
      "flex-layout.row#footer-desktop"
    ]
  },
  "footer-layout.mobile": {
    "children": [
      "flex-layout.row#footer-mobile"
    ]
  },
  "flex-layout.row#footer-desktop": {
    "children": [
      "social-networks",
      "accepted-payment-methods",
      "powered-by"
    ]
  },
  "flex-layout.row#footer-mobile": {
    "children": [
      "social-networks",
      "accepted-payment-methods",
      "powered-by"
    ]
  },
  "social-networks": {
    "props": {
      "socialNetworks": [
        { "url": "https://facebook.com/foo", "name": "Facebook" },
        { "url": "https://twitter.com/foo", "name": "Twitter" }
      ]
    }
  },
  "accepted-payment-methods": {
    "props": {
      "paymentMethods": ["mastercard", "visa", "diners club"]
    }
  }
}
```

`social-networks`:

| Prop name | Type          | Description    |
| --------- | ------------- | -------------- |
| `title` | `string` | Text to show above of list of links |
| `socialNetworks`   | `Array(SocialNetwork)` | Array of social networks |
| `showInColor` | `boolean` | Whether the icons are colored or not |

SocialNetwork

| Prop name | Type          | Description    |
| --------- | ------------- | -------------- |
| `url`   | `string` | Link to the social network profile |
| `name`   | `enum` | Possible values: `facebook`, `twitter`, `linkedin`, `youtube`, `pinterest` |

`accepted-payment-methods`:

| Prop name | Type          | Description    |
| --------- | ------------- | -------------- |
| `paymentMethods`   | `Array` | Possible values: `mastercard`, `visa`, `diners club` |
| `showInColor` | `boolean` | Whether the icons are colored or not |

`powered-by`:

| Prop name | Type          | Description    |
| --------- | ------------- | -------------- |
| `showInColor` | `boolean` | Whether the icons are colored or not |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization). 

`footer-layout`:

| CSS Handles |
| --- |
| `footerLayout` |
| `footerLayoutSpacer` |

`social-networks`:

| CSS Handles |
| --- |
| `socialNetworksTitle` |
| `socialNetworksContainer` |
| `socialNetworkWrapper` |
| `socialNetworkLink` |
| `socialNetworkImage` |

`accepted-payment-methods`:

| CSS Handles |
| --- |
| `acceptedPaymentMethodContainer` |
| `paymentMethodIcon` |
| `paymentMethodIconImage` |

`powered-by`:

| CSS Handles |
| --- |
| `poweredBy` |
| `poweredByImage` |
| `poweredByLink` |