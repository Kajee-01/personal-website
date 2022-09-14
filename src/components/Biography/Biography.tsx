import clsx from 'clsx'

export interface Props {
  className?: string
}

const Biography = ({ className}: Props) => {
  return (
    <div className={clsx(className,'flex container my-8 mx-auto p-4 max-w-lg border-black border-2 rounded-lg'
    )}>

      <span>Biography<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non, impedit unde eveniet quibusdam velit excepturi eos fugit nemo error. Esse optio excepturi obcaecati numquam? Cumque, magni amet! Deserunt magni excepturi corrupti obcaecati iste 
      </span>
    </div>
  )
}

export default Biography
