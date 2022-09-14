import clsx from 'clsx'
import ukiLogo from './uki-logo.png'

export interface Props {
  className?: string
}

const UkiLogo = ({ className }: Props) => {
  return (
    <div className={clsx(className,)}>
      {/* <span>UkiLogo</span> */}
      <div className="w-36 h-36 flex justify-center items-center">
      <img alt="Uki Logo" src={ukiLogo} className="h-24" />
    </div>
    </div>
  )
}

export default UkiLogo
