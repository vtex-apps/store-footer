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
      className={`${style.paymentFormItem} pr0 w2 h2`}
      src={imageSrc}
      alt={paymentMethod}
      title={paymentMethod}
    />
  )
}

interface PaymentMethodIconProps extends PaymentMethodIconSchema {
  imageSrc: string
}

interface PaymentMethodIconSchema {
  /** Indicates which one of the payments method should the component show its image */
  paymentMethod: 'Diners Club' | 'MasterCard' | 'Visa'
  /** If true, the original logo (with color) is used. If not, the grayscale's one */
  showInColor: boolean
}

PaymentMethodIcon.displayName = 'PaymentMethodIcon'

// tslint:disable: object-literal-sort-keys
PaymentMethodIcon.schema = {
  title: 'editor.footer.paymentMethodIcon.title',
  description: 'editor.footer.paymentMethodIcon.description',
  type: 'object',
  properties: {
    showInColor: {
      default: false,
      isLayout: true,
      title: 'editor.footer.showSocialNetworksInColor.title',
      type: 'boolean',
    },
    paymentMethod: {
      default: 'Visa',
      enum: ['Visa', 'MasterCard', 'Diners Club'],
      title: 'editor.footer.paymentMethodIcon.method',
      type: 'string',
    },
  },
}

const getImagePathFromProps = ({
  paymentMethod,
  showInColor,
}: PaymentMethodIconSchema) => `${paymentMethod}${showInColor ? '' : '-BW'}.svg`

export default withImage(getImagePathFromProps)(PaymentMethodIcon)
