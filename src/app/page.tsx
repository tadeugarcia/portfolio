"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import reenrollment from '/public/re-enrollment/case.svg';
import posgraduate from '/public/posgraduate/case.svg';
import { Linkedin02Icon, GithubIcon, GoogleDocIcon, Mail01Icon, CallIcon, PenTool03Icon, AnalyticsUpIcon, ViewIcon, SourceCodeCircleIcon, Beach02Icon, PlayIcon, CursorMagicSelection01Icon, Diamond02Icon } from "hugeicons-react";

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
      <section className="container min-h-fit mb-12 py-24 grid grid-cols-2 gap-12 rounded-2xl bg-green-50">
        <div>
          <motion.p          
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [20, 0] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="title text-green-950">
            11 years in design.<br/>
            Skilled in financial services, e-commerce and b2b/b2c SaaS
          </motion.p>
          <p className="mb-4 text-green-900">
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
          </p>
          <motion.a                   
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [20, 0]}}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            href="#first-case"
            className="rounded-full bg-green-500 py-2 px-4 text-white hover:bg-green-400 transition duration-300">
            View case studies
          </motion.a>
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
                onPlay={() => setIsPlaying(true)}>
                <source src="intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </motion.div>
        </div>
      </section>

      <section id="first-case" className="case-section bg-teal-50 text-teal-950">
        <motion.ul        
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [20, 0] }}
          transition={{ delay: 1, duration: 0.4, ease: "easeOut" }} 
          className="flex space-x-2">
          <li className="chip text-teal-950 border-teal-700">usability testing</li>
          <li className="chip text-teal-950 border-teal-700">user behavior analysis</li>
          <li className="chip text-teal-950 border-teal-700">ui + prototyping</li>
        </motion.ul>

        <div className="flex space-x-10 items-center justify-center">
          <motion.div          
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}>
              <Image src={reenrollment} alt="" height={480}/>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }} 
            className="w-2/6">
              <h3 className="case-title">Payment of outstanding fees</h3>
              <p className="mb-5">How I designed the re-enrollment flow, automating financial processes and <span className="underline decoration-2 decoration-emerald-500">boosting debt clearance and re-enrollments.</span></p>
              <a href="/re-enrollment" className="case-button bg-emerald-600">View case</a>
          </motion.div>    
        </div>            
      </section>

      <section className="case-section bg-gray-950">
        <motion.ul
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [20, 0] }}
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }} 
          className="flex space-x-2">
            <li className="chip">desk research</li>
            <li className="chip">usability testing</li>
            <li className="chip">design system</li>
            <li className="chip">ui + prototyping</li>
        </motion.ul>

        <div className="flex space-x-10 items-center justify-center">
          <motion.div          
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}>
              <Image src={posgraduate} alt="" height={480}/>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }} 
            className="w-2/6">
              <h3 className="case-title">Premium posgraduate redesign</h3>
              <p className="mb-5">I redesigned the postgraduate course purchase flow with a premium UI, <span className="underline decoration-2 decoration-yellow-500">achieving 57.14% faster navigation.</span></p>
              <a href="/posgraduate" className="case-button bg-yellow-600">View case</a>
          </motion.div>  
        </div>
      </section>
      
      <section className="grid gap-0 container text-gray-950">
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}
            className="font-normal text-2xl inline-flex items-center">
              <Diamond02Icon className="mr-2"/>Top skills
          </motion.h2>
          <div className="grid grid-cols-5 space-x-5">            
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              className="p-8 border rounded-2xl border-zinc-200">
              <h3 className="font-medium text-lg mb-4 inline-flex space-x-4 items-center"><CursorMagicSelection01Icon className="mr-2"/> Interaction Design</h3>
              
              <ul className="font-light space-y-2">
                <li>Web Components</li>
                <li>Material Design</li>
                <li>Design System</li>
                <li>UI/UX Patterns</li>
              </ul>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.3 + 0.2, duration: 0.4, ease: "easeOut" }}
              className="p-8 border rounded-2xl border-zinc-200">
              <h3 className="font-medium text-lg mb-4 inline-flex items-center"><PenTool03Icon className="mr-2"/> Prototyping</h3>
              
              <ul className="font-light space-y-2">
                <li>Figma</li>
                <li>Framer</li>
                <li>Sketch</li>
                <li>Axure</li>
                <li>Microinteractions</li>
                <li>Responsive (Mobile first)</li>
                <li>Accessibility (WCAG Guidelines)</li>
              </ul>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.3 + 0.2, duration: 0.4, ease: "easeOut" }}
              className="p-8 border rounded-2xl border-zinc-200">
              <h3 className="font-medium text-lg mb-4 inline-flex items-center"><AnalyticsUpIcon className="mr-2"/> Analytics</h3>
              
              <ul className="font-light space-y-2">
                <li>User Behavior Analysis</li>
                <li>Heatmaps</li>
                <li>UX Metrics (NPS, SUS)</li>
                <li>CRO Strategies</li>
                <li>A/B Testing</li>
              </ul>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.3 + 0.2, duration: 0.4, ease: "easeOut" }}
              className="p-8 border rounded-2xl border-zinc-200">
              <h3 className="font-medium text-lg mb-4 inline-flex items-center"><ViewIcon className="mr-2"/> User Research</h3>
              
              <ul className="font-light space-y-2">
                <li>Usability Testing</li>
                <li>User Interviews</li>
                <li>Journey Mapping</li>
                <li>Surveys</li>
              </ul>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: 0.3 + 0.2, duration: 0.4, ease: "easeOut" }}
              className="p-8 border rounded-2xl border-zinc-200">
              <h3 className="font-medium text-lg mb-4 inline-flex items-center"><SourceCodeCircleIcon className="mr-2"/> Front-end</h3>
              
              <ul className="font-light space-y-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>NPM</li>
                <li>Yarn</li>
                <li>Git</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
            className="content-center space-x-5">
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
      </section>
    </main>
  );
}
