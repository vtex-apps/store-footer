import PropTypes from 'prop-types'
import React from 'react'

import footerList from './footerList'
import footer from '../footer.css'

const targetByType = {
  self_tab: '_self', 
  new_tab: '_blank'
}

export const FooterLinkItem = ({ url, title, target }) => (
  <a
    className={`${footer.listLink} dib no-underline underline-hover mb0 mt2 w-100 t-small truncate c-muted-1 pointer`}
    href={url}
    target={target ? targetByType[target] : '_self'}
  >
    {title}
  </a>
)

FooterLinkItem.displayName = 'FooterLinkItem'

FooterLinkItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['self_tab', 'new_tab'])
}

export default footerList(FooterLinkItem)
