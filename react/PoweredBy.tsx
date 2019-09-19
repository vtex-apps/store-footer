import React from 'react'
import classNames from 'classnames'
import { withRuntimeContext } from 'vtex.render-runtime'
import { isGoCommerceAccount } from './modules/isGoCommerceAccount'
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

  if (isGoCommerceAccount(runtime.account)) {
    return (
      <a
        href="https://www.gocommerce.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classNames(style.poweredBy, 'flex items-center w4')}>
          <img
            className={`${style.poweredByImage} w-100`}
            src={imageSrc}
            alt="GoCommerce"
          />
        </div>
      </a>
    )
  }

  return (
    <div className={classNames(style.poweredBy, 'flex items-center h3 w3')}>
      <img
        className={`${style.poweredByImage} w-100`}
        src={imageSrc}
        alt="VTEX"
      />
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
  `${isGoCommerceAccount(runtime.account) ? 'gocommerce' : 'vtex'}${
    showInColor ? '' : '-bw'
  }.svg`

export default withRuntimeContext(withImage(getImagePathFromProps)(PoweredBy))
