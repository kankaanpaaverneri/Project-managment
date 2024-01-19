
import { useRef, useState } from 'react';
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
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(0);

  //If true displays createNewProject component
  const [displayWindow, setDisplayWindow] = useState({
    noProjectSelected: true,
    createProject: false,
    editProject: false,
  });

  const taskRef = useRef();

  function addTask() {

    console.log("Add task");

  }

  function createNewProject({ titleData, descriptionData, dateData }) {
    //Create new project
    setProjects(prevProjectsState => {
      const updatedProjectsState = [...prevProjectsState];
      updatedProjectsState.push({
        title: titleData === "" ? "Ei nimeä" : titleData,
        description: descriptionData === "" ? "Ei kuvausta" : descriptionData,
        date: dateData,
        tasks: !prevProjectsState.tasks ? [] : prevProjectsState.tasks,
        id: updatedProjectsState.length === 0 ? 1 : updatedProjectsState[updatedProjectsState.length - 1].id + 1,
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

  function selectProject(id) {
    setSelectedProject(() => id);
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
          selectProject={selectProject}
          setDisplayWindow={setDisplayWindow}
          projects={projects}
        />
        {displayWindow.editProject && <EditProject projectSelected={projects[selectedProject - 1]} addTask={addTask} ref={taskRef} />}
        {displayWindow.createProject && <CreateProject createNewProject={createNewProject} setDisplayWindow={setDisplayWindow} />}
        {displayWindow.noProjectSelected && <NoProjectSelected setDisplayWindow={setDisplayWindow} />}
      </div>
    </>
  )
}

export default App;
