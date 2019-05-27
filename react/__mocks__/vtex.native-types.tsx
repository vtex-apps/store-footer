import { FormattedMessage, InjectedIntl } from 'react-intl'

export const IOMessage = FormattedMessage

export const formatIOMessage = ({
  id,
  intl,
}: {
  id: string
  intl: InjectedIntl
}) => intl.formatMessage({ id })
