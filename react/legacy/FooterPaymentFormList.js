import React from 'react'
import PropTypes from 'prop-types'

import footerList from './footerList'
import withImage from './withImage'
import footer from './footer.css'

/**
 * Shows an image for the payments forms accepted
 */
const FooterPaymentFormItem = ({ imageSrc }) => {
  if (!imageSrc) {
    return null
  }

  return (
    <img
      className={`${footer.paymentFormItem} pr0 w2 h2`}
      src={imageSrc}
      alt=""
    />
  )
}

FooterPaymentFormItem.displayName = 'FooterPaymentFormItem'

FooterPaymentFormItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
}

const getImagePathFromProps = ({ paymentType, showInColor }) =>
  `${paymentType.toLowerCase()}${showInColor ? '' : '-bw'}.svg`

export default footerList(
  withImage(getImagePathFromProps)(FooterPaymentFormItem)
)
