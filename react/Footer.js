import React, { Suspense } from 'react'
import { ExtensionPoint, useChildBlock, NoSSR } from 'vtex.render-runtime'
import { useDevice } from 'vtex.device-detector'
import useFold from './hooks/useFold'

const LegacyFooter = React.lazy(() => import('./legacy/Footer'))

const Footer = props => {
  /** This is a temporary fix--this behaviour is supposed
   * to come from render-runtime delayed hydration in the
   * future. */
  const shouldRenderBelowTheFold = useFold()

  const hasFooterDesktop = !!useChildBlock({
    id: 'footer-layout.desktop',
  })
  const hasFooterMobile = !!useChildBlock({
    id: 'footer-layout.mobile',
  })

  const { isMobile } = useDevice()

  if (!shouldRenderBelowTheFold) {
    return null
  }

  const hasFooterLayout = hasFooterDesktop || hasFooterMobile

  if (!hasFooterLayout) {
    return (
      <NoSSR>
        <Suspense fallback={<div />}>
          <LegacyFooter {...props} />
        </Suspense>
      </NoSSR>
    )
  }

  // SSR fallback
  return isMobile ? (
    <ExtensionPoint id="footer-layout.mobile" />
  ) : (
    <ExtensionPoint id="footer-layout.desktop" />
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
