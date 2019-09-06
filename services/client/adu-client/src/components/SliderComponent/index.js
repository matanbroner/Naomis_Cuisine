import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'



const SliderComponent = (props) => {

    return(
      <Slider
      min={0}
      max={1500}
      value={props.value}
      onChange={props.onChange}
    />
    )
}

export default SliderComponent