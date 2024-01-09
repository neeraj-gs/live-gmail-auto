"use client"
import Image from "next/image";
import { useEffect, useRef } from 'react';
import TypeWriterTitle from "./TypeWriterTitle";

const Progress = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if(video){
      video.addEventListener('ended', () => {
        video.play();
      });

    }
    // Autoplay and loop the video
   
    
  }, []);

  return (
    <>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Image className="mx-auto" src="/construction.gif" alt="Work in progress image" height={50} width={50} />
      <h1 className='font-semibold text-lg text-center mt-2'>
        A Node.js Backend Project<br /> <span className="font-bold text-green-600"> Automatically Replies</span> to Mails When User is Unable to send mails &nbsp; <br />
        <h2 className="mt-12 mb-12 font-bold text-blue-600">
            <TypeWriterTitle />
        </h2>
      </h1>
      <video
        ref={videoRef}
        controls
        autoPlay // Autoplay the video
        loop // Loop the video after completion
        muted
        width="175%" // Set width as per your requirement
        height={340} // Set height as per your requirement
        className="mt-4 shadow-lg"
      >
        <source src="/CoverMe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      

      <footer className="mt-20 ml-16 font-bold">
        <a className="underline" href="https://github.com/neeraj-gs/Gmail-Auto-Reply" target="_blank">Download Source Code</a>
        &nbsp;&nbsp;&nbsp;| &nbsp; Created With 💚 By <a href="https://github.com/neeraj-gs" target="_blank" className="underline">Neeraj G S</a> 
      </footer>
      
    </div>

    
    </>
    
  );
};

export default Progress;