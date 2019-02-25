import React from 'react'
import { render } from 'test-utils'

import Footer from '../index'

describe('<Footer /> component', () => {
  const renderComponent = customProps => {
    const OBJECT_LIKE_LINK = {
      url: 'mockedUrl',
      title: 'Some title',
    }
    const props = {
      socialNetworks: [OBJECT_LIKE_LINK],
      sectionLinks: [
        {
          title: 'Section title',
          links: [OBJECT_LIKE_LINK],
        },
      ],
      badges: [{ image: 'imageURL' }],
      paymentForms: [
        {
          title: 'Title payment',
          paymentTypes: ['Mastercard, Visa, AmericanExpress'],
        },
      ],
      showPaymentFormsInColor: true,
      showSocialNetworksInColor: true,
      showVtexLogoInColor: true,
      logo: 'logoUrl',
      ...customProps,
    }
    return render(<Footer {...props} />)
  }

  it('should be rendered', () => {
    expect(renderComponent()).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(renderComponent()).toMatchSnapshot()
  })
})
