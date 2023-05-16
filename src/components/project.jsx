import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '/home/ghislain/0515/web-agency/src/data/projects';

const Project = () => {
  const { WorksClient } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined)

  useEffect(() => {
    const foundProject = projects.find((project) => project.client.toLowerCase() === WorksClient);
    setCurrentProject(foundProject);
  }, [WorksClient])

  if (!currentProject) {
    return <p>Le projet demandé n'existe pas.</p>;
  }

  return (
    <div>
      <h2>{currentProject.client}</h2>
      <h3>{currentProject.title}</h3>
      <p>{currentProject.description}</p>
    </div>
  );
};


export default Project;