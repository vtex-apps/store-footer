import React from 'react'
import classNames from 'classnames'
import { withRuntimeContext } from 'vtex.render-runtime'
import { Functions } from '@gocommerce/utils'
import withImage from './components/withImage'
import style from './components/PoweredBy.css'

/**
 * "Powered By VTEX/GoCommerce" image component, used in Footer
 */
const PoweredBy: StorefrontFunctionComponent<PoweredByProps> = ({
  runtime,
  imageSrc,
}) => {
  if (!imageSrc) {
    return null
  }

  const isPlatformGCResult = Functions.isGoCommerceAcc(runtime.account)
  const logoItemClasses = classNames(style.poweredByImage, {
    w4: isPlatformGCResult,
    'h3 w3': !isPlatformGCResult,
  })

  return (
    <div className={`${style.badgeList}`}>
      <img className={logoItemClasses} src={imageSrc} />
    </div>
  )
}

interface PoweredByProps extends PoweredBySchema {
  runtime: {
    account: string
  }
  logoUrl: string
  imageSrc: string
}

interface PoweredBySchema {
  showInColor: boolean
}

PoweredBy.displayName = 'PoweredBy'

const getImagePathFromProps = ({ runtime, showInColor }: PoweredByProps) =>
  `${Functions.isGoCommerceAcc(runtime.account) ? 'GoCommerce' : 'VTEX'}${
    showInColor ? '' : '-BW'
  }.svg`

export default withRuntimeContext(withImage(getImagePathFromProps)(PoweredBy))
