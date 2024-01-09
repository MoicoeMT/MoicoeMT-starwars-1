import React from 'react'
import Carousel from '../component/Carousel.jsx'
import Planets from '../component/Planets.jsx'
import People from '../component/People.jsx'
import Vehicles from '../component/Vehicles.jsx'

const home = () => {
  return (
	<>
	<Carousel />
	<div className=''>
		<People  />
	</div>
	
	<Planets />
	<Vehicles />
	</>
  )
}

export default home;
