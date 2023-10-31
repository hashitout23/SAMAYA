import Slider from 'react-infinite-logo-slider'

const Features = () => {
    
    return (
    <div>
        <div>
            <h1 className='font-bold text-2xl mx-40 my-10 absolute'>Emergency Contact</h1>
            <h1 className='font-bold text-2xl mx-60 my-20 absolute'>Section</h1>
        </div>

        <div className='wrapper my-12 ml-2 mr-2 pl-96 pr-60 drop-shadow-2xl'>
        <Slider
            width="250px"
            duration={40}
            blurBorders={false}
            pauseOnHover={true}
        >
            <Slider.Slide>
                <img src="src\assets\cup.jpg" alt="#" className='w-56 rounded-2xl cursor-pointer' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="src\assets\cup1.jpg" alt="#" className='w-56 rounded-2xl cursor-pointer' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="src\assets\cup2.jpg" alt="#" className='w-56 rounded-2xl cursor-pointer' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="src\assets\cup3.jpg" alt="#" className='w-56 rounded-2xl cursor-pointer' />
            </Slider.Slide>
        </Slider>
        </div>
    </div>
    )
}              
                     
export default Features