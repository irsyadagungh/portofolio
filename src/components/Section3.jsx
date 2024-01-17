import React from 'react';
import { Card, CardBody } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Orbit from '../../public/assets/icon/orbit.png';
import Scada from '../../public/assets/icon/scada.png';
import Tzens from '../../public/assets/icon/tzens.png';
import Schedulify from '../../public/assets/icon/schedulify.png';

const YourComponent = () => {
  return (
    <section id='experience' className='font-inter relative bg-gray py-32  dark:bg-dark-gray'>
        <div className="custom-shape-divider-top-1705418732">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>


        <div className='container flex flex-col items-center gap-32'>
            <div className='text-center'>
                <h1 className="text-3xl font-extrabold text-light-primary mb-6 dark:text-light-primary">Experiences</h1>
                <p className='text-slate-700 dark:text-gray'>These are some my experiences since I was in Vocational Highschool until present</p>
            </div>
            <VerticalTimeline 
                lineColor='#3887BE'
            >

                {/* First Experience */}
                <VerticalTimelineElement
                    date='2019'
                    dateClassName=' text-black dark:text-white'
                    contentArrowStyle={{border: 'none'}}
                    contentStyle={{ background: 'none', color: '#1e293b', boxShadow: 'none', padding: '0' }}
                >
                    <Card className='bg-slate-700 dark:bg-dark-primary text-black dark:text-gray shadow-lg'>
                        <CardBody className='flex items-center gap-6 justify-around lg:flex-row-reverse'>
                            <div className="text lg:text-right">
                                <h1 className='font-bold text-xl'>ORBIT</h1>
                                <p className=''>Joined web development division in ORBIT organization</p>
                                
                            </div>

                            <div className="icon">
                                <a href="https://orbit.smkn4bdg.sch.id/" target='blank'><img className='w-16 min-w-[4rem]' src={Orbit} alt="" /></a>
                            </div>
                        </CardBody>
                    </Card>
                </VerticalTimelineElement>

                {/* Second Experience */}
                <VerticalTimelineElement
                    date='September 2020 - December 2020'
                    dateClassName=' text-black dark:text-white'
                    contentArrowStyle={{border: 'none'}}
                    contentStyle={{ background: 'none', color: '#1e293b', boxShadow: 'none', padding: '0' }}
                >
                    <Card className='bg-white dark:bg-dark-primary text-black dark:text-gray shadow-lg'>
                        <CardBody className='flex gap-6 items-center justify-around'>
                            <div className="text">
                                <h1 className='font-bold text-xl'>Full stack mobile app</h1>
                                <p>Internship in making hadist application at PT. Scada Prima Cipta and was making a quranic mobile app with API</p>
                            </div>

                            <div className="icon">
                                <a href="https://scada.co.id/" target='blank'><img className='w-16 min-w-[4rem]' src={Scada} alt="" /></a>
                            </div>
                        </CardBody>
                    </Card>
                </VerticalTimelineElement>

                {/* Third Experience */}
                <VerticalTimelineElement
                    date='2021'
                    dateClassName=' text-black dark:text-white'
                    contentArrowStyle={{border: 'none'}}
                    contentStyle={{ background: 'none', color: '#1e293b', boxShadow: 'none', padding: '0' }}
                >
                    <Card className='bg-white dark:bg-dark-primary text-black dark:text-gray shadow-lg'>
                        <CardBody className='flex flex-col lg:text-right'>
                            <div className="text">
                                <h1 className='font-bold text-xl'>Front-end Developer</h1>
                                <p>Became a front-end developer on the school's final project called NusantaraFit, an application about e-commerce for Indonesian products such as batik, songket, etc. </p>   
                            </div>

                            <div className="icon">
                                <img src="" alt="" />
                            </div>
                        </CardBody>
                    </Card>
                </VerticalTimelineElement>

                {/* Fourth Experience */}
                <VerticalTimelineElement
                    date='February 2023 - June 2023'
                    dateClassName=' text-black dark:text-white'
                    contentArrowStyle={{border: 'none'}}
                    contentStyle={{ background: 'none', color: '#1e293b', boxShadow: 'none', padding: '0' }}
                >
                    <Card className='bg-white dark:bg-dark-primary text-black dark:text-gray shadow-lg'>
                        <CardBody className='flex items-center justify-around gap-6'>
                            <div className="text">
                                <h1 className='font-bold text-xl'>Full stack Web Developer in T-Zens</h1>
                                <p>Became a full stack web developer in making a web app named T-Zens in Telkom University</p>
                                <br /> 
                                <span className='flex gap-4 items-center'>
                                    <LinkIcon />
                                    <a className='text-light-primary text-sm' target='blank' href="https://github.com/irsyadagungh/T-zens">Github T-Zens</a>
                                </span>
                            </div>

                            <div className="icon">
                                <img className='w-16 min-w-[4rem]' src={Tzens} alt="" />
                            </div>
                        </CardBody>
                    </Card>
                </VerticalTimelineElement>

                {/* Fifth Experience */}
                <VerticalTimelineElement
                    date='September 2023 - December 2023'
                    dateClassName=' text-black dark:text-white'
                    contentArrowStyle={{border: 'none'}}
                    contentStyle={{ background: 'none', color: '#1e293b', boxShadow: 'none', padding: '0' }}
                >
                    <Card className='bg-white dark:bg-dark-primary text-black dark:text-gray shadow-lg'>
                        <CardBody className='flex gap-6 items-center justify-around lg:flex-row-reverse'>
                            <div className="text lg:text-right">
                                <h1 className='font-bold text-xl'>Front End Web Developer in Schedulify</h1>
                                <p>
                                    Became a front end web developer in making a web app named Schedulify in Telkom University
                                </p>
                                <br />
                                <span className='flex gap-4 items-center lg:flex-row-reverse'>
                                    <LinkIcon />
                                    <a className='text-light-primary text-sm' href="https://github.com/irsyadagungh/schedulify" target='blank'>Github Schedulify</a>
                                </span>
                            </div>

                            <div className="icon">
                                <img className='w-24 min-w-[6rem] invert dark:invert-0' src={Schedulify} alt="" />
                            </div>
                        </CardBody>
                    </Card>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        
    </section>
    
  );
}

export default YourComponent;
