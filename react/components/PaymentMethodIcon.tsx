import React from 'react'
import style from './PaymentMethodIcon.css'
import withImage from './withImage'

/**
 * Shows an image for the payments forms accepted
 */
const PaymentMethodIcon: StorefrontFunctionComponent<
  PaymentMethodIconProps
> = ({ imageSrc, paymentMethod }) => {
  if (!imageSrc) {
    return null
  }

  return (
    <img
      className={`${style.paymentMethodIcon} w2 h2 ph2`}
      src={imageSrc}
      alt={paymentMethod}
      title={paymentMethod}
    />
  )
}

export enum PaymentMethod {
  'Diners Club' = 'Diners Club',
  'MasterCard' = 'MasterCard',
  'Visa' = 'Visa',
}

interface PaymentMethodIconProps {
  imageSrc?: string
  /** If true, the original logo (with color) is used. If not, the grayscale's one */
  showInColor?: boolean
  /** Indicates which one of the payments method should the component show its image */
  paymentMethod: PaymentMethod
}

const getImagePathFromProps = ({
  paymentMethod,
  showInColor,
}: PaymentMethodIconProps) => `${paymentMethod}${showInColor ? '' : '-BW'}.svg`

export default withImage(getImagePathFromProps)(PaymentMethodIcon)
