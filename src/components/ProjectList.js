import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) { // receiving a prop of objects to map through
  console.log(projects);
  const ProjectEach =projects.map((proj)=>{
    return( // after mapping passing down the projects to project item to be shown there
    <ProjectItem key={proj.id} technologies={proj.technologies} name={proj.name} about={proj.about}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ProjectEach}
      </div>
     
    </div>
  );
}

export default ProjectList;