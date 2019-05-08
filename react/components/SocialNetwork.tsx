import React from 'react'
import style from './SocialNetwork.css'
import withImage from './withImage'

/**
 * Shows an image for an specific social network
 */
const SocialNetwork: StorefrontFunctionComponent<SocialNetworkProps> = ({
  imageSrc,
  url,
  name,
}) => {
  if (!imageSrc) {
    return null
  }

  const normalizedName = String(name).toLowerCase()

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className={`${style.socialNetworkLink} ${style.socialNetworkLink}--${normalizedName} c-muted-1 w2 h2 mh2 flex items-center`}>
      <img
        className={`${style.socialNetworkImage} ${style.socialNetworkImage}--${normalizedName}`}
        src={imageSrc}
        alt={name}
        title={name}
      />
    </a>
  )
}

SocialNetwork.displayName = 'SocialNetwork'

interface SocialNetworkProps {
  imageSrc: string
  showInColor: boolean
  url: string
  name: string
}

const getImagePathFromProps = ({ name, showInColor }: SocialNetworkProps) =>
  `${name.toLowerCase()}${showInColor ? '' : '-bw'}.svg`

export default withImage(getImagePathFromProps)(SocialNetwork)
