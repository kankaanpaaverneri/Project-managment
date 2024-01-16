import "../index.css";

const EditProject = () => {
    return (
        <>
            <div className="edit-project">
                <div className="header">
                    <h1>Learning React</h1>
                    <p>Dec 29, 2024</p>
                    <p>Learn React from the group up</p>
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
                    <input value={"HOMO"} type="text" />
                    <button>Clear</button>
                </div>
            </div>
        </>
    );
}

export default EditProject;