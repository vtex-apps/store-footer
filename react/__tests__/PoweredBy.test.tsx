import React from 'react'
import { render, screen } from '@vtex/test-tools/react'

import PoweredBy from '../PoweredBy'

describe('PoweredBy', () => {
  it('should get the platform from runtime', async () => {
    render(<PoweredBy />)

    const element = await screen.findByAltText('VTEX')

    const src = element.getAttribute('src')

    expect(src).toBe('vtex-bw.svg')
  })
})
