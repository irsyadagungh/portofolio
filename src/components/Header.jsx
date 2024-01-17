import { useState } from 'react';
import DarkModeSwitch from './darkModeSwitch';
import Logo from '../../public/assets/icon/logo.svg'

function Header() {
    const [burgerClass, setBurgerClass] = useState('burger-bar');
    const [menuClass, setMenuClass] = useState('menu hidden');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuState, setMenuState] = useState('close');

    const updateMenu = () => {
        console.log('Update menu is called');
    console.log('isMenuOpen:', isMenuOpen);
        if (!isMenuOpen) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('visible'); // Setel menuClass agar muncul
            setIsMenuOpen(true);
            setMenuState('open');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('hidden'); // Setel menuClass agar tersembunyi
            setIsMenuOpen(false);
            setMenuState('close');
        }
    }
    

    const list = [
        { nama: 'Home', link: '#home' },
        { nama: 'About', link: '#about'},
        { nama: 'Experience', link: '#experience' },
        { nama: 'Project', link: '#project' },
        { nama: 'Competence', link: '#skill' },
    ];

    
    return (
        <div className="fixed filter backdrop-blur-xl text-black w-screen top-0 flex justify-between p-4 items-center font-poppins px-16 z-10">
            <img className='w-4' src={Logo} alt="" />
            <nav className={`${menuState} filter backdrop-blur-xl absolute top-14 left-0 w-full overflow-hidden duration-200 md:static md:h-full md:w-2/3 md:flex md:justify-between dark:md:bg-none`}>
            <ul className={`sm:${menuClass} py-4 bg-white md:bg-[#fff0] w-full filter backdrop-blur-xl sm:mb-8 md:py-0 md:mb-0 md:flex menu flex flex-col justify-between items-center top-16 left-1/2 gap-8 cursor-pointer md:flex-row md:dark:bg-transparent dark:bg-dark-primary `}>
                    <div className='flex flex-col md:flex-row w-1/2 justify-around gap-6 items-center'>
                    {
                        list.map(item => (
                            <li key={item.nama} className='p-1 font-bold hover:text-light-primary dark:hover:text-light-primary dark:text-white duration-500'>
                                <a href={item.link}>{item.nama}</a>
                            </li>
                        ))
                    }
                    </div>
                <div className="flex bg-white md:bg-[#fff0] justify-center dark:bg-dark-primary">
                    <DarkModeSwitch/>
                </div>
                </ul>
            </nav>

            <div className='flex gap-4 md:hidden'>
                <div className="burger-menu md:hidden dark:text-white" onClick={updateMenu}>
                    <div className={`${burgerClass} dark:bg-white`}></div>
                    <div className={`${burgerClass} dark:bg-white`}></div>
                    <div className={`${burgerClass} dark:bg-white`}></div>
                </div>
            </div>
        </div>
    )
}

export default Header;
