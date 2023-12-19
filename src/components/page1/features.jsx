import Slider from 'react-infinite-logo-slider'

const Features = () => {
    
    return (
    <div>
        <div>
            <div className='border-r-8'>
            <h1 className='font-black text-2xl mx-40 my-10 absolute '>Emergency Contact </h1>
            <h1 className='font-black text-2xl mx-60 my-20 absolute text-purple-800'> Section</h1>
            </div>
        </div>

        <div className='wrapper my-12 ml-10 mr-2 pl-96 pr-60 drop-shadow-2xl'>
        <Slider
            width="250px"
            duration={40}
            blurBorders={false}
            pauseOnHover={true}
        >
            <Slider.Slide>
                <img src="src\assets\hospital.png" alt="#" className='w-56 rounded-2xl cursor-pointer border-4 border-purple-800 p-5 ' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="src\assets\firetruck.png" alt="#" className='w-56 rounded-2xl cursor-pointer border-4 border-purple-800 p-5 ' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="src\assets\car.png" alt="#" className='w-56 rounded-2xl cursor-pointer border-4 border-purple-800 p-5 ' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="src\assets\thief.png" alt="#" className='w-56 rounded-2xl cursor-pointer border-4 border-purple-800  p-5 ' />
            </Slider.Slide>
        </Slider>
        </div>
    </div>
    )
}              
                     
export default Features

