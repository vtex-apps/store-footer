import React from 'react'
import type { CssHandlesTypes } from 'vtex.css-handles'
import { useCssHandles } from 'vtex.css-handles'

import { PaymentMethodsHandlesProvider } from './HandlesContext'
import type { PaymentMethod } from './PaymentMethodIcon'
import PaymentMethodIcon, {
  CSS_HANDLES as PaymentMethodIconHandles,
} from './PaymentMethodIcon'

export const CSS_HANDLES = [
  'acceptedPaymentMethodContainer',
  ...PaymentMethodIconHandles,
] as const

interface Props {
  /** list of accepeted payment methods */
  paymentMethods: PaymentMethod[]
  /** Define if payment method icons will be coloured */
  showInColor: boolean
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}

function AcceptedPaymentMethods({
  paymentMethods = [],
  showInColor = false,
  classes,
}: Props) {
  const { handles, withModifiers } = useCssHandles(CSS_HANDLES, {
    classes,
  })

  return (
    <PaymentMethodsHandlesProvider
      handles={handles}
      withModifiers={withModifiers}
    >
      <div className={`${handles.acceptedPaymentMethodContainer} nh2 flex`}>
        {paymentMethods.map((paymentMethod) => (
          <PaymentMethodIcon
            key={paymentMethod}
            paymentMethod={paymentMethod}
            showInColor={showInColor}
          />
        ))}
      </div>
    </PaymentMethodsHandlesProvider>
  )
}

AcceptedPaymentMethods.schema = {
  title: 'admin/editor.footer.acceptedPaymentMethods.title',
  description: 'admin/editor.footer.acceptedPaymentMethods.description',
  type: 'object',
  properties: {
    showInColor: {
      default: false,
      isLayout: true,
      title: 'admin/editor.footer.showPaymentMethodsInColor.title',
      type: 'boolean',
    },
  },
}

export default AcceptedPaymentMethods
