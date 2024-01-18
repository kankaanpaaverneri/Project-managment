import "../index.css";


const NoProjectSelected = ({ setDisplayWindow }) => {
    return (
        <div className="no-project-selected">
            <h1>No project selected</h1>
            <h2>Select a project or get started with a new one.</h2>
            <button onClick={() => setDisplayWindow(() => {
                return {
                    noProjectSelected: false,
                    createProject: true,
                    editProject: false
                };
            })}>Create new project</button>
        </div>
    );
}

export default NoProjectSelected;