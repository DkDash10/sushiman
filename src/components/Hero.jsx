import sushi1 from "../assets/sushi-1.png"
import play from "../assets/play-circle.svg"
import user from "../assets/user.png"

const Hero = () => {
    const subHeadingText = "Feel the taste of the most popular Japanese food from anywhere and anytime.";

    return (
        <section id="hero" className='flex items-start relative h-[calc(100vh-67px)]'>
        <div className="w-[30%] sm:w-[45%] h-full bg-primary py-20">
            <img src={sushi1} alt="sushi" data-aos="fade-up" className='w-[50%] absolute top-5 z-10 hidden sm:block' />
            <h2 data-aos="fade-up" className='text-white font-bold text-6xl xs:text-8xl leading-tight xs:leading-[120px] absolute bottom-3 left-3'>
            日 <br />
            本 <br />
            食
            </h2>
        </div>

        <div className="w-[70%] sm:w-[55%] h-full pt-20 flex flex-col">
            <div className="px-4 lg:px-10" data-aos="fade-left">
                <h1 className='section-heading'>
                    Feel the taste of Japanese food
                </h1>
                <p className='section-text'>
                    {subHeadingText}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-x-5">
                    <a href='#menu' className="btn w-full justify-center sm:w-max bg-secondary text-white">Order Now</a>
                    <button className="btn w-full justify-center sm:w-max px-0" type="button">
                        <img src={play} alt="play" />
                        How to Order
                    </button>
                </div>
            </div>

            <div className="bg-white px-10 py-8 mt-auto hidden xs:flex flex-col lg:flex-row items-center justify-between gap-x-10" data-aos="fade-up">
                <div className="flex items-center gap-x-2 w-full justify-center lg:justify-start lg:w-1/2 mb-0 md:mb-6 lg:mb-0">
                    <h4 className='text-5xl font-playfair'>24<span>k+</span></h4>
                    <p>Happy Customers</p>
                </div>

                <div className="w-full lg:w-1/2 hidden md:flex items-center gap-x-4">
                    <img src={user} alt="user" className='w-[50px]' />
                    <p>“This is the best Japanese food delivery service that ever existed.”</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Hero