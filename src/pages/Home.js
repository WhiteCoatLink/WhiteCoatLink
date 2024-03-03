import React from 'react'

const Home = () => {
    return (
        <div>
            <>
                <section className='hero__section pt-[60px] 2xl:h-[800px]'>
                    <div className="container">
                        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                            {/* HERO */}
                            <div>
                                <div className="lg:w-[570px]">
                                    <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                        "Empowering health for a vibrant life."
                                    </h1>
                                    <p className="text__para">
                                        Revolutionizing healthcare with personalized wellness solutions for longevity
                                    </p>
                                    <button className='btn'>
                                        Request an appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Home