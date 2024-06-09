import Skills from "../skills/skills";

function About() {
  return (
    <div id="about" className="about min-h-screen flex flex-col items-center justify-start bg-black text-white">
      {/* <h1 className="text-4xl font-bold">Skills</h1> */}
      {/* <p className="mt-4 text-lg">This is the about page of my portfolio website.</p> */}

      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <Skills />
    </div>
  );
}

export default About;

