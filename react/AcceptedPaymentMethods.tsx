import React from 'react'

import PaymentMethodIcon, {
  PaymentMethod,
} from './components/PaymentMethodIcon'
import style from './components/AcceptedPaymentMethods.css'

interface Props {
  paymentMethods: PaymentMethod[]
  showInColor: boolean
}

const AcceptedPaymentMethods: React.FC<Props> = props => {
  return (
    <div className={`${style.acceptedPaymentMethodContainer} nh2 flex`}>
      {props.paymentMethods.map(paymentMethod => (
        <PaymentMethodIcon
          key={paymentMethod}
          paymentMethod={paymentMethod}
          showInColor={props.showInColor}
        />
      ))}
    </div>
  )
}

AcceptedPaymentMethods.defaultProps = {
  paymentMethods: [],
  showInColor: false,
}
;(AcceptedPaymentMethods as any).schema = {
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
