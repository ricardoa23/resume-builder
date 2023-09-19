import React from "react";

const LandingPage = () => {
  return (
    <>
      <h1 className="bg-blue-400 text-center">Resume Builder</h1>
      <p className="introduction indent-5">
        Welcome to my single-page web application, designed to simplify and
        elevate your resume creation process. I've crafted this platform to
        empower you to create standout resumes effortlessly. Simply input your
        personal information and work history, and our integration with OpenAI's
        API takes care of the rest. The magic happens when I refine your work
        history's bullet points, enhancing the quality of your resume. With just
        a few clicks, you can generate a professionally polished resume in DOCX
        format. Say goodbye to tedious formatting, and hello to your future
        career success with my resume builder.{" "}
      </p>

      <h2>How it Works</h2>
      <p className="how-it-works">
        Curious about how my platform transforms your work history into a
        compelling resume? It's simple. After you input your details, the system
        leverages OpenAI's API to analyze and improve the bullet points in your
        work history. This means your resume not only looks polished but also
        communicates your achievements and skills effectively. My platform
        streamlines the entire process, ensuring that you get a high-quality
        resume in no time. Experience the future of resume building with ease
        and efficiency.
      </p>

      <h2>Technologies Used</h2>
      <p className="tech-used">
        My web application was meticulously crafted using cutting-edge
        technologies to provide you with a seamless experience. The frontend is
        built with React and TypeScript, offering a dynamic and responsive user
        interface. On the backend, I rely on Node.js to handle data processing
        and API interactions. Leveraging OpenAI's API, I enhance the quality of
        your resume's content. To generate DOCX files, I use a powerful document
        library. Initially, I employed Vite to accelerate the development
        process, ensuring my application is fast and efficient. With this tech
        stack, I deliver a user-friendly and high-performance resume builder to
        help you stand out in your job search.
      </p>

      {/* button */}
      <button>Get Started</button>

      <h2>Disclaimer</h2>
      <p>
        To unlock the full potential of my application, including the bullet
        point improvement feature powered by OpenAI's API, I kindly request that
        users submit an approval request. This process helps maintain the
        integrity of my service and prevents misuse of API calls. However,
        please note that even without approval, my application remains fully
        functional, with the exception of the OpenAI-powered enhancements.
      </p>

      <h2>Privacy Policy</h2>
      <p>
        Rest assured, your privacy and data security are of utmost importance to
        me. I want to reassure you that no personal information you provide will
        be stored long-term or used for any purposes beyond the immediate scope
        of generating your resume. I have designed my application with safety
        and privacy in mind, implementing robust measures to protect your data
        throughout your interaction with my platform. Thank you for choosing my
        service. Your trust in me is greatly appreciated, and I am committed to
        delivering a secure and efficient experience while prioritizing your
        privacy at every step.it
      </p>
    </>
  );
};

export default LandingPage;
