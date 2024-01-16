
import { useState } from 'react';
import './App.css';
import Menu from "./components/Menu.jsx";
import NoProjectSelected from './components/NoProjectSelected.jsx';
import CreateProject from './components/CreateProject.jsx';



function App() {
  //Array of all the projects
  const [projects, setProjects] = useState([
    { title: "Sieni", description: "Putki on putki", date: "2024-01-15", id: 1 },
  ]);
  //Holds information about the current project that was selected (right now set to boolean)
  const [projectSelected, setProjectSelected] = useState(false);

  function createNewProject(component) {
    console.log("Create new project called from: ", component);
  }

  function displaySelectedProject(selectedProjectTitle) {
    console.log("Project: ", selectedProjectTitle);
  }

  return (
    <>
      <div className='app'>
        <Menu
          displaySelectedProject={displaySelectedProject}
          createNewProject={createNewProject}
          projects={projects}
        />
        {projectSelected ? <CreateProject setProjects={setProjects} /> : <NoProjectSelected createNewProject={createNewProject} />}
      </div>
    </>
  )
}

export default App;
