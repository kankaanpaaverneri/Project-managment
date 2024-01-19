import '../index.css';
import NoProjectSelected from './NoProjectSelected';

const Menu = ({ selectProject, setDisplayWindow, projects }) => {
    return (
        <div className='menu'>
            <h1>Your Projects</h1>
            <button onClick={() => setDisplayWindow(() => {
                return {
                    noProjectSelected: false,
                    createProject: true,
                    editProject: false
                }
            })}>+ Add project</button>
            <div className='project-list'>
                {projects.map(project => {
                    return <button
                        key={project.id}
                        onClick={() => selectProject(project.id)}
                    >{project.title}</button>
                })}
            </div>
        </div>
    );
}

export default Menu;