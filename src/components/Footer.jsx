import React from "react";
import { useNavigate } from 'react-router-dom'
import { assets } from "../assets/assets_frontend/assets.js";

const Footer = () => {


    const navigate = useNavigate()

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/*------Left Section------------*/}
        <div>
          <img onClick={()=>{navigate('/');scrollTo(0,0)}} className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            sunt dolores vero nihil dignissimos magnam ad repellat maiores
            minima omnis ipsum, dolorum blanditiis repellendus vel cumque quam
            officia similique libero.
          </p>
        </div>



        {/*------Middle Section------------*/}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
                <li onClick={()=>{navigate('/');scrollTo(0,0)}}>Home</li>
                <li onClick={()=>{navigate('/about');scrollTo(0,0)}}>About Us</li>
                <li onClick={()=>{navigate('/contact');scrollTo(0,0)}}>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>


        {/*------Right Section------------*/}
        <div>
            <p  className="text-xl font-medium mb-5">Get In Touch</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+92-3026840841</li>
                <li>abdul.haie.kahloon@gmail.com</li>
            </ul>
        </div>

      </div>


        {/*---------Bottom copyright Section------------*/}
      <div>
        
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ Prescripto - All Rights Reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
