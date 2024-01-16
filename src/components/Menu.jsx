import '../index.css';

const Menu = ({ displaySelectedProject, createNewProject, projects }) => {
    return (
        <div className='menu'>
            <h1>Your Projects</h1>
            <button onClick={() => createNewProject("Menu()")}>+ Add project</button>
            <div className='project-list'>
                {projects.map(project => {
                    return <button
                        key={project.id}
                        onClick={() => displaySelectedProject(project.title)}
                    >{project.title}</button>
                })}
            </div>
        </div>
    );
}

export default Menu;