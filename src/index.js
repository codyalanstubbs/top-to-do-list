import './style.css';
import {format} from 'date-fns';

(() => {

    const createProjectInput = () => {
        const projectNameInput = document.createElement('input');
        projectNameInput.type = "text";
        projectNameInput.name = "projectName";
        projectNameInput.classList = "projectName";

        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList = "addProject";
        addProjectBtn.textContent = "Add Project";

        addProjectBtn.addEventListener('click', (e) => {
            //projects.push(projectNameInput.value);
            const projectNameInput = document.querySelector('.projectName');
            const newProject = projectFactory(projectNameInput.value, []);
            projects.push(newProject);
            console.log([projects]);
        });
        
        document.body.appendChild(projectNameInput);
        document.body.appendChild(addProjectBtn);
    }

    createProjectInput();

    const projects = [];

    const toDoFactory = (title, dueDate, priority, description, notes) => {
        return { title, dueDate, priority, description, notes };
    };
    
    const projectFactory = (name, items) => {
        return { name, items };
    };
    
    

})()
