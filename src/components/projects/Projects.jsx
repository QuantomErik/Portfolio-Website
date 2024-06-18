
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div id="projects" className="projects min-h-screen flex flex-col items-center justify-start bg-black text-white">
      {/* <h2 className="text-3xl font-bold mb-20">Projects</h2> */}
      <div className="spacer h-20"></div>
      <ProjectCards />
      
    </div>
  );
}

export default Projects;
