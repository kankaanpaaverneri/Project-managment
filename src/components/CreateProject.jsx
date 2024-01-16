import "../index.css";

const CreateProject = ({ setProjects }) => {
    //Insert data to projects state array with setProjects function




    return (<div className="create-project">
        <div className="option-buttons">
            <button id="cancel">Cancel</button>
            <button id="save">Save</button>
        </div>
        <div className="input-fields">
            <label>Title </label>
            <input type="text" />

            <label>Description </label>
            <textarea />

            <label>Date </label>
            <input type="date" />
        </div>
    </div>);
}

export default CreateProject;