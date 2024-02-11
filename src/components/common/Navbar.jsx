import React from 'react';
import Logo from './../../assets/organichire.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // <div className='flex justify-evenly place-items-center	'>
    //     <div className='m-0 p-5 '>
    //         <Link to='/'><img src={Logo} width={150}/></Link>
    //     </div>

    //     <div className='list-none justify-items-center flex gap-5 text-black font-normal 	'>
    //         <Link to='/' className='hover:text-blue-800'><li>Home</li></Link>
    //         <Link to='/product' className='hover:text-blue-800'><li>Product</li></Link>
    //         <Link to='/contactus' className='hover:text-blue-800'><li>Contact Us</li></Link>
    //         <Link to='/aboutus' className='hover:text-blue-800'><li>About Us</li></Link>
    //     </div>

    //     <div className='flex justify-center gap-5 align-middle'>
    //         <button className='rounded-full bg-gray-700 text-white px-5 h-10 hover:bg-black transition-all duration-200'>
    //             Request Demo
    //         </button>

    //         <button className='rounded-full bg-blue-800 text-white px-5 h-10 hover:bg-black transition-all duration-200'>
    //             Get Started
    //         </button>
    //     </div>
    // </div>

    <div className='flex items-center justify-between p-4'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/'><img src={Logo} width={150}/></Link>
        </div>

        <div className='flex items-center justify-end'>
            <div className='text-center list-none flex '>
                <Link to='/' className='text-black hover:text-blue-900 px-4 py-2'><li>Home</li></Link>
                <Link to='/product' className='text-black hover:text-blue-900 px-4 py-2'><li>Product</li></Link>
                <Link to='/contactus' className='text-black hover:text-blue-900 px-4 py-2'><li>Contact Us</li></Link>
                <Link to='/aboutus' className='text-black hover:text-blue-900 px-4 py-2 mr-5'><li>About Us</li></Link>
            </div>

            <div className='text-right '>
                <button className='rounded-full bg-gray-800 text-white px-5 h-10 hover:bg-black transition-all duration-200 mr-4'>
                    Request Demo
                </button>

                <button className='rounded-full bg-blue-800 text-white px-5 h-10 hover:bg-black transition-all duration-200'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}
