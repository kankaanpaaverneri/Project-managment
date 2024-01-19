import { useRef, forwardRef, useEffect, useState } from "react";
import "../index.css";

function isDateFormatCorrect(date) {

    let dateFormatCorrect = false;

    function isNumbers(date, start, end) {
        let startAndEndAreNumbers = false;
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        //yyyy-mm-dd
        //0123456789
        for (let i = start; i <= end; i++) {
            numbers.forEach(number => {
                if (date[i] === number)
                    startAndEndAreNumbers = true;
                return;
            })
        }
        console.log(date, start, end, startAndEndAreNumbers);
        return startAndEndAreNumbers
    }
    if (isNumbers(date, 0, 3) &&
        date[4] === "-" &&
        isNumbers(date, 5, 6) &&
        date[7] === "-" &&
        isNumbers(date, 8, 9)) {
        dateFormatCorrect = true;
    }

    return dateFormatCorrect;
}

function formatDate(date) {
    if (!date || !isDateFormatCorrect(date))
        return date;
    console.log(date);
    const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [year, month, day] = date.split("-");
    const monthText = months[Number(month - 1)].slice(0, 3);
    return `${monthText} ${day}, ${year}`;
}

const EditProject = forwardRef(({ projectSelected, deleteProject, saveChanges, addTask, clearTask }, ref) => {
    const { title, description, date, tasks, id } = projectSelected;
    const [editing, setEditing] = useState(false);

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    return (
        <>
            <div className="edit-project">
                <div className="header">
                    {editing ? <input ref={titleRef} type="text" placeholder="Title" /> : <h1>{title}</h1>}
                    {editing ? <input ref={dateRef} type="text" placeholder="yyyy-mm-dd" /> : <p>{formatDate(date)}</p>}
                    {editing ? <input ref={descriptionRef} type="text" placeholder="Description" /> : <p>{description}</p>}

                </div>
                <div className="options">
                    <button onClick={() => {
                        setEditing((prev) => !prev);
                        if (editing) saveChanges(
                            id,
                            titleRef.current.value,
                            descriptionRef.current.value,
                            dateRef.current.value
                        );
                    }} id="edit-and-save">{editing ? "Save" : "Edit"}</button>
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