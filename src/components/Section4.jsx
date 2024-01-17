import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import Tzens from '../../public/assets/image/tzens.png';
import Schedulify from '../../public/assets/image/schedulify.png';
import Myedu from '../../public/assets/image/myedu.png';
import Myeducation from '../../public/assets/image/myeducation.png';

import Github from '../../public/assets/icon/github.svg';
import Figma from '../../public/assets/icon/figma.svg';

function Section4() {
    return (
        <section id='project' className="relative font-inter bg-bone py-32 dark:bg-dark-bone">
            <div className="custom-shape-divider-top-1705420475">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-filll"></path>
                </svg>
            </div>

            {/* Content */}
            <div className="container gap-16 flex flex-col px-14 justify-center">
                <div className="text">
                    <h1 className="text-center text-3xl font-extrabold text-light-primary mb-6 dark:text-light-primary">My Projects</h1>
                    <p className='text-center text-slate-700 dark:text-slate-300'>These are some of my projects that I have done</p>
                </div>

                {/* First Project */}
                <div className="flex flex-wrap gap-6 justify-evenly ">
                    <div className="flex gap-6 flex-col bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:bg-white duration-500 p-4 rounded-xl  md:w-2/5 dark:hover:bg-dark-card">
                        <img className='rounded-lg' src={Tzens} alt="" />

                        <div className="text flex gap-2 flex-col ">
                            <h1 className='font-bold dark:text-white'>T-Zens</h1>
                            <p className='text-sm text-slate-700 dark:text-gray'>
                                T-Zens is a website that contains informations about organizations and events such as webinars, seminars, and others. This website can help students to find informations about organizations and events that they want to join.
                            </p>
                            <span className='flex gap-4'>
                                <img className='w-4 dark:invert' src={Github} alt=""  />
                                <a className='text-sm text-light-primary' href="https://github.com/irsyadagungh/T-zens" target='blank'>Github T-Zens</a>
                            </span>
                            <span className='flex gap-4'>
                                <img className='w-4 dark:invert' src={Figma} alt=""  />
                                <a className='text-sm text-light-primary' href="https://www.figma.com/file/Dq5axQKVSyLi20fklmhJpQ/T-Zens-(Telutizen-Solutions)?type=design&node-id=1%3A3&mode=design&t=3vypRR4JzIdm5Api-1">Figma T-Zens</a>
                            </span>
                        </div>
                    </div>

                    {/* Second Project */}
                    <div className="flex gap-6 flex-col bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:bg-white duration-500 p-4 rounded-xl  md:w-2/5 dark:hover:bg-dark-card">
                        <img className='rounded-lg' src={Schedulify} alt="" />

                        <div className="text flex gap-2 flex-col">
                            <h1 className='font-bold dark:text-white'>Schedulify</h1>
                            <p className='text-sm text-slate-700 dark:text-gray'>
                                Schedulify is a website that can help everyone to manage their schedules and projects. Scheduleify is a simple web-based application designed to help users organize their daily lives more efficiently.

                                In this website application, you can create a schedule, progress on the schedule, and evaluate every month.
                            </p>

                            <span className='flex gap-4'>
                                <img className='w-4 dark:invert' src={Github} alt=""  />
                                <a className='text-sm text-light-primary' href="https://github.com/irsyadagungh/schedulify" target='blank'>Github Schedulify</a>
                            </span>
                            <span className='flex gap-4'>
                                <img className='w-4 dark:invert' src={Figma} alt="" />
                                <a className='text-sm text-light-primary' href="https://www.figma.com/file/9B6BfLWiLubkrIWWHO8ioM/UI-%26-UX?type=design&node-id=18%3A22&mode=design&t=2x1hOLcixQDDVtQ8-1" target='blank'>Figma Schedulify</a>
                            </span>
                        </div>
                    </div>

                    {/* Third Project */}
                    <div className="flex gap-6 flex-col bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:bg-white duration-500 p-4 rounded-xl  md:w-2/5 dark:hover:bg-dark-card">
                        <div className="flex justify-evenly">
                            <img className='w-32 rounded-lg' src={Myedu} alt="" />
                            <img className='w-32 rounded-lg' src={Myeducation} alt="" />
                        </div>

                        <div className="text flex gap-2 flex-col">
                            <h1 className='font-bold dark:text-white'>MyEducation</h1>
                            <p className='text-sm text-slate-700 dark:text-gray'>
                                MyEducation is an mobile application that can help schools located in remote villages develop because this app provide donation feature and this app also provide e-book and article that can improve human resources according our human resources isn't good enough
                            </p>

                            <span className='flex gap-4'>
                                <img className='w-4 dark:invert' src={Github} alt="" />
                                <a className='text-sm text-light-primary' href="https://github.com/irsyadagungh/MyEducation" target='blank'>Github MyEducation</a>
                            </span>
                            <span className='flex gap-4'>
                                <img className='w-4 dark:invert' src={Figma} alt=""  />
                                <a className='text-sm text-light-primary' href="https://www.figma.com/file/6mKMsnPPPpJKJZNe1DCPIw/Material-3-Design-Kit-(Community)?type=design&node-id=54695%3A25457&mode=design&t=m9Jmbfo9BU5yGruQ-1" target='blank'>Figma MyEducation</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section4;