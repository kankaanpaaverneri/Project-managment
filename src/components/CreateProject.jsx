import { useRef } from "react";
import "../index.css";

const CreateProject = ({ createNewProject, setDisplayCreateNewProject }) => {

    //Refs for holding input values
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    function getProjectData() {
        const projectData = {
            titleData: titleRef.current.value,
            descriptionData: descriptionRef.current.value,
            dateData: dateRef.current.value,
        };

        return projectData;
    }


    return (<div className="create-project">
        <div className="option-buttons">
            <button onClick={() => setDisplayCreateNewProject(false)} id="cancel">Cancel</button>
            <button onClick={() => createNewProject(getProjectData())} id="save">Save</button>
        </div>
        <div className="input-fields">
            <label>Title </label>
            <input ref={titleRef} type="text" />

            <label>Description </label>
            <textarea ref={descriptionRef} />

            <label>Date </label>
            <input ref={dateRef} type="date" />
        </div>
    </div>);
}

export default CreateProject;