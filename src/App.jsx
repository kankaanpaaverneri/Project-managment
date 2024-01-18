
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
  //Holds information about the current project that was selected (right now set to boolean)
  const [projectSelected, setProjectSelected] = useState({});

  //If true displays createNewProject component
  const [displayWindow, setDisplayWindow] = useState({
    noProjectSelected: true,
    createProject: false,
    editProject: false,
  });

  const taskRef = useRef();

  function addTask() {
    setProjectSelected((prevSelectedProject) => {
      const updatedSelectedProject = {
        title: prevSelectedProject.title,
        description: prevSelectedProject.description,
        date: prevSelectedProject.date,
        tasks: [...prevSelectedProject.tasks],
        id: prevSelectedProject.id,
      };

      updatedSelectedProject.tasks.push(taskRef.current.value);
      return updatedSelectedProject;
    });

    setProjects((prevProjects => {
      const currentProject = projects.find(project => project.id === projectSelected.id);
      currentProject.tasks = projectSelected.tasks;
      const updatedProjects = [...prevProjects];
      updatedProjects[projectSelected.id - 1] = currentProject;
      return updatedProjects;
    }));

  }

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
        tasks: prevProjectsState.tasks,
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
        {displayWindow.editProject && <EditProject projectSelected={projectSelected} addTask={addTask} ref={taskRef} />}
        {displayWindow.createProject && <CreateProject createNewProject={createNewProject} setDisplayWindow={setDisplayWindow} />}
        {displayWindow.noProjectSelected && <NoProjectSelected setDisplayWindow={setDisplayWindow} />}
      </div>
    </>
  )
}

export default App;
