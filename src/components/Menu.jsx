import '../index.css';

const Menu = ({ displaySelectedProject, setDisplayCreateNewProject, projects }) => {
    return (
        <div className='menu'>
            <h1>Your Projects</h1>
            <button onClick={() => setDisplayCreateNewProject(true)}>+ Add project</button>
            <div className='project-list'>
                {projects.map(project => {
                    return <button
                        key={project.id}
                        onClick={() => displaySelectedProject(project.title, project.description, project.date, project.id)}
                    >{project.title}</button>
                })}
            </div>
        </div>
    );
}

export default Menu;