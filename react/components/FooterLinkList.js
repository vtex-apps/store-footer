import PropTypes from 'prop-types'
import React from 'react'

import footerList from './footerList'
import footer from '../footer.css'

export const FooterLinkItem = ({ url, title }) => (
  <a className={`${footer.listLink} dib no-underline underline-hover mb0 mt2 w-100 t-small truncate c-muted-1 pointer" href={url}`}>
    {title}
  </a>
)

FooterLinkItem.displayName = 'FooterLinkItem'

FooterLinkItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default footerList(FooterLinkItem)
