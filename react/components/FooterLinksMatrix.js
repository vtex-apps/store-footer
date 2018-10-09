import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import Accordion from './Accordion'
import FooterLinkList, { FooterLinkItem } from './FooterLinkList'

export default class FooterLinksMatrix extends Component {
  static propTypes = {
    /** Links to be shown */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        /** Link section title */
        title: PropTypes.string.isRequired,
        /** Link section links */
        links: PropTypes.arrayOf(
          PropTypes.shape({
            /** Link text */
            title: PropTypes.string.isRequired,
          }),
        ),
      })
    ),
  }

  render() {
    const { links } = this.props

    return (
      links && (
        <div className="flex flex-wrap">
          {links.map((linkItem, index) => (
            <Fragment key={`links-container-${index}`}>
              <div className="flex flex-auto dn-s flex-ns">
                <FooterLinkList
                  titleId={linkItem.title}
                  list={linkItem.links}
                />
              </div>
              <div className="bb b--silver dn-ns db-s w-100 ph2 pv3">
                <Accordion title={linkItem.title}>
                  {linkItem.links.map(link => (
                    <div
                      key={`${link.title}-${index}`}
                      className="pt1">
                      <FooterLinkItem {...link} />
                    </div>
                  ))}
                </Accordion>
              </div>
            </Fragment>
          ))}
        </div>
      )
    )
  }
}
