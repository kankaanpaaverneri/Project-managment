
import { useRef, useState } from 'react';
import './App.css';
import Menu from "./components/Menu.jsx";
import NoProjectSelected from './components/NoProjectSelected.jsx';
import CreateProject from './components/CreateProject.jsx';
import EditProject from './components/EditProject.jsx';

function App() {
  //Array of all the projects
  const [projects, setProjects] = useState([]);

  //Id of the selected project
  const [selectedProject, setSelectedProject] = useState(0);

  //Displays the window that is true
  const [displayWindow, setDisplayWindow] = useState({
    noProjectSelected: true,
    createProject: false,
    editProject: false,
  });


  const taskRef = useRef();

  function addTask() {
    setProjects(prevProjects => {
      console.log("Setting projects: ", prevProjects);
      const updatedProjects = [...prevProjects];
      updatedProjects[selectedProject - 1].tasks.push(taskRef.current.value);
      return updatedProjects;
    })
  }

  function clearTask(index) {
    setProjects((prevProjects => {
      prevProjects[selectedProject - 1].tasks.splice(index, 1);
      return [...prevProjects];
    }));
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

  function deleteProject(id) {
    setProjects(prevProjects => {
      prevProjects.splice(id - 1, 1);
      return [...prevProjects];
    })
    setSelectedProject(() => 0);
    setDisplayWindow(() => {
      return {
        noProjectSelected: true,
        createProject: false,
        editProject: false
      };
    });
  }

  function saveChanges(id, title, description, date) {
    setProjects((prevProjects) => {
      console.log(prevProjects[id - 1]);
      prevProjects[id - 1].title = title === "" ? prevProjects[id - 1].title : title;
      prevProjects[id - 1].description = description === "" ? prevProjects[id - 1].description : description;
      prevProjects[id - 1].date = date == "" ? prevProjects[id - 1].date : date;
      return prevProjects;
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
        {displayWindow.editProject && <EditProject
          projectSelected={projects[selectedProject - 1]}
          deleteProject={deleteProject}
          saveChanges={saveChanges}
          addTask={addTask}
          clearTask={clearTask}
          ref={taskRef} />}
        {displayWindow.createProject && <CreateProject
          createNewProject={createNewProject}
          setDisplayWindow={setDisplayWindow} />}
        {displayWindow.noProjectSelected && <NoProjectSelected
          setDisplayWindow={setDisplayWindow} />}
      </div>
    </>
  )
}

export default App;
