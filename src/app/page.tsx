"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import reenrollment1 from '/public/re-enrollment/new-screens-1.svg';
import reenrollment2 from '/public/re-enrollment/new-screens-2.svg';
import reenrollment3 from '/public/re-enrollment/new-screens-3.svg';
import reenrollment4 from '/public/re-enrollment/new-screens-4.svg';
import reenrollment5 from '/public/re-enrollment/new-screens-5.svg';
import posgraduate1 from '/public/posgraduate/new-screens-1.svg';
import posgraduate2 from '/public/posgraduate/new-screens-2.svg';
import posgraduate3 from '/public/posgraduate/new-screens-3.svg';
import posgraduate4 from '/public/posgraduate/new-screens-4.svg';
import posgraduate5 from '/public/posgraduate/new-screens-5.svg';
import { ArrowRight02Icon, Linkedin02Icon, GithubIcon, StackStarIcon, GoogleDocIcon, PenTool03Icon, AnalyticsUpIcon, ViewIcon, SourceCodeCircleIcon, Beach02Icon, PlayIcon, CursorMagicSelection01Icon, UmbrellaIcon } from "hugeicons-react";

export default function Home() {
  
  return (
    <main>      
      <section className="min-h-[90vh] rounded-none border-b-2 border-b-slate-900 bg-noise from-green-100 via-emerald-50 to-lime-50 text-green-950">
        <motion.div 
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [20, 0] }}
          transition={{ delay: 0, duration: .4, ease: "easeOut" }}
          className="container my-16 p-16 grid grid-cols-5">
            <div className="col-span-3">   
              <motion.p          
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [20, 0] }}
                transition={{ delay: 0, duration: .4, ease: "easeOut" }}
                className="title">
                11 years in design.<br/>
                Skilled at e-commerce, financial services and b2b/b2c SaaS
              </motion.p>    
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [20, 0]}}
                transition={{ delay: .4, duration: .4, ease: "easeOut" }}
                className="mt-6 flex space-x-4">
                <a href="#first-case" className="button-primary bg-green-600 border-green-600 hover:bg-emerald-600 hover:border-emerald-600">
                  <StackStarIcon/>
                  View case studies
                </a>
                <a href="Tadeu Garcia - Resume.pdf" target="_blank" className="button-outline fill-green-950 text-green-950 border-green-950 hover:bg-green-950 hover:text-white hover:fill-white">
                  <GoogleDocIcon/>
                  View my resume
                </a>
              </motion.div>
            </div>

            <div className="col-span-2 flex flex-col space-y-4">
              <motion.div         
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [20, 0]}}
                transition={{ delay: .8, duration: .4, ease: "easeOut" }}
                className="relative">
                  <video
                    className="h-full rounded-2xl shadow-2xl shadow-green-900/40"
                    src="intro.mp4"
                    loop
                    autoPlay
                    muted
                    controls
                    controlsList="nodownload nofullscreen noplaybackrate"
                    disableRemotePlayback x-webkit-airplay="deny"
                    disablePictureInPicture>
                    Your browser does not support the video tag.
                  </video>
              </motion.div>

              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: [20, 0] }}
                  transition={{ delay: 1.2, duration: .4, ease: "easeOut" }}
                  className="text-lg font-bold">
                  Tadeu Garcia
                </motion.h1>
                <p>
                  <motion.span            
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [20, 0]}}
                    transition={{ delay: 1.6, duration: .4, ease: "easeOut" }}
                    className="font-light">
                    Senior Product Designer&nbsp;
                  </motion.span>
                  <motion.span          
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: [20, 0] }}
                    transition={{ delay: 2.0, duration: .4, ease: "easeOut" }}
                    className="font-semibold">
                    based in Rio de Janeiro <Beach02Icon className="inline"/>
                  </motion.span>
                </p>
              </div>              
            </div>
        </motion.div>
      </section>

      <section id="first-case" className="bg-noise from-stone-950 via-slate-900 to-slate-950 text-stone-50">
        <div className="case-section">         
          <motion.ul        
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: .5, duration: .4, ease: "easeOut" }} 
            className="space-x-2">
              <li className="chip text-white border-yellow-500">desk research</li>
              <li className="chip text-white border-yellow-500">usability testing</li>
              <li className="chip text-white border-yellow-500">design system</li>
              <li className="chip text-white border-yellow-500">ui + prototyping</li>
          </motion.ul>
          
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0, duration: .4, ease: "easeOut" }}>
              <h3 className="case-title">Premium posgraduate redesign</h3>
              <p>I redesigned the postgraduate course purchase flow with a premium UI, <span className="underline decoration-2 decoration-yellow-500">achieving 57.14% faster navigation.</span></p>
              <a href="/posgraduate" className="button-primary mt-4 bg-yellow-600 border-yellow-600 hover:bg-amber-600 hover:border-amber-600">View case <ArrowRight02Icon className="ml-1"/></a>
          </motion.div>

          <motion.a          
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: .4, duration: .4, ease: "easeOut" }}
            href="/posgraduate"
            className="case-screens">
              <Image src={posgraduate1} alt=""/>
              <Image src={posgraduate2} alt=""/>
              <Image src={posgraduate3} alt=""/>
              <Image src={posgraduate4} alt=""/>
              <Image src={posgraduate5} alt=""/>
          </motion.a>
        </div>
      </section>

      <section id="first-case" className="bg-noise from-emerald-50 via-blue-50 to-amber-50 text-emerald-950">
        <div className="case-section">         
          <motion.ul        
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: .5, duration: .4, ease: "easeOut" }} 
            className="space-x-2">
            <li className="chip text-emerald-950 border-emerald-600">usability testing</li>
            <li className="chip text-emerald-950 border-emerald-600">user behavior analysis</li>
            <li className="chip text-emerald-950 border-emerald-600">ui + prototyping</li>
          </motion.ul>
          
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0, duration: .4, ease: "easeOut" }}>
              <h3 className="case-title">Payment of outstanding fees</h3>
              <p>How I designed the re-enrollment flow, automating financial processes and <span className="underline decoration-2 decoration-emerald-500">boosting debt clearance.</span></p>
              <a href="/re-enrollment" className="button-primary mt-4 bg-emerald-600 border-emerald-600 hover:bg-teal-600 hover:border-teal-600">View case <ArrowRight02Icon className="ml-1"/></a>
          </motion.div>

          <motion.a          
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: .4, duration: .4, ease: "easeOut" }}
            href="/re-enrollment"
            className="case-screens">
              <Image src={reenrollment1} alt=""/>
              <Image src={reenrollment2} alt=""/>
              <Image src={reenrollment3} alt=""/>
              <Image src={reenrollment4} alt=""/>
              <Image src={reenrollment5} alt=""/>
          </motion.a>
        </div>
      </section>
      
      <section className="bg-noise from-purple-100 via-indigo-50 to-blue-100 text-green-950">
        <div className="container grid gap-10">
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            transition={{ delay: 0, duration: .4, ease: "easeOut" }}
            className="font-normal text-2xl">
              Tadeu has experience in multiple areas within the UX Umbrella
              <UmbrellaIcon className="ml-2 inline-block"/>
          </motion.h2>
          <div className="grid grid-cols-5 space-x-5">            
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: .3, duration: .4, ease: "easeOut" }}
              className="umbrella-cards">
              <h3 className="font-semibold text-lg mb-4 inline-flex space-x-4 items-center"><CursorMagicSelection01Icon className="mr-2"/> Interaction Design</h3>
              
              <ul className="font-normal space-y-2">
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
              transition={{ delay: .3 + .2, duration: .4, ease: "easeOut" }}
              className="umbrella-cards">
              <h3 className="font-semibold text-lg mb-4 inline-flex items-center"><PenTool03Icon className="mr-2"/> Prototyping</h3>
              
              <ul className="font-normal space-y-2">
                <li>Figma</li>
                <li>Framer</li>
                <li>Sketch</li>
                <li>Axure</li>
                <li>Microinteractions</li>
                <li>Responsive</li>
                <li>Accessibility</li>
              </ul>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: .3 + .2, duration: .4, ease: "easeOut" }}
              className="umbrella-cards">
              <h3 className="font-semibold text-lg mb-4 inline-flex items-center"><ViewIcon className="mr-2"/> User Research</h3>
              
              <ul className="font-normal space-y-2">
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
              transition={{ delay: .3 + .2, duration: .4, ease: "easeOut" }}
              className="umbrella-cards">
              <h3 className="font-semibold text-lg mb-4 inline-flex items-center"><AnalyticsUpIcon className="mr-2"/> Analytics</h3>
              
              <ul className="font-normal space-y-2">
                <li>User Behavior Analysis</li>
                <li>Heatmaps</li>
                <li>UX Metrics</li>
                <li>CRO Strategies</li>
                <li>A/B Testing</li>
              </ul>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: .3 + .2, duration: .4, ease: "easeOut" }}
              className="umbrella-cards">
              <h3 className="font-semibold text-lg mb-4 inline-flex items-center"><SourceCodeCircleIcon className="mr-2"/> Front-end</h3>
              
              <ul className="font-normal space-y-2">
                <li>HTML</li>
                <li>CSS / SASS</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>Node</li>
                <li>NPM / Yarn</li>
                <li>Postgres</li>
                <li>Git</li>
              </ul>
            </motion.div>
          </div>

          <div className="flex">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ delay: .4, duration: .4, ease: "easeOut" }}
              className="w-full flex-row space-y-2">
                <p className="text-xl">
                  Feel free to reach out, <strong>I look forward to hearing from you</strong>
                </p>
                <a href="mailto:tadeugarcia.92@gmail.com" className="btn-link inline-block hover:text-green-700">
                  tadeugarcia.92@gmail.com
                </a>
            </motion.div>

            <nav className="mx-auto mb-5 w-full inline-flex justify-end text-green-950">          
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [20, 0] }}
                transition={{ delay: .8, duration: .4, ease: "easeOut" }}
                className="space-x-5">
                <a href="https://www.linkedin.com/in/garciatadeu/" target="_blank" className="navbar-link">
                  <Linkedin02Icon/>
                  LinkedIn
                </a>
                <a href="https://github.com/tadeugarcia" target="_blank" className="navbar-link">
                  <GithubIcon/>
                  GitHub
                </a>
                <a href="Tadeu Garcia - Resume.pdf" target="_blank" className="navbar-link">
                  <GoogleDocIcon/>
                  Resume
                </a>
              </motion.div>
            </nav>
          </div>          
        </div>
      </section>
    </main>
  );
}
