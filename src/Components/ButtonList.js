import React from 'react'
import Button from './Button';

const ButtonList = () => {
    // const ButtonListArr =["All","Music","T-series","Javascript","Bollywood Music","Mixes","Live","Animies","Gaming","Game Shows","Cricket","Electronic Music","Comedy","Shorts","Watched","New to you"];
    const ButtonListArr =["All","Music","T-series","Javascript","Bollywood Music","Mixes","Live","Animies","Gaming","Game Shows","Cricket","Electronic Music","Comedy","Shorts","Watched","New to you"];
  return (
    <div className=' overflow-auto '>
        {ButtonListArr.map((button,index)=> <Button key={"btn-"+index} name={button} />)}
    </div>
  )
}

export default ButtonList
