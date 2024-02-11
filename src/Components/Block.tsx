import React from 'react'


interface BlockValue{
    value? : string | null ;
    onClick? :()=> void;
}

const Block :React.FC<BlockValue> = (props) => {
  return (
    <div onClick={props.onClick}
     className='w-32 h-32 text-custom-dark-grey border-2 border-custom-grey cursor-pointer font-extrabold text-7xl text-center items-center pt-5 rounded-sm'>
            {props.value}
    </div>
  )
}

export default Block ;