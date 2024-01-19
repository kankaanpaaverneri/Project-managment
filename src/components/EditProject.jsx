import { useRef, forwardRef, useEffect } from "react";
import "../index.css";

const EditProject = forwardRef(({ projectSelected, deleteProject, addTask, clearTask }, ref) => {
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
                    <button onClick={() => deleteProject(id)} id="delete">Delete</button>
                </div>
            </div>
            <div className="tasks">
                <div>
                    <h1>Tasks</h1>
                </div>
                <div className="add-task">
                    <input ref={ref} type="text" />
                    <button onClick={() => {
                        addTask();
                    }}>Add task</button>
                </div>
                <div className="task-list">
                    {tasks.map((task, index) => {
                        return <div key={index} className="task">
                            <p>{task}</p>
                            <button onClick={() => clearTask(index)}>Clear</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
});

export default EditProject;