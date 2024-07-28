import React from 'react';
import {  MdEmail } from "react-icons/md";
import { FaMapLocationDot  } from "react-icons/fa6";
import { FaPhoneAlt  } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='bottom-0 relative md:px-16 px-4 py-5 mt-24'>
                <div className="footer-section border-t-[0.5px] border-b-[0.5px] border-neutral-600 py-10 flex justify-between  md:px-20 md:flex-row flex-col gap-8 px-5">
                    <div className="footer-section-1 text-white ">
                        <h3 className="font-bold min-[780px]:text-start text-center" >Get in touch</h3>
                        <div className="info min-[780px]:text-start text-center flex flex-col gap-1  min-[780px]:max-w-[400px] w-full text-sm text-gray-300 py-3 ">
                            <div className="addr-1 flex gap-1 items-center"><FaMapLocationDot  size={22} /><span className='text-left'> Near Gulabh Bagh , G.T.Road, Dholpur(Rajasthan)[Junior Wing]</span></div>
                            <div className="phone-1 flex gap-1 items-center  hover:text-blue-400"><FaPhoneAlt  size={12} /><a href="tel:+917597152300">+917597152300</a></div>
                            <div className="addr-2 flex gap-1 items-center"><FaMapLocationDot  size={22} /> <span  className='text-left'>New Era Growth Center , G.T.Road, Dholpur(Rajasthan)[Senior Wing]</span></div>
                            <div className="phone-2 flex gap-1 items-center  hover:text-blue-400"><FaPhoneAlt  size={12} /><a href="tel:+918094305596">+918094305596</a></div>
                            <div className="email-1 flex gap-1 items-center  hover:text-blue-400"><MdEmail size={15} /><a href="mailto:info@newerapublic.school">info@newerapublic.school</a></div>
                            <div className="email-2 flex gap-1 items-center  hover:text-blue-400"><MdEmail size={15} /><a href="mailto:neps.dholpur@gmail.com">neps.dholpur@gmail.com</a></div>
                        </div>
                    </div>
                    <div className=" justify-center  flex social-media-section min-[780px]:w-[50%] w-full">
                        <div className="parent flex   min-[780px]:gap-6 bg-[#14141477] rounded-lg items-center">

                            <div className="child child-1 ">
                                <button className="button btn-1"> 
                                    <a href="https://x.com/neps_dholpur">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" className='2xl:h-9'  viewBox="0 0 512 512" fill="#1e90ff"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg> </a>
                                </button>
                            </div>
                            <div className="child child-2">
                                <button className="button btn-2"> 
                                    <a href="https://www.instagram.com/neweradholpur/">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" className='2xl:h-9'  viewBox="0 0 448 512" fill="#ff00ff"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg> </a></button>
                            </div>

                            <div className="child child-3">
                                <button className="button btn-3"> 
                                    <a href="https://www.youtube.com/channel/UCCuzRFuShYwejeQR4UHYNXw">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.8em" className='2xl:h-10' 
                                        viewBox="0 0 16 16"
                                        xmlSpace="preserve"
                                    >
                                        <path fill="#FF0000"
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                                        ></path>
                                    </svg> </a></button>
                            </div>
                            <div className="child child-4">
                                <button className="button btn-4"> 
                                    <a href="https://www.facebook.com/NEPSDholpur/">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" className='2xl:h-9'  viewBox="0 0 320 512" fill="#4267B2"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg> </a></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="copyright-section flex flex-col items-center text-white sm:text-sm text-xs pt-3 font-semibold">
                    <span className='text-center'>Copyright &copy; 2024 New Era Public School, Inc.</span>
                    <span>All rights reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
