import About from '../sections/About'
import Blogs from '../sections/Blogs'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

import Works from '../sections/Works'
import resume from '../resources/Kazi Shariful Islam - Junior React Developer resume.pdf'
import './hero.css'

export default function Home() {
    return (
        <div className="w-full mx-auto">
            <section id="home" className="min-h-screen container flex items-center mx-auto text-gray-300">
                <div className="w-full md:w-9/12 xl:w-8/12 px-4 py-24 pb-20">
                    <h2 className='text-[#00ffc6]'>Hi, my name is</h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold my-6"> Kazi Shariful Islam</h1>
                    <h2 className="text-3xl lg:text-5xl">I build web applications with React.</h2>
                    <p className="text-lg my-6 mb-12"> I'm a passionate web developer. It's been two years, I'm working as a web developer.
                        Currently, I'm learning Backend programming. I'm focused on Full Stack Development.
                    </p>
                    <a href={resume} target="_blank" rel='noreferrer' download className=" text-white bg-[#00ffc6] bg-opacity-5  border-[1px] border-[#00ffc881] p-3 focus:outline-none hover:bg-[#00ffc6] hover:bg-opacity-10 rounded">Download Resume</a>

                </div>
            </section>
            <section id="about" className='container mx-auto'>
                <About />
            </section>
            <section id="works" className='container mx-auto'>
                <Works />
            </section>
            <section id="skills">

            </section>
            <section id="blogs">
                <Blogs />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    )
}
