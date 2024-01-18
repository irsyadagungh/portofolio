

function Footer() {
    return (
        <section className="bg-dark-primary h-fit pt-16 dark:bg-dark-bone">
            <div className="container  flex flex-col gap-10 md:gap-0 px-10 md:px-0 flex-wrap justify-evenly">
                {/* Div atas */}
                <div className="flex justify-evenly flex-wrap gap-8 md:gap-0 w-full mb-8">
                        {/* First Div */}
                    <div className="felx w-full md:w-1/3 flex-col">
                        <h1 className="text-bone mb-4 text-2xl">Business Inquiries 📨</h1>
                        <span className="flex gap-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path className="fill-current text-bone" d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                            </svg>
                            <h1 className="text-bone">irsyadagung08@gmail.com</h1>
                        </span>
                        <span className="flex gap-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path className="fill-current text-bone" d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                            </svg>
                            <h1 className="text-bone">
                                Sukapura St. Number 95, Bandung, West Java
                            </h1>
                        </span>
                    </div>

                    {/* Second Div */}
                    <div className="felx w-full md:w-1/3 flex-col">
                        <h1 className="text-bone mb-4 text-2xl">Website Pages</h1>
                        <span className="flex flex-col text-bone">
                            <a className="hover:text-light-primary duration-200" href="#about">About</a>
                            <a className="hover:text-light-primary duration-200" href="#experience">Experiences</a>
                            <a className="hover:text-light-primary duration-200" href="#project">Projects</a>
                            <a className="hover:text-light-primary duration-200" href="#skill">Skills</a>
                        </span>
                    </div>


                    <div className="felx w-full md:w-1/3 flex-col">
                        <h1 className="text-bone mb-4 text-2xl">Contact Me</h1>
                        <div className="flex  py-4 gap-4">
                            {/* Github */}
                            <div className='group z-[5] w-9 h-auto border p-[0.4rem] rounded-full border-white border-l cursor-pointer hover:bg-black hover:text-white duration-500 dark:border-white hover:border-black'>
                              <a href="https://github.com/irsyadagungh"target="blank">
                                <svg role="img" className="group-hover:invert invert" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <title>GitHub</title>
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                              </a>
                            </div>

                            {/* Instagram */}
                            <div className='group z-[5] w-9 h-auto border p-[0.4rem] rounded-full border-white border-l cursor-pointer hover:bg-gradient-to-tr hover:from-[#ae13cd] hover:to-[#f6184e] hover:border-none duration-500 dark:border-white'>
                            <a href="https://www.instagram.com/syadah02/"target="blank">
                                <svg role="img" className='group-hover:invert invert' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
                              </a>
                            </div>

                            {/* Linkedin */}
                            <div className='group z-[5] w-9  h-auto border p-[0.4rem] rounded-full border-white border-l cursor-pointer hover:bg-[#136bc5] hover:border-[#136bc5] duration-500 dark:border-white dark:hover:border-[#136bc5]'>
                            <a href="https://www.linkedin.com/in/irsyad-agung-hidayatullah/" target="blank">
                                <svg role="img" className='group-hover:invert invert' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                              </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Div Bawah */}
                <hr className="w-full h-[1px]"/>

                <div className="flex justify-center items-center py-8">
                    <p className="text-bone text-xs">Copyright © 2024 Irsyad Agung Hidayatullah, All rights reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;