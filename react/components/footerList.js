import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'

const getDisplayName = Component => {
  return Component.displayName || Component.name || 'Component'
}

export default (WrappedComponent) => {
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

      const listContainerClasses = classNames('vtex-footer__list-container pl0 pr1 w-100 mt2 mt0-ns', {
        'vtex-footer__list-container--right-aligned ml-auto-m': alignRight,
        'vtex-footer__list-container--horizontal w-auto-m': horizontal,
      })

      const listClasses = classNames('vtex-footer__list list flex flex-column flex-wrap pa0 mb0 mt3', {
        'vtex-footer__list--horizontal flex-row flex-wrap': horizontal,
      })

      const listItemClasses = classNames('vtex-footer__list-item mr0 w-100 mr3-m', {
        'vtex-footer__list-item--horizontal mr3 w-auto': horizontal,
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
