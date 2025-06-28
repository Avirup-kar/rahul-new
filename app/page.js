"use client"
import React from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
import Image from 'next/image';
import gsap from "gsap";
import { Dancing_Script } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';
import ClickSpark from '../animation/clickspark';
import CircularGallery from '../animation/CircularGallery'
import ScrambledText from '../animation/ScrambledText';
gsap.registerPlugin(ScrollTrigger);

const dancingScript = Dancing_Script({
  subsets: ['latin'], // choose the weights you need
});

const RobotoSlab = Roboto_Slab({
  subsets: ['latin'], // choose the weights you need
});

const NunitoSans = Nunito_Sans({
  subsets: ['latin'], // choose the weights you need
});

const Page = () => {

  useEffect(() => {
    // Dynamically import LocomotiveScroll to avoid SSR errors
    import('locomotive-scroll').then((LocomotiveScroll) => {
      new LocomotiveScroll.default();
    });
  }, []);

  useGSAP(() => {
        gsap.to('.largtosmall', {
      scale: 0.08,
      borderRadius: "500px",
      backgroundColor: "white",
      scrollTrigger: {
        trigger: '.body',
        start: 'top 0%',
        end: 'top -150%',
        scrub: true,
        pin: true,
       }
    }) 

    gsap.to('.mainimg', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.largtosmall',
        scroller: "body",
        start: 'top 0%',
        end: 'top -150%',
        scrub: true,
       }
    })

gsap.to('.hi', {
  opacity: -1,
  scale: 0.3,
  y: -100,
  scrollTrigger: {
    trigger: '.hi',
    start: 'top 10%',
    end: 'top -60%',
    scrub: true,
  }
});

    gsap.to('.kisup', {
      bottom: '-700px',
      scrollTrigger: {
        trigger: '.body',
        scroller: "body",
        start: 'top 10%',
        end: 'top -200%',
        scrub: true,
       }
    })


    gsap.to('.firtimg', {
      y: -100,
      opacity: -1,
       scrollTrigger: {
        trigger: '.firtimg',
        scroller: "body",
        start: 'top 80%',
        end: 'top -50%',
        scrub: true,
       }
    })


    gsap.to('.secondimg', {
      y: 100,
      opacity: -1,
      scrollTrigger: {
        trigger: '.secondimg',
        scroller: "body",
        start: 'top 80%',
        end: 'top -50%',
        scrub: true,
       }
    })

    //  gsap.to('.midsection', {
    //      rotate: -20,
    //      scale: 0.8,
    //      opacity: -1,
    //      scrollTrigger: {
    //     trigger: '.mid',
    //     start: 'top 0%',
    //     end: 'top -400%',
    //     pin: true,
    //     scrub: 1,
    //    }
    // })

    // gsap.to('.aftermidsection', {
    //   top: '0%',
    //   scaleX: 1.42,
    //   scrollTrigger: {
    //     trigger: '.main ',
    //     start: 'top 0%',
    //     end: 'top -100%',
    //     scrub: 2,
    //     pin: true,
    //    }
    // })

    gsap.from('.second > div', {
      opacity: 0,
      scale: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.second',
        start: 'top 50%',
        end: 'top 0%',
       }
      })

      gsap.from('.kisupic > div', {
      opacity: 0,
      scale: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.kisupic',
        start: 'top 50%',
        end: 'top 0%',
       }
      })
  })

  return (<>

    {/* <ClickSpark /> */}
    <div className="body min-h-screen bg-gradient-to-br from-[#101010] to-[#2f2f2f] px-7 py-7 relative overflow-hidden">
      <div className='largtosmall bg-[#1e1e1e] relative shadow-[40px] rounded-2xl min-h-[80vh] w-full overflow-hidden' style={{ boxShadow: '0 0 40px 10px gray' }}>
        <Image className='mainimg w-full h-full absolute hidden xl:block' src="/background.png" alt="" width={500} height={300} unoptimized />
        <Image className='mainimg w-full h-full absolute block xl:hidden' src="/background2.png" alt="" width={500} height={300} unoptimized />
        <h1 className={`${dancingScript.className} hi absolute text-[75px] shadow-[40px] top-10  w-full  md:text-[60px] lg:text-[90px] xl:text-[115px] xl:top-20  font-bold text-center text-white mb-4`} style={{ textShadow: '0px 5px 30px white' }}>Rahul Sikdar the Artist</h1>
      </div>
      <div className='kisup absolute bottom-0 w-full h-fit flex justify-center items-center'>
        <Image className='' src="/kisup.png" alt="" width={450} height={650} unoptimized />
      </div>

      <div className='flex w-full justify-center lg:justify-end items-center gap-5 absolute px-8 left-0 bottom-10'>
        <div className='firtimg bg-gray-200 cursor-pointer p-2 rounded-full' style={{ boxShadow: '0 3px 30px 5px black' }}>
          <Link href="https://wa.me/6289240972"><FaWhatsapp className='text-black transition-transform duration-200 hover:scale-125' size={32} /></Link>
        </div>
        <div className='secondimg bg-gray-200 cursor-pointer p-2 rounded-full' style={{ boxShadow: '0 3px 30px 5px black' }}>
          <Link href="https://www.facebook.com/share/18w3NU3ufX/"><FaFacebookF className='text-black transition-transform duration-200 hover:scale-125' size={32} /></Link>
        </div>
        <div className='firtimg bg-gray-200 cursor-pointer p-2 rounded-full' style={{ boxShadow: '0 3px 30px 5px black' }}>
          <Link href="https://www.instagram.com/29m_artsic_rahul_?igsh=MW0zeXFoOWRkcmZ4bA=="><FaInstagram className='text-black transition-transform duration-200 hover:scale-125' size={32} /></Link>
        </div>
      </div>
    </div>

    <div className='mid bg-gradient-to-br from-[#2f2f2f] to-[#101010] w-full min-h-[100vh]'>
      <div className='midsection bg-black w-full min-h-screen relative overflow-hidden'>
       <Image className=' w-full h-full absolute hidden xl:block' src="/secback.png" alt=""  width={300} height={500}/>
        <Image className=' w-full h-full absolute block xl:hidden' src="/background2.png" alt="" width={500} height={300} unoptimized />
        <div className='w-full h-full flex justify-center flex-col gap-10 items-center absolute'>
        <h1 className={`${dancingScript.className} absolute text-[55px] shadow-[40px] top-20  w-full  md:text-[70px] lg:text-[90px] xl:text-[90px] xl:top-10  font-semibold text-center text-white mb-10`} style={{ textShadow: '0px 5px 30px white' }}>Who is Rahul</h1>
        <ScrambledText className="scrambled-text-demo leading-loose" radius={100} duration={1.2} speed={0.5} scrambleChars={"kisu"}>
             I am a dedicated artist with 5.5 years of experience in charcoal and graphite sketch. I specialize in figurative art, character art, fine art, pencil portraiture, and traditional sketching. I prefer working on Meadium surface sheets, ivory sheets, khaki sheets to create expressive, detailed drawings.        
       </ScrambledText>
        <h1 className={`${dancingScript.className} text-[15px] shadow-[20px]  w-full  md:text-[14px] lg:text-[20px] xl:text-[40px] font-bold text-center text-white`} style={{ textShadow: '0px 5px 30px white' }}>Contact me</h1>
        <div className='flex flex-col xl:flex-row justify-center items-center gap-5'>
          <h1 className={`text-[15px] shadow-[20px]  w-full  md:text-[14px] lg:text-[20px] xl:text-[20px] font-semibold text-center text-white`} style={{ textShadow: '0px 5px 30px white' }}>Email Id: krishnendusikder0@gmail.com</h1>
          <h1 className={`text-[15px] shadow-[20px]  w-full  md:text-[14px] lg:text-[20px] xl:text-[20px] font-semibold text-center text-white`} style={{ textShadow: '0px 5px 30px white' }}>Phone No: +91 6289240972</h1>
        </div>
        </div>
      </div>
    </div>
    <div className='bg-gray-500 w-full h-[0.2px] absolute' style={{ boxShadow: '5px 3px 50px 5px white' }}></div>

    
    <div className='aftermidsection bg-black w-full flex flex-col items-center min-h-full py-2 px-10'> 
        <h1 className={`${dancingScript.className} text-[40px] shadow-[40px] top-20  w-full  md:text-[40px] lg:text-[60px] xl:text-[70px] xl:top-10  font-bold text-center bg-gradient-to-br from-[#f3f3f3] to-[#656565] bg-clip-text text-transparent mb-5 mt-8`} style={{ textShadow: '0px 5px 40px white' }}>My Work..</h1>
        <div className="kisupic flex flex-wrap justify-center gap-5 w-full">
           <div className="bg-amber-900 w-[300px] h-[500px] overflow-hidden rounded-2xl"><Image className=' w-full h-full object-fill' src="/art3.jpg" alt="" width={400} height={600} unoptimized /></div>
           <div className="bg-amber-800 w-[300px] h-[500px] overflow-hidden rounded-2xl"><Image className=' w-full h-full object-cover' src="/art2.jpg" alt="" width={300} height={600} unoptimized /></div>
           <div className="bg-amber-200 w-[300px] h-[500px] overflow-hidden rounded-2xl"><Image className=' w-full h-full object-cover' src="/art4.jpg" alt="" width={300} height={600} unoptimized /></div>
           <div className="bg-amber-500 w-[300px] h-[256px] overflow-hidden rounded-2xl"><Image className=' w-full h-full object-cover' src="/art7.jpg" alt="" width={300} height={500} unoptimized /></div>
           <div className="bg-amber-800 w-[300px] h-[400px] overflow-hidden rounded-2xl"><Image className=' w-full h-full object-cover' src="/art1.jpg" alt="" width={300} height={500} unoptimized /></div>
           <div className="bg-amber-600 w-[300px] h-[400px] overflow-hidden rounded-2xl"><Image className=' w-full h-full object-cover' src="/art5.jpg" alt="" width={300} height={500} unoptimized /></div>
        </div>
        <div className='w-full my-12'>
              <p className='text-[18px] text-gray-400 text-center'><Link href="https://photos.app.goo.gl/JwrtcphStiRJRumB7">Explore more</Link></p>
        </div>
         <div className='bg-gray-500 w-full h-[0.2px] my-2 mx-7' style={{ boxShadow: '5px 3px 50px 5px white' }}></div>

         <div className='w-full h-full flex flex-col justify-center items-center'>
           <h1 className={`${dancingScript.className} text-[40px] shadow-[40px] top-20  w-full  md:text-[40px] lg:text-[60px] xl:text-[70px] xl:top-10  font-bold text-center bg-gradient-to-br from-[#f3f3f3] to-[#656565] bg-clip-text text-transparent mt-10`} style={{ textShadow: '0px 5px 40px white' }}>Reviews...</h1>
        <div style={{ width:'90vw', position: 'relative', overflow: 'hidden' }} className='flex h-[300px] xl:h-[700px] justify-center items-center'>
           <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
         </div>
         <div className='w-full h-[0.2px] bg-gray-400 my-8'  style={{ boxShadow: '5px 3px 50px 5px white' }}></div>
         </div>

    </div>

    <div className='beforelast w-full min-h-[100vh] flex flex-col items-center bg-black overflow-hidden'>
    <div className='first w-full min-h-1/4 flex justify-center py-7 items-center relative'>
    <h1 className={`${dancingScript.className} text-[55px] top-20  w-full  md:text-[70px] lg:text-[80px] xl:text-[90px] xl:top-0  font-semibold text-center text-white`} style={{ textShadow: '0px 5px 30px white' }}>Sketch Services..</h1>
    </div>
    <div className='second w-full min-h-3/4  flex flex-wrap justify-center gap-5 pb-7 overflow-hidden'>
        <div className='w-[300px] h-[400px] bg-gradient-to-br from-[#2f2f2f] to-[#101010] pb-7 rounded-2xl shadow-[0px 0px 40px 10px gray] relative  m-5' style={{ boxShadow: '0 0 20px 5px gray' }}>
           <h1 className={`${dancingScript.className} text-gray-300 text-center  text-[30px]`}>₹350</h1>
           <div className='w-full h-full flex flex-col items-center p-2 pb-8 gap-3'>
            <div className='flex flex-col justify-center items-center bg-black rounded-2xl w-full h-full'>
            <h1 className='text-gray-300 my-2 text-[25px] font-bold underline'>Include</h1>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>i. Single potrait</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>ii. A5 sheet</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>iii. Charcoal and graphite Painting</p>
            </div>
           </div>
        </div>

        <div className='w-[300px] h-[400px] bg-gradient-to-br from-[#2f2f2f] to-[#101010] pb-7 rounded-2xl shadow-[0px 0px 40px 10px gray] relative m-5' style={{ boxShadow: '0 0 20px 5px gray' }}>
           <h1 className={`${dancingScript.className} text-gray-300 text-center  text-[30px]`}>₹500</h1>
           <div className='w-full h-full flex flex-col items-center p-2 pb-8 gap-3'>
            <div className='flex flex-col justify-center items-center bg-black rounded-2xl w-full h-full'>
            <h1 className='text-gray-300 my-2 text-[25px] font-bold underline'>Include</h1>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>i. Single potrait</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>ii. A4 sheet</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>iii. Charcoal and graphite Painting</p>
            </div>
           </div>
        </div>

        <div className='w-[300px] h-[400px] bg-gradient-to-br from-[#2f2f2f] to-[#101010] pb-7 rounded-2xl shadow-[0px 0px 40px 10px gray] relative m-5' style={{ boxShadow: '0 0 20px 5px gray' }}>
           <h1 className={`${dancingScript.className} text-gray-300 text-center  text-[30px]`}>₹1000</h1>
           <div className='w-full h-full flex flex-col items-center p-2 pb-8 gap-3'>
            <div className='flex flex-col justify-center items-center bg-black rounded-2xl w-full h-full'>
            <h1 className='text-gray-300 my-2 text-[25px] font-bold underline'>Include</h1>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>i. Couple potrait</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>ii. A4 sheet</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>iii. Charcoal and graphite Painting</p>
            </div>
           </div>
        </div>

        <div className='w-[300px] h-[400px] bg-gradient-to-br from-[#2f2f2f] to-[#101010] pb-7 rounded-2xl shadow-[0px 0px 40px 10px gray] relative m-5' style={{ boxShadow: '0 0 20px 5px gray' }}>
           <h1 className={`${dancingScript.className} text-gray-300 text-center  text-[30px]`}>₹2000</h1>
           <div className='w-full h-full flex flex-col items-center p-2 pb-8 gap-3'>
            <div className='flex flex-col justify-center items-center bg-black rounded-2xl w-full h-full'>
            <h1 className='text-gray-300 my-2 text-[25px] font-bold underline'>Include</h1>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>i. Group potrait</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>ii. A4 sheet</p>
              <p className='text-gray-300 my-2 text-[15px] font-semibold'>iii. Charcoal and graphite Painting</p>
            </div>
           </div>
        </div>
        </div>
    </div>

      <div className='w-full min-h-[75vh] flex flex-col py-3 px-5 xl:px-20 bg-gray-100' style={{ boxShadow: '5px 3px 50px 5px white' }}>
        <div className='w-full min-h-[28vh] flex items-center'>
          <div className='w-1/2 h-full flex justify-start items-center'>
              &copy; 2025 <b className='ml-2 text-gray-600'>Rahul Sikdar</b>
          </div>
          <div className='w-1/2 h-full flex gap-4 justify-end items-center'>
              <span className='text-[18px]'>Go to</span>
               <Link href="https://wa.me/6289240972" target="_blank">
                <div className='bg-gray-800 cursor-pointer p-3 rounded-full  transition-transform duration-200 hover:scale-115'>
                   <FaWhatsapp className='text-white' size={30} />
                </div>
               </Link>
          </div>
        </div>

          <div className='w-full min-h-[35vh] relative'>
            <p>HAVE A PROJECT IN MIND?</p>
            <h1 className={`${NunitoSans.className} text-gray-300 leading-none absolute left-[-10px] xl:left-[-20px] text-[140px] md:text-[150px] lg:text-[200px] xl:text-[250px]`}>{"LET'S TALK"}</h1>
          </div>

          <div className='w-full flex flex-col gap-4 z-30 lg:flex-row h-[15vh] m-0 p-0'>
          <div className='w-full flex gap-4 justify-center lg:justify-start items-center'>
          <div className=' h-full flex gap-4 justify-center md:justify-start items-center'>
              <Link href="https://www.instagram.com/29m_artsic_rahul_?igsh=MW0zeXFoOWRkcmZ4bA==" target="_blank">
              <div className='flex items-center gap-1 p-1 rounded-4xl border border-black'>
               <span className='text-[18px]'>Go to</span>
                     <div className='bg-gray-800 cursor-pointer p-2 rounded-full  transition-transform duration-200 hover:scale-115'>
                         <FaInstagram className='text-white' size={15} />
                      </div>
               </div>
                  </Link>
          </div>
          <div className='h-full flex gap-4 justify-center md:justify-start items-center'>
              <Link href="https://www.facebook.com/share/18w3NU3ufX/" target="_blank">
              <div className='flex items-center gap-1 p-1 rounded-4xl border border-black'>
               <span className='text-[18px]'>Go to</span>
                     <div className='bg-gray-800 cursor-pointer p-2 rounded-full  transition-transform duration-200 hover:scale-115'>
                         <FaFacebookF className='text-white' size={15} />
                      </div>
               </div>
                  </Link>
          </div>
          </div>

          <div className='w-full h-full flex gap-4 justify-center  items-center'>
              <div>
              <div className=''>
              Email Id : <b className='ml-2 text-gray-600'>krishnendusikder0@gmail.com</b>
              </div>
               <div className=''>
              Phone No : <b className='ml-2 text-gray-600'>+91 6289240972</b>
              </div>
              </div>
          </div>

          
          <div className='w-full flex justify-center lg:justify-end items-center'>
                   <div className=''>
                        Created by : <Link href="https://www.linkedin.com/in/avirup-kar-145201322 " target="_blank"><b className='ml-2 text-gray-600'>Avirup Kar</b></Link>
                   </div>
          </div>
          </div>
      </div>
  </>)}

export default Page