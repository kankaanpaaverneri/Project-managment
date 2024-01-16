
import { useState } from 'react';
import './App.css';
import Menu from "./components/Menu.jsx";
import NoProjectSelected from './components/NoProjectSelected.jsx';
import CreateProject from './components/CreateProject.jsx';
import EditProject from './components/EditProject.jsx';



function App() {
  //Array of all the projects
  const [projects, setProjects] = useState([
    { title: "Sieni", description: "Putki on putki", date: "2024-01-15", id: 1 },
  ]);
  //Holds information about the current project that was selected (right now set to boolean)
  const [projectSelected, setProjectSelected] = useState(false);

  //If true displays createNewProject component
  const [displayCreateNewProject, setDisplayCreateNewProject] = useState(false);

  function createNewProject({ titleData, descriptionData, dateData }) {
    //Create new project
    setProjects(prevProjectsState => {
      const updatedProjectsState = [...prevProjectsState];
      updatedProjectsState.push({
        title: titleData === "" ? "Ei nimeä" : titleData,
        description: descriptionData === "" ? "Ei kuvausta" : descriptionData,
        date: dateData,
        id: updatedProjectsState[updatedProjectsState.length - 1].id + 1,
      });
      return updatedProjectsState;
    });

    setDisplayCreateNewProject(() => false)

    //
  }

  function displaySelectedProject(title, description, date, id) {
    console.log("Project: ", title);
    console.log("Description: ", description);
    console.log("Date: ", date);
    console.log("ID: ", id);
  }

  return (
    <>
      <div className='app'>
        <Menu
          displaySelectedProject={displaySelectedProject}
          setDisplayCreateNewProject={setDisplayCreateNewProject}
          projects={projects}
        />
        {displayCreateNewProject ?
          <CreateProject
            createNewProject={createNewProject}
            setDisplayCreateNewProject={setDisplayCreateNewProject}
          /> :
          <NoProjectSelected
            setDisplayCreateNewProject={setDisplayCreateNewProject} />}
      </div>
    </>
  )
}

export default App;
