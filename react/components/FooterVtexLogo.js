import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withImage from './withImage'
import footer from '../footer.css'

const isPlatformGC = account => account.indexOf('gc_') === 0 || account.indexOf('gc-') === 0

/**
 * "Powered By Vtex" image's component, used in Footer
 */
const FooterVtexLogo = ({ account, logoUrl, imageSrc }) => {
  if (!imageSrc) {
    return null
  }

  return (
    <div className={`${footer.badgeList} flex flex-row justify-center pv4-s pa0-ns items-center ml-auto-m`}>
      <span className={`${footer.badge} pa2-s pa1-ns`}>
        <img className={`${footer.logoImage} h3`} src={logoUrl} />
      </span>
      <span className={`${footer.badge} pa2-s pa1-ns nt7-ns`}>
        <img className={`${footer.vtexLogoItem} ${isPlatformGC(account) ? 'w4' : 'h3 w3'}`} src={imageSrc} />
      </span>
    </div>
  )
}

FooterVtexLogo.displayName = 'FooterVtexLogo'

FooterVtexLogo.propTypes = {
  account: PropTypes.string,
  /** If true, the original logo (with color) is used. If not, the grayscale's one */
  showInColor: PropTypes.bool,
  /** The source for an external customizable logo to show above "Powered By Vtex" */
  logoUrl: PropTypes.string,
}

const getImagePathFromProps = ({ showInColor, account }) =>
  `${isPlatformGC(account) ? 'GoCommerce' : 'VTEX'}${showInColor ? '' : '-BW'}.svg`

export default withImage(getImagePathFromProps)(FooterVtexLogo)
