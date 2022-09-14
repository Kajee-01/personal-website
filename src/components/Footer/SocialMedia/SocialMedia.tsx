import clsx from "clsx";
import { ReactComponent as GithubLogo } from './github.svg'
import { ReactComponent as FacebookLogo } from './facebook.svg'
import { ReactComponent as InstagramLogo } from './instagram.svg'
import { ReactComponent as YouTubeLogo } from './youtube.svg'

export interface Props {
  className?: string;
}

const SocialMedia = ({ className }: Props) => {
  return (
    <ul className={clsx(className, 'flex gap-3 fill-current justify-center items-center')}>
      <li className="w-8">
        <a href="https://www.github.com/Kajee-01">
          <GithubLogo className="fill-current"/>
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.facebook.com/kj.tamilan">
          <FacebookLogo className="fill-current" />
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.instagram.com/kj_creation_001/">
          <InstagramLogo className="fill-current" />
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.youtube.com/channel/UCkN6ziCLGu_nx3g9Q9FVW1Q">
          <YouTubeLogo className="fill-current" />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia;
