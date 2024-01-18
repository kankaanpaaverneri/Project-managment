import "../index.css";

const EditProject = ({ projectSelected }) => {
    const { title, description, date, tasks, id } = projectSelected;
    return (
        <>
            <div className="edit-project">
                <div className="header">
                    <h1>{title}</h1>
                    <p>{date}</p>
                    <p>{description}</p>
                </div>
                <div className="options">
                    <button id="edit-and-save">Edit</button>
                    <button id="delete">Delete</button>
                </div>
            </div>
            <div className="tasks">
                <div>
                    <h1>Tasks</h1>
                </div>
                <div className="add-task">
                    <input type="text" />
                    <button>Add task</button>
                </div>
                <div className="task-list">
                    {tasks.map(task => {
                        <div>
                            <input value={task} type="text" />
                            <button>Clear</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default EditProject;