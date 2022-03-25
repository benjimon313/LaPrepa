import React, {useState} from 'react'

import {Data} from './DataCarrera';
import { IconContext } from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import "./GuiaAccordion.css";



const GuiaAccordion = () => {
	const [clicked, setClicked] = useState (false)

	const toggle = index => {
		if (clicked === index) {

		return setClicked(null)

	}
		setClicked(index)
}

  return (
      <IconContext.Provider value={{color: '#00ffb9',size:'25px'}} >
    <div className ='accordion-section'>
        <div className ='accordion-container'>
            {Data.map((item, index) => {
                return (
                    <>
                        <div className ='accordion-wrap' onClick = {() => toggle(index)} key={index}>
                            <h1>{item.option}</h1>
														<span> {clicked === index ? <FiMinus /> : <FiPlus />} </span>
                        </div>
												{clicked === index ? (
												<div className='accordion-dropdown'>
													<p>{item.info}</p>
												</div>
												) : null}												
                    </>
                )
            }
            
            )}
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default GuiaAccordion