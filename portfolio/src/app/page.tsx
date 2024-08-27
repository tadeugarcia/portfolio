import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="h-screen">
        <p>Tadeu Garcia</p>
        <h1>Senior Product Designer based in Rio de Janeiro</h1>
        <p>
          Experienced designer specializing in creating digital products for e-commerce, marketplaces, 
          billing and payment systems, as well as back-office applications. Skilled in developing web components 
          for desktop and mobile platforms, with expertise in Material Design for app interfaces.
        </p>
        <p>Brazilian, obtaining Spanish citizenship by end-2024.</p>
      </section>

      <section className="h-screen">
        <h2>Case studies</h2>
        <p>Relevant experience from recent years</p>

        <a href="case-1" className="video-intro">
          <video>
            <source src="@public/posgraduate/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </a>

        <h3>Premium Posgraduate Redesign</h3>
        
        <p>In this redesign, the navigation flow and the entire course purchase process were completely renewed.
        
        <a href="case-1">View case</a></p>
        
        <a href="case-2" className="video-intro">
          <video>
            <source src="@public/re-enrollment/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </a>
        
        <h3>Payment of outstanding fees</h3>
        
        <p>Streamlining the process for students to pay outstanding tuition fees before re-enrolling for&nbsp;the&nbsp;next&nbsp;term.</p>
        
        <a href="case-2">View case</a>
      </section>
      
      <section className="h-screen">
        <h2>Acessibility and code </h2>
        
        <p>What sets me apart is a long-standing interest in understanding the background workings of interfaces.</p>
        <p>In my previous role, one of the directors there, who was also a developer and a blind person, taught me 
        so much about <strong>accessibility: from best practices to using screen readers</strong>, it was an 
        incredible learning with him.</p>
      </section>

      <section className="h-screen">
        <h2>More about me </h2>
        
        <ul>
          <li>Started designing in 2007 with an online forum signature contest.</li>
          <li>AI enthusiast, I utilize Artificial Intelligence daily to assist me with work and personal tasks.</li>
          <li>To proceed with the hipster designer checklist, I'm vegetarian.</li>
          <li>My current hobbies are swimming, yoga, and meditation.</li>
        </ul>
      </section>

      <section className="h-screen">
        <h2>You can find me over here </h2>

        <div className="social">
          <a href="https://www.linkedin.com/in/garciatadeu/" target="_blank">
            <span className="material-symbols-outlined">arrow_outward</span> LinkedIn
          </a>
          <a href="assets/resume/Tadeu_Garcia_Resume.pdf" target="_blank">
            <span className="material-symbols-outlined">description</span> Resume
          </a>
          <a href="mailto:tadeugarcia.92@gmail.com">
            <span className="material-symbols-outlined">mail</span> tadeugarcia.92@gmail.com
          </a>
          <a href="tel:+55 21 97997 6655">
            <span className="material-symbols-outlined">phone</span> +55 21 97997 6655
          </a>
        </div>
      </section>
    </main>
  );
}
