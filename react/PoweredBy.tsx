import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import type { RenderContext } from 'vtex.render-runtime'
import { useRuntime } from 'vtex.render-runtime'

import { PLATFORM_GOCOMMERCE } from './modules/platformCode'
import gocommerce from './images/gocommerce.svg'
import gocommerceBw from './images/gocommerce-bw.svg'
import vtex from './images/vtex.svg'
import vtexBw from './images/vtex-bw.svg'

const CSS_HANDLES = ['poweredBy', 'poweredByImage', 'poweredByLink'] as const

const POWERED_BY_ICONS = {
  gocommerce,
  'gocommerce-bw': gocommerceBw,
  vtex,
  'vtex-bw': vtexBw,
}

interface Props {
  /**
   * Define if logo should be displayed in color
   * @default false
   * */
  showInColor?: boolean
}

function isValidIcon(key: string): key is keyof typeof POWERED_BY_ICONS {
  return key in POWERED_BY_ICONS
}

const getImagePathFromProps = (platform: string, showInColor: boolean) =>
  `${platform}${showInColor ? '' : '-bw'}`

/**
 * "Powered By VTEX/GoCommerce" image component, used in Footer
 */
function PoweredBy({ showInColor = false }: Props) {
  const { handles } = useCssHandles(CSS_HANDLES)
  const { platform } = useRuntime() as RenderContext.RenderContext

  const imagePath = getImagePathFromProps(platform, showInColor)

  if (!isValidIcon(imagePath)) {
    return null
  }

  const imageSrc = POWERED_BY_ICONS[imagePath]

  if (platform === PLATFORM_GOCOMMERCE) {
    return (
      <a
        href="https://www.gocommerce.com/?utm_source=store_footer"
        className={handles.poweredByLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${handles.poweredBy} flex items-center w4`}>
          <img
            className={`${handles.poweredByImage} w-100`}
            src={imageSrc}
            alt="GoCommerce"
          />
        </div>
      </a>
    )
  }

  return (
    <div className={`${handles.poweredBy} flex items-center h3 w3`}>
      <img
        className={`${handles.poweredByImage} w-100`}
        src={imageSrc}
        alt="VTEX"
      />
    </div>
  )
}

PoweredBy.displayName = 'PoweredBy'

export default PoweredBy
