import clsx from 'clsx'
// import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <h1
      className={clsx(
        className,
        'flex justify-center',
        'font-accent font-bold',
        'text-3xl md:text-6xl lg:text-5xl',
        '-rotate-3 -translate-y-10 md:-translate-y-15 lg:-translate-y-10',
        'drop-shadow-2xl'
      )}
    >
      {('Kajeevan Vasan')}
    </h1>
  )
}

export default Title
