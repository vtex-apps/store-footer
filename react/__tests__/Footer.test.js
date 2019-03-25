import React from 'react'
import { render } from '@vtex/test-tools/react'

import Footer from '../index'

describe('<Footer /> component', () => {
  const renderComponent = customProps => {
    const props = {
      socialNetworks: [
        {
          url: 'https://www.facebook.com/',
          socialNetwork: 'Facebook',
        },
      ],
      sectionLinks: [
        {
          title: 'Section title',
          links: [{ url: 'mockedUrl', title: 'Some title' }],
        },
      ],
      badges: [{ image: 'imageURL' }],
      paymentForms: [
        {
          title: 'Title payment',
          paymentTypes: ['MasterCard', 'Visa', 'Diners Club'],
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
    const { asFragment } = renderComponent()
    expect(asFragment()).toBeDefined()
  })

  it('should match the snapshot', () => {
    const { asFragment } = renderComponent()
    expect(asFragment()).toMatchSnapshot()
  })
})
