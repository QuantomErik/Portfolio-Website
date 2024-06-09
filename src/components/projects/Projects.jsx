
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div id="projects" className="projects min-h-screen flex flex-col items-center justify-start bg-black text-white">
      {/* <h2 className="text-3xl font-bold mb-20">Projects</h2> */}
      <div className="spacer h-20"></div>
      <ProjectCards />
      {/* Add more project details or examples here */}
      {/* <Link smooth to="#start" className="mt-6 px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-700">
        Scroll to Home
      </Link> */}
    </div>
  );
}

export default Projects;
