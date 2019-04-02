import React from 'react'
import style from './PaymentMethodIcon.css'
import withImage from './withImage'

/**
 * Shows an image for the payments forms accepted
 */
const PaymentMethodIcon: StorefrontFunctionComponent<
  PaymentMethodIconProps
> = ({ imageSrc }) => {
  if (!imageSrc) {
    return null
  }

  return <img className={`${style.paymentFormItem} pr0 w2 h2`} src={imageSrc} />
}

interface PaymentMethodIconProps extends PaymentMethodIconSchema {
  imageSrc: string
}

interface PaymentMethodIconSchema {
  /** Indicates which one of the payments forms should the component show its image */
  paymentType: 'Diners Club' | 'MasterCard' | 'Visa'
  /** If true, the original logo (with color) is used. If not, the grayscale's one */
  showInColor: boolean
}

PaymentMethodIcon.displayName = 'PaymentMethodIcon'

// tslint:disable: object-literal-sort-keys
PaymentMethodIcon.schema = {
  title: 'editor.footer.paymentMethodIcon.title',
  description: 'editor.footer.paymentMethodIcon.description',
}

const getImagePathFromProps = ({
  paymentType,
  showInColor,
}: PaymentMethodIconSchema) => `${paymentType}${showInColor ? '' : '-BW'}.svg`

export default withImage(getImagePathFromProps)(PaymentMethodIcon)
