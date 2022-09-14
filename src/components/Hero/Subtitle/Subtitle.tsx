import clsx from 'clsx'
import Typed from 'react-typed'

export interface Props {
  className?: string
}

const Subtitle = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'flex justify-center px-2')}>
      <Typed className='text-2xl font-sub'
      strings={['Graphic Designer...','Full Stack Developer...','UI UX Designer...']}
      loop
       typeSpeed={100}
      />
    </div>
  )
}

export default Subtitle
