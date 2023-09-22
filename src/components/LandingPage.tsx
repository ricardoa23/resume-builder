import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="bg-white h-screen w-screen snap-y snap-mandatory overflow-scroll">
        {/* Hero Section */}
        <div className="h-screen bg-red-500 flex items-center justify-center snap-start">
          <h1 className="text-white text-8xl">Resume Builder</h1>
        </div>

        {/* Introduction Section */}
        <div className="relative h-screen w-screen bg-gradient-to-r from-primary to-transparent snap-start">
          <p className="absolute left-16 top-1/3 w-1/2 text-2xl">
            Welcome to my single-page web application, designed to simplify and
            elevate your resume creation process. I've crafted this platform to
            empower you to create standout resumes effortlessly. Simply input
            your personal information and work history, and our integration with
            OpenAI's API takes care of the rest. The magic happens when I refine
            your work history's bullet points, enhancing the quality of your
            resume. With just a few clicks, you can generate a professionally
            polished resume in DOCX format. Say goodbye to tedious formatting,
            and hello to your future career success with my resume builder.
          </p>
        </div>

        {/* How it Works Section */}
        <div className="relative h-screen w-screen bg-gradient-to-l from-primary to-transparent snap-start">
          <h2 className="text-center text-6xl py-9">How it Works</h2>
          <p className="absolute right-16 top-1/3 w-1/2 text-right text-2xl">
            Curious about how my platform transforms your work history into a
            compelling resume? It's simple. After you input your details, the
            system leverages OpenAI's API to analyze and improve the bullet
            points in your work history. This means your resume not only looks
            polished but also communicates your achievements and skills
            effectively. My platform streamlines the entire process, ensuring
            that you get a high-quality resume in no time. Experience the future
            of resume building with ease and efficiency.
          </p>
        </div>

        {/* Technologies Used Section */}
        <div className="relative h-screen w-screen bg-gradient-to-r from-primary to-transparent snap-start">
          <h2 className="text-center text-5xl py-9">Technologies Used</h2>
          <p className="absolute left-16 top-1/3 w-1/2 text-2xl">
            My web application was meticulously crafted using cutting-edge
            technologies to provide you with a seamless experience. The frontend
            is built with React and TypeScript, offering a dynamic and
            responsive user interface. On the backend, I rely on Node.js to
            handle data processing and API interactions. Leveraging OpenAI's
            API, I enhance the quality of your resume's content. To generate
            DOCX files, I use a powerful document library. Initially, I employed
            Vite to accelerate the development process, ensuring my application
            is fast and efficient. With this tech stack, I deliver a
            user-friendly and high-performance resume builder to help you stand
            out in your job search.
          </p>
        </div>
        <div className="relative h-screen w-screen bg-primary snap-start flex flex-col items-center justify-around">
          <h2 className="text-5xl ">Let's build you a resume </h2>
          <button className="bg-accent rounded-lg p-2 text-white mx-auto block mt-6">
            Get Started
          </button>
          <div></div>
        </div>
      </div>
      {/* <button className="bg-accent rounded-lg p-2 text-white mx-auto block mt-6">
        Get Started
      </button>
      <div className="pt-6 mt-10 px-8">
        {/* ... Disclaimer and Privacy Policy sections */}
      {/* </div>  */}
    </>
  );
};

export default LandingPage;
