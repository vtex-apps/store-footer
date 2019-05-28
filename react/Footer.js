import React from 'react'
import { ExtensionPoint, useChildBlock, useRuntime } from 'vtex.render-runtime'
import LegacyFooter from './legacy/Footer'
import Media from 'react-media'

const Footer = props => {
  const footerDesktop = !!useChildBlock({
    id: 'footer-layout.desktop',
  })
  const footerMobile = !!useChildBlock({
    id: 'footer-layout.mobile',
  })

  const {
    hints: { mobile },
  } = useRuntime()

  const hasFooterLayout = footerDesktop || footerMobile

  if (!hasFooterLayout) {
    return <LegacyFooter {...props} />
  }

  // SSR fallback
  if (!window || !window.matchMedia) {
    return mobile ? (
      <ExtensionPoint id="footer-layout.mobile" />
    ) : (
      <ExtensionPoint id="footer-layout.desktop" />
    )
  }

  return (
    <Media query="(max-width:40rem)">
      {matches =>
        matches ? (
          <ExtensionPoint id="footer-layout.mobile" />
        ) : (
          <ExtensionPoint id="footer-layout.desktop" />
        )
      }
    </Media>
  )
}

Footer.schema = {
  title: 'admin/editor.footer.title',
  description: 'admin/editor.footer.description',
  type: 'object',
  properties: {
    showPaymentFormsInColor: {
      type: 'boolean',
      title: 'admin/editor.footer.showPaymentMethodsInColor.title',
      default: false,
      isLayout: true,
    },
    showSocialNetworksInColor: {
      type: 'boolean',
      title: 'admin/editor.footer.showSocialNetworksInColor.title',
      default: false,
      isLayout: true,
    },
    showVtexLogoInColor: {
      type: 'boolean',
      title: 'admin/editor.footer.showVtexLogoInColor.title',
      default: false,
      isLayout: true,
    },
  },
}

export default Footer
