import Skills from "../skills/skills";

function About() {
  return (
    <div id="about" className="about min-h-screen flex flex-col items-center justify-start bg-black text-white">
      
      <div className="spacer h-20"></div>
      <h2 className="text-3xl font-bold mb-20 mt-10">My Skills</h2>
      <Skills />
    </div>
  );
}

export default About;

