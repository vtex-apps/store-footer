import React from 'react'
import { injectIntl } from 'react-intl'
import { formatIOMessage } from 'vtex.native-types'

import style from './PaymentMethodIcon.css'
import withImage from './withImage'

interface PaymentMethodIconProps {
  imageSrc?: string
  /** If true, the original logo (with color) is used. If not, the grayscale's one */
  showInColor?: boolean
  /** Indicates which one of the payments method should the component show its image */
  paymentMethod: PaymentMethod
  intl: any
}

/**
 * Shows an image for the payments forms accepted
 */
const PaymentMethodIcon: StorefrontFunctionComponent<
  PaymentMethodIconProps
> = ({ imageSrc, paymentMethod, intl }) => {
  if (!imageSrc) {
    return null
  }

  return (
    <div className={`${style.paymentMethodIcon} w2 h2 mh2 flex items-center`}>
      <img
        className={`${style.paymentMethodIconImage} w-100`}
        src={imageSrc}
        alt={formatIOMessage({ id: paymentMethod, intl })}
        title={formatIOMessage({ id: paymentMethod, intl })}
      />
    </div>
  )
}

export enum PaymentMethod {
  'diners club' = 'diners club',
  'mastercard' = 'mastercard',
  'visa' = 'visa',
}

const getImagePathFromProps = ({
  paymentMethod,
  showInColor,
}: PaymentMethodIconProps) =>
  `${paymentMethod.toLowerCase()}${showInColor ? '' : '-bw'}.svg`

export default withImage(getImagePathFromProps)(injectIntl(PaymentMethodIcon))
