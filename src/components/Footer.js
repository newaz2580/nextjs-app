import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub,FaInstagramSquare,FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    
    <Link href="/">Home</Link>
    <Link href="/products">Products</Link>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link href={'https://github.com/newaz2580'} className='text-2xl'><FaGithub /></Link>
      <Link href={'https://www.linkedin.com/in/mohammad-shahnowaz/'} className='text-2xl' className='text-2xl'><FaLinkedin /></Link>
      <Link href={'https://www.instagram.com/niwaz_ahmed/'} className='text-2xl'><FaInstagramSquare /></Link>
      <Link href={'https://web.facebook.com/shahnewaz.ahammed'} className='text-2xl'><FaFacebook /></Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by GadgetZoom Ltd</p>
  </aside>
</footer>
    );
};

export default Footer;