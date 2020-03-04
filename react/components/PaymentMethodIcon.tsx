import React from 'react'
import { useIntl } from 'react-intl'
import { formatIOMessage } from 'vtex.native-types'
import { useCssHandles } from 'vtex.css-handles'

import dinersClub from '../images/diners club.svg'
import dinersClubBw from '../images/diners club-bw.svg'
import mastercard from '../images/mastercard.svg'
import mastercardBw from '../images/mastercard-bw.svg'
import visa from '../images/visa.svg'
import visaBw from '../images/visa-bw.svg'

const PAYMENT_METHOD_ICONS = {
  'diners club': dinersClub,
  'diners club-bw': dinersClubBw,
  mastercard: mastercard,
  'mastercard-bw': mastercardBw,
  visa,
  'visa-bw': visaBw
}

function isValidIcon (key: string): key is keyof typeof PAYMENT_METHOD_ICONS {
  return key in PAYMENT_METHOD_ICONS
}

interface PaymentMethodIconProps {
  imageSrc?: string
  /** If true, the original logo (with color) is used. If not, the grayscale's one */
  showInColor?: boolean
  /** Indicates which one of the payments method should the component show its image */
  paymentMethod: PaymentMethod
}

const CSS_HANDLES = ['paymentMethodIcon', 'paymentMethodIconImage']

const getImagePathFromProps = ({
  paymentMethod,
  showInColor,
}: PaymentMethodIconProps) =>
  `${paymentMethod.toLowerCase()}${showInColor ? '' : '-bw'}`

/**
 * Shows an image for the payments forms accepted
 */
const PaymentMethodIcon: StorefrontFunctionComponent<
  PaymentMethodIconProps
> = ({ paymentMethod, showInColor }) => {
  const intl = useIntl()
  const handles = useCssHandles(CSS_HANDLES)

  const imagePath = getImagePathFromProps({paymentMethod, showInColor})

  if (!isValidIcon(imagePath)) {
    return null
  }

  const imageSrc = PAYMENT_METHOD_ICONS[imagePath]

  return (
    <div className={`${handles.paymentMethodIcon} w2 h2 mh2 flex items-center`}>
      <img
        className={`${handles.paymentMethodIconImage} w-100`}
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

export default PaymentMethodIcon
