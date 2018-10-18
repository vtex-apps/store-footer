import PropTypes from 'prop-types'
import React from 'react'

import footerList from './footerList'

export const FooterLinkItem = ({ url, title }) => (
  <a className="vtex-footer__list-link dib no-underline underline-hover mb0 mt2 w-100 f6 truncate mid-gray pointer" href={url}>
    {title}
  </a>
)

FooterLinkItem.displayName = 'FooterLinkItem'

FooterLinkItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default footerList(FooterLinkItem)
