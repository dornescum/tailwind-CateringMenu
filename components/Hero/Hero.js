import React from 'react';
// import hero from '../../public/assets/Hero.jpg'
import hero from '../../assets-next/img/pasta1.jpg';
import Image from "next/image";


const styling = {
	backgroundImage: `url(${hero.src})`,
	width: '100%',
	// height: '100%',
	// display:'block',
	// height: '300px',
	// margin:'0 auto',
	// width: '50%',
	display: 'flex',
	justifyContent:"center"
}

const Hero = () => {
	return (
		// <div className="bg-fixed object-cover object-center z-10 h-96 block w-full overflow-hidden" style={styling}>

		// <div className=" z-10 h-96 w-full " style={styling}>
		// </div>
		<div className=''>
			{/*fixme error image*/}
			<Image src={hero} className='w-full h-24' width="100%" height="30%" layout="responsive" objectFit="cover"
				    alt='pasta image plate'/>
		</div>
	);
};

export default Hero;
