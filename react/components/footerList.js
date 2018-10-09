import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component'
}

export default function footerList(WrappedComponent) {
  class FooterList extends Component {
    static displayName = `FooterList(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      titleId: PropTypes.string,
      list: PropTypes.array,
      intl: intlShape.isRequired,
      alignRight: PropTypes.bool,
      horizontal: PropTypes.bool,
      titleCapitals: PropTypes.bool,
    }

    static defaultProps = {
      alignRight: false,
      horizontal: false,
    }

    formatMessage(id) {
      return this.props.intl.messages[id] && this.props.intl.formatMessage({ id }) || id
    }

    render() {
      const {
        list,
        titleId,
        alignRight,
        horizontal,
        titleCapitals,
        ...otherProps
      } = this.props

      if (!list || list.length === 0) return null

      const titleClasses = classNames('vtex-footer__list-title f6 ma0 db', {
        'ttu': !titleCapitals,
      })

      const listContainerClasses = classNames('pl0 pr1 w-100 mt2 mt0-ns', {
        'ml-auto-m': alignRight,
        'w-auto-m': horizontal,
      })

      const listClasses = classNames(
        'list flex flex-column flex-wrap pa0 mb0 mt3',
        {
          'flex-row flex-wrap': horizontal,
        }
      )

      const listItemClasses = classNames('mr0 w-100 mr3-m', {
        'mr3 w-auto': horizontal,
      })

      return (
        <div className={listContainerClasses}>
          <span className={titleClasses}>
            {titleId && this.formatMessage(titleId)}
          </span>
          <ul className={listClasses}>
            {list.map((item, index) => (
              <li key={index} className={listItemClasses}>
                <WrappedComponent {...otherProps} {...item} />
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

  return injectIntl(FooterList)
}
