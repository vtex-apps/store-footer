import React from 'react'
import PaymentMethodIcon, {
  PaymentMethod,
} from './components/PaymentMethodIcon'
import style from './components/AcceptedPaymentMethods.css'

const AcceptedPaymentMethods: StorefrontFunctionComponent<
  AcceptedPaymentMethodsProps
> = props => {
  return (
    <div className={`${style.acceptedPaymentMethodContainer} nh2`}>
      {props.paymentMethods.map(paymentMethod => (
        <PaymentMethodIcon
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

interface AcceptedPaymentMethodsProps {
  paymentMethods: PaymentMethod[]
  showInColor: boolean
}

// tslint:disable: object-literal-sort-keys
AcceptedPaymentMethods.schema = {
  title: 'editor.footer.acceptedPaymentMethods.title',
  description: 'editor.footer.acceptedPaymentMethods.description',
  type: 'object',
  properties: {
    showInColor: {
      default: false,
      isLayout: true,
      title: 'editor.footer.showPaymentMethodsInColor.title',
      type: 'boolean',
    },
    paymentMethods: {
      title: 'editor.footer.acceptedPaymentMethods.title',
      type: 'array',
      minItems: 1,
      maxItems: 5,
      items: {
        title: 'editor.footer.paymentMethodIcon.method',
        type: 'string',
        default: 'MasterCard',
        enum: ['MasterCard', 'Visa', 'Diners Club'],
      },
    },
  },
}

export default AcceptedPaymentMethods
