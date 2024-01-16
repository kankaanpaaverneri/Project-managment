import "../index.css";


const NoProjectSelected = ({ createNewProject }) => {
    return (
        <div className="no-project-selected">
            <h1>No project selected</h1>
            <h2>Select a project or get started with a new one.</h2>
            <button onClick={() => createNewProject("NoProjectSelected()")}>Create new project</button>
        </div>
    );
}

export default NoProjectSelected;