import Foto from '../../public/assets/image/foto.png'

function Section2() {
    return (
        <section id='about' className=" font-inter h-fit py-16 bg-white dark:bg-dark-primary m-auto">
            <div className="container flex flex-wrap w-full m-auto justify-between items-center">
                <div className="p-14 flex md:w-1/2 md:justify-center">
                    <div className="md:w-96 relative bg-light-primary blob overflow-hidden dark:bg-dark-secondary">
                        <img src={Foto} alt="" />
                    </div>
                </div>
                <div className="flex-col flex px-14 md:w-1/2">
                    <h1 className="text-3xl font-extrabold text-light-primary mb-6 dark:text-light-primary">About Me</h1>
                    <p className='text-slate-700 dark:text-slate-300'>
                    Hello! I'm a passionate Telkom University student majoring in Application Software Engineering. My expertise lies in front-end web development, mobile app development, and UI/UX design. I thrive on crafting seamless and visually appealing user experiences.
                    <br /><br />
                    From coding to design, I see each project as an opportunity to create something impactful. I aim to not just meet but exceed user expectations by delivering innovative and user-centric solutions.
                    <br /><br />
                    Let's collaborate and bring your digital ideas to life!    
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section2