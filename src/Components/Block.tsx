import React from 'react'


interface BlockValue{
    value? : string | null ;
    onClick? :()=> void;
}

const Block :React.FC<BlockValue> = (props) => {
  return (
    <div onClick={props.onClick}
     className='w-20 h-20 md:w-32 md:h-32 xl:w-40 xl:h-40 text-custom-dark-grey border-2 border-custom-grey cursor-pointer font-extrabold  text-5xl md:text-7xl xl:text-9xl text-center items-center pt-5 xl:-top-5 rounded-sm'>
            {props.value}
    </div>
  )
}

export default Block ;