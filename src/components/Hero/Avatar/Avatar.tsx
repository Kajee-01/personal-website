import clsx from 'clsx'
import avatarImage from './kajeevan-profile.png'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx('mx-auto flex justify-center w-48 lg:w-56', className)}>
      <img alt="Profile avatar" src={avatarImage} />
    </div>
  )
}

export default Avatar
