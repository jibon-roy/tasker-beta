import { NavLink } from 'react-router-dom';
import './nav.css'

const NavigationBar = () => {

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/support'>Support</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-white shadow-md mb-3">
                    <div className="container mx-auto">
                        <div className="flex justify-between w-full">
                            <div className="flex-1 px-2 mx-2">
                                <img src="/logo.png" className="w-32" alt="" />
                            </div>
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal text-base font-medium">
                                {navLink}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[70%] min-h-full bg-white">
                    {navLink}
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;