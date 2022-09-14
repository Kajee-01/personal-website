import clsx from 'clsx'
import LanguageSwitch from './LanguageSwitch'
import ThemeSwitch from './ThemeSwitch'

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <header className={clsx(className, 'flex justify-between mx-w-md container mx-auto px-4 pt-4 sm:pt-6 pb-8',)}>
      <ThemeSwitch/>
      <LanguageSwitch/>
    </header>
  )
}

export default Header

