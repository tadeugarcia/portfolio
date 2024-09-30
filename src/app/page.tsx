"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import reenrollment from '/public/re-enrollment/case.svg';
import posgraduate from '/public/posgraduate/case.svg';
import { Linkedin02Icon, GithubIcon, GoogleDocIcon, Mail01Icon, CallIcon, PenTool03Icon, AnalyticsUpIcon, ViewIcon, SourceCodeCircleIcon, Beach02Icon, PlayIcon } from "hugeicons-react";

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("videoPlayer") as HTMLVideoElement | null;
    if (video) {
      video.play();
      setIsPlaying(true);
    } else {
      console.error("Video element not found");
    }
  };
  
  return (
    <main>
      <nav className="container mx-auto py-12 top-0 left-0 right-0 flex justify-between items-center text-green-950">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [20, 0] }}
          transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}
          className="text-lg font-bold">
          Tadeu Garcia
        </motion.h1>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [20, 0] }}
          transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
          className="space-x-5">
          <a href="https://www.linkedin.com/in/garciatadeu/" target="_blank" className="navbar-link">
            <Linkedin02Icon />
            LinkedIn
          </a>
          <a href="https://github.com/tadeugarcia" target="_blank" className="navbar-link">
            <GithubIcon />
            GitHub
          </a>
          <a href="Tadeu Garcia - Resume.pdf" target="_blank" className="navbar-link">
            <GoogleDocIcon />
            Resume
          </a>
          <a href="mailto:tadeugarcia.92@gmail.com" className="navbar-link">
            <Mail01Icon />
            Email
          </a>
          <a href="tel:+55 21 97997 6655" className="navbar-link">
            <CallIcon />
            Phone
          </a>
        </motion.div>
      </nav>
      <section className="container min-h-fit py-24 grid grid-cols-2 gap-12 rounded-2xl bg-green-50">
        <div className="space-y-7">
          <motion.p          
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [20, 0] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="title text-green-950">
            11 years in design.<br/>
            Skilled in financial services, e-commerce and b2b/b2c SaaS
          </motion.p>
          <motion.p
          className="text-green-900">
            <motion.span            
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [20, 0]}}
              transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
              className="font-bold">
              Senior Product Designer&nbsp;
            </motion.span>           
            <motion.span          
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [20, 0] }}
              transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
              className="font-light">
              based in Rio de Janeiro <Beach02Icon className="inline"/>
            </motion.span>
          </motion.p>
          <motion.button                   
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [20, 0]}}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            className="rounded-full bg-green-500 py-2 px-4 text-white">
            View case studies
          </motion.button>
        </div>

        <div>
          <motion.ul         
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [20, 0]}}
            transition={{ delay: 1.4, duration: 0.4, ease: "easeOut" }}
            className="mb-5 grid grid-flow-col font-light text-green-800">

            <li className="inline-flex items-center">
              <PenTool03Icon className="rounded-full bg-green-200 size-7 mr-2 p-1"/>
              Prototyping
            </li>
            <li className="inline-flex items-center">
              <AnalyticsUpIcon className="rounded-full bg-green-200 size-7 mr-2 p-1"/>
              Product Analytics
            </li>
            <li className="inline-flex items-center">
              <ViewIcon className="rounded-full bg-green-200 size-7 mr-2 p-1"/>
              User Research
            </li>
            <li className="inline-flex items-center">
              <SourceCodeCircleIcon className="rounded-full bg-green-200 size-7 mr-2 p-1"/>
              Front-end
            </li>
          </motion.ul>

          <motion.div         
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [20, 0]}}
            transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
            className="relative">
              {!isPlaying && ( 
                <button onClick={handlePlay} className="absolute z-10 inset-0 flex flex-row justify-start items-end p-10 bg-black bg-opacity-50 rounded-2xl">
                  <PlayIcon className="mr-3 p-3 size-12 hgi-stroke text-green-900 bg-white rounded-full shadow-lg" />
                  <div className="text-left text-white">
                    <h2 className="text-xl font-bold">Introducing myself</h2>
                    <p className="text-sm">An overview of my skills and experiences</p>
                  </div>
                </button>
              )}

              <video
                id="videoPlayer"
                className="w-full rounded-2xl shadow-2xl shadow-green-900/40"
                controls={isPlaying}
                controlsList="nodownload"
                disablePictureInPicture
                preload="auto"
                onPlay={() => setIsPlaying(true)}
              >
                <source src="intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </motion.div>
        </div>
      </section>

      <section id="case-studies" className="space-y-8">
          <div className="text-white text-center">
            <motion.h2 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="title">
              Case studies
            </motion.h2>
            <motion.p            
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}>
              Relevant experience from recent years
            </motion.p>
          </div>

          <div className="flex flex-row space-x-5">
            <motion.a
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }} 
              className="case-card hover:border-emerald-500 hover:shadow-emerald-500/40" href="/re-enrollment">
              <ul className="flex space-x-2">
                <li className="chip">usability testing</li>
                <li className="chip">user behavior analysis</li>
                <li className="chip">ui + prototyping</li>
              </ul>
              <Image src={reenrollment} alt="" height={320} />
              <div>
                <h3 className="case-title">Payment of outstanding fees</h3>
                <p>How I designed the re-enrollment flow, automating financial processes and <span className="underline decoration-2 decoration-emerald-500">boosting debt clearance and re-enrollments.</span></p>
              </div>
            </motion.a>

            <motion.a
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }} 
              className="case-card hover:border-yellow-500 hover:shadow-yellow-500/40" href="/posgraduate">
              <ul className="flex space-x-2">
                <li className="chip">desk research</li>
                <li className="chip">usability testing</li>
                <li className="chip">design system</li>
                <li className="chip">ui + prototyping</li>
              </ul>
              <Image src={posgraduate} alt="" height={320} />
              <div>
                <h3 className="case-title">Premium posgraduate redesign</h3>
                <p>I redesigned the postgraduate course purchase flow with a premium UI, <span className="underline decoration-2 decoration-yellow-500">achieving 57.14% faster navigation.</span></p>
              </div>
            </motion.a>
          </div>        
      </section>
      
      <section id="about me" className="flex flex-row text-white">        
        <div className="basis-1/3 justify-center">
          <motion.h2 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="title mb-10">
              About me
          </motion.h2>
          <div className="flex flex-col space-y-4">
            <motion.a 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.2 + .1, duration: 0.4, ease: "easeOut" }}
              href="https://www.linkedin.com/in/garciatadeu/" target="_blank" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              LinkedIn
            </motion.a>
            <motion.a 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.2 + .2, duration: 0.4, ease: "easeOut" }}
              href="https://github.com/tadeugarcia" target="_blank" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              GitHub
            </motion.a>
            <motion.a 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.2 + .3, duration: 0.4, ease: "easeOut" }}
              href="Tadeu Garcia - Resume.pdf" target="_blank" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              Resume
            </motion.a>
            <motion.a 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.2 + .3, duration: 0.4, ease: "easeOut" }}
              href="mailto:tadeugarcia.92@gmail.com" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              tadeugarcia.92@gmail.com
            </motion.a>
            <motion.a 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.2 + .4, duration: 0.4, ease: "easeOut" }}
              href="tel:+55 21 97997 6655" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              +55 21 97997 6655
            </motion.a>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="grid grid-cols-2 space-x-5 text-white">
            <motion.div            
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
              className="p-10 border rounded-2xl border-zinc-600">
              <h2 className="font-bold text-2xl mb-5"> 
                <span className="underline-blue">Code</span> and <span className="underline decoration-pink-500">acessibility</span>
              </h2>
              
              <div className="font-light space-y-5">
                <p>What sets me apart is my deep, <strong className="underline-blue">long-standing interest in understanding the inner workings of interfaces.</strong> Since I began working with interfaces in 2013, I&apos;ve always wanted to <strong className="underline-blue">collaborate closely with developers.</strong> In 2016, I took this passion further by starting to work on front-end development.</p>
                
                <p>In my previous role, one of the directors there, who was also a developer and <strong className="underline decoration-2 decoration-pink-500">a blind person,</strong> taught me 
                so much about accessibility: from <strong className="underline decoration-2 decoration-pink-500">best practices to using screen readers</strong>, it was an incredible learning with him.</p>
              </div>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 1.8, duration: 0.4, ease: "easeOut" }}
              className="p-10 border rounded-2xl border-zinc-600">
              <h2 className="font-bold text-2xl mb-5">More about Tadeu</h2>
              
              <ul className="font-light space-y-5">
                <li>✈️ Brazilian, obtaining Spanish (EU) citizenship by end-2024.</li>
                <li>🤖 AI enthusiast, using it daily for work and personal tasks.</li>
                <li>🌱 To proceed with the hipster designer checklist, I&apos;m vegetarian.</li>
                <li>🏊‍♂️ My current hobbies are swimming, board sports, yoga and meditation.</li>
                <li>🏆 Started designing in 2007 with an online forum signature contest.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
