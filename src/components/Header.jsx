import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import Basket from "../assets/images/basket.svg";

function Header({ savedItemCount }) {
    const navigate = useNavigate();

    const handleBasketClick = () => {
        navigate("/save");  // Navigate to the Save page
    };

    return (
        <div className='w-[1300px] h-[50px] mx-auto mt-[20px] flex justify-between'>
            <img src={Logo} alt="Logo" className='w-[50px] h-[50px]' />
            <div className='flex space-x-3 items-center relative'>
                <p className='text-white text-[18px]'>Saved</p>
                <button onClick={handleBasketClick}>
                    <img src={Basket} alt="Basket" className='w-[20px] h-[20px]' />
                    <span className='absolute bottom-[20px] text-[12px] bg-sky-400 rounded-full left-[75px] p-[2px] w-[20px] text-black'>
                        {savedItemCount}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Header;
