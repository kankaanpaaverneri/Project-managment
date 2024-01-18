
import { useState } from 'react';
import './App.css';
import Menu from "./components/Menu.jsx";
import NoProjectSelected from './components/NoProjectSelected.jsx';
import CreateProject from './components/CreateProject.jsx';
import EditProject from './components/EditProject.jsx';

//Helper functions
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function App() {
  //Array of all the projects
  const [projects, setProjects] = useState([
    { title: "Sieni", description: "Putki on putki", date: "2024-01-15", tasks: [], id: 1 },
  ]);
  //Holds information about the current project that was selected (right now set to boolean)
  const [projectSelected, setProjectSelected] = useState({});

  //If true displays createNewProject component
  const [displayWindow, setDisplayWindow] = useState({
    noProjectSelected: true,
    createProject: false,
    editProject: false,
  });

  function createNewProject({ titleData, descriptionData, dateData }) {
    //Deselect current project
    setProjectSelected(() => { return {}; });
    //Create new project
    setProjects(prevProjectsState => {
      const updatedProjectsState = [...prevProjectsState];
      updatedProjectsState.push({
        title: titleData === "" ? "Ei nimeä" : titleData,
        description: descriptionData === "" ? "Ei kuvausta" : descriptionData,
        date: dateData,
        tasks: [],
        id: updatedProjectsState[updatedProjectsState.length - 1].id + 1,
      });
      return updatedProjectsState;
    });

    setDisplayWindow(() => {
      return {
        noProjectSelected: true,
        createProject: false,
        editProject: false
      };
    })

    //
  }

  function editSelectedProject(title, description, date, id) {
    setProjectSelected((prevProjectSelected) => {
      return {
        title: title,
        description: description,
        date: date,
        tasks: isEmptyObject(prevProjectSelected) ? [] : prevProjectSelected.tasks,
        id: id
      };
    });

    setDisplayWindow(() => {
      return {
        noProjectSelected: false,
        createProject: false,
        editProject: true,
      }
    });
  }

  return (
    <>
      <div className='app'>
        <Menu
          editSelectedProject={editSelectedProject}
          setDisplayWindow={setDisplayWindow}
          projects={projects}
        />
        {displayWindow.editProject && <EditProject projectSelected={projectSelected} />}
        {displayWindow.createProject && <CreateProject createNewProject={createNewProject} setDisplayWindow={setDisplayWindow} />}
        {displayWindow.noProjectSelected && <NoProjectSelected setDisplayWindow={setDisplayWindow} />}
      </div>
    </>
  )
}

export default App;
