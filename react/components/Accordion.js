import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Collapse } from 'react-collapse'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { IconCaretDown, IconCaretRight } from 'vtex.styleguide'

import footer from '../footer.css'

class Accordion extends Component {
  static propTypes = {
    /** Title shown in Accordion */
    title: PropTypes.string.isRequired,
    /** Accordion children. Components shown inside Collapse */
    children: PropTypes.node.isRequired,
    /** Internationalization */
    intl: intlShape.isRequired,
  }

  state = {
    open: false,
  }

  render() {
    const { children, title } = this.props
    const { open } = this.state

    return (
      <div className={`${footer.accordion} pv2`}>
        <div
          className="pointer"
          onClick={() => {
            this.setState({ open: !open })
          }}>
          <div>
            {title && (
              <span className={`${footer.accordionTitle} dib ma0 ttu`}>
                <FormattedMessage id={title} defaultMessage={title} />
              </span>
            )}
            <span className={`${footer.accordionIcon} fr`}>
              {open ? <IconCaretDown /> : <IconCaretRight />}
            </span>
          </div>
        </div>

        <div style={{ overflowY: 'auto' }}>
          <Collapse isOpened={open}>{children}</Collapse>
        </div>
      </div >
    )
  }
}

export default injectIntl(Accordion)
