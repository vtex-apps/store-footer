import React from 'react'
import { useIntl } from 'react-intl'
import { formatIOMessage } from 'vtex.native-types'

import dinersClub from '../../images/diners club.svg'
import dinersClubBw from '../../images/diners club-bw.svg'
import mastercard from '../../images/mastercard.svg'
import mastercardBw from '../../images/mastercard-bw.svg'
import visa from '../../images/visa.svg'
import visaBw from '../../images/visa-bw.svg'
import { usePaymentMethodsHandles } from './HandlesContext'

export const CSS_HANDLES = [
  'paymentMethodIcon',
  'paymentMethodIconImage',
] as const

const PAYMENT_METHOD_ICONS = {
  'diners club': dinersClub,
  'diners club-bw': dinersClubBw,
  mastercard,
  'mastercard-bw': mastercardBw,
  visa,
  'visa-bw': visaBw,
}

export type PaymentMethod = 'diners club' | 'mastercard' | 'visa'

function isValidIcon(key: string): key is keyof typeof PAYMENT_METHOD_ICONS {
  return key in PAYMENT_METHOD_ICONS
}

interface Props {
  imageSrc?: string
  /** If true, the original logo (with color) is used. If not, the grayscale's one */
  showInColor?: boolean
  /** Indicates which one of the payments method should the component show its image */
  paymentMethod: PaymentMethod
}

const getImagePathFromProps = ({
  paymentMethod,
  showInColor,
}: Pick<Props, 'paymentMethod' | 'showInColor'>) =>
  `${paymentMethod.toLowerCase()}${showInColor ? '' : '-bw'}`

/**
 * Shows an image for the payments forms accepted
 */
function PaymentMethodIcon({ paymentMethod, showInColor }: Props) {
  const intl = useIntl()

  const { handles } = usePaymentMethodsHandles()
  const imagePath = getImagePathFromProps({ paymentMethod, showInColor })

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

export default PaymentMethodIcon
