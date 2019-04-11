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

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className={`${
        style.socialNetworkLink
      } c-muted-1 w2 h2 mh2 flex items-center`}>
      <img
        className={`${style.socialNetworkImage}`}
        src={imageSrc}
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
  name: SocialNetworkName
}

export enum SocialNetworkName {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  Instagram = 'Instagram',
  YouTube = 'YouTube',
}
const getImagePathFromProps = ({ name, showInColor }: SocialNetworkProps) =>
  `${name}${showInColor ? '' : '-BW'}.svg`

export default withImage(getImagePathFromProps)(SocialNetwork)
