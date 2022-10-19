import './style.css';
import {
    format
} from 'date-fns';

(() => {

    const createProjectsDiv = () => {
        const projectsDiv = document.createElement('div');
        projectsDiv.classList = "projects";
        document.body.appendChild(projectsDiv);
    }

    createProjectsDiv();
    const addProject = () => {
        const projectNameInput = document.querySelector('.newProjectName');
        if (projectNameInput.value == '' || projectNameInput.value == undefined) {
            // Do nothing
        } else {
            const newProject = projectFactory(projectNameInput.value, []);
            const projectIndex = projects.push(newProject) - 1;
            const numberOfItems = projects[projectIndex].items.length
            const projectDiv = buildProjectDiv(projectIndex, numberOfItems, projectNameInput.value);
            const projectsDiv = document.querySelector('.projects');
            projectsDiv.insertBefore(projectDiv, projectsDiv.firstChild);
        }
    }
    
    const buildProjectDiv = (projectIndex, numberTasks, projectName) => {
        const projectDiv = createProjectDiv(projectIndex);
        const projectMetaDiv = buildProjectMetaDiv(projectIndex, numberTasks, projectName);

        projectDiv.appendChild(projectMetaDiv);

        return projectDiv;
    }

    const buildProjectMetaDiv = (projectIndex, numberTasks, projectName) => {
        const projectMetaSubDiv = buildMetaSubDiv(projectIndex, numberTasks);
        const projectMetaName = createProjectMetaName(projectIndex, projectName)
        const projectMetaDiv = createProjectMetaDiv(projectIndex);

        projectMetaDiv.appendChild(projectMetaName);
        projectMetaDiv.appendChild(projectMetaSubDiv);

        return projectMetaDiv;
    }

    const buildMetaSubDiv = (projectIndex, numberTasks) => {
        
        let numberOfTasks;
        if (numberTasks === 0) {
            numberOfTasks = createAddTasksBtn(projectIndex);
        } else {
            numberOfTasks = createNumberOfTasks(projectIndex, numberTasks);
        }

        const projectMetaSubDiv = createProjectMetaSubDiv(projectIndex);
        const projectDoor = createProjectDoor(projectIndex);

        projectMetaSubDiv.appendChild(numberOfTasks);
        projectMetaSubDiv.appendChild(projectDoor);

        return projectMetaSubDiv;
    }

    const createProjectDiv = (projectIndex) => {
        const projectDiv = document.createElement("div");
        projectDiv.setAttribute("id", projectIndex);
        projectDiv.classList = "project";

        return projectDiv;
    }

    const createProjectMetaDiv = (projectIndex) => {
        const projectMetaDiv = document.createElement("div");
        projectMetaDiv.setAttribute("id", projectIndex);
        projectMetaDiv.classList = "projectMeta";

        return projectMetaDiv;
    }

    const createProjectMetaName = (projectIndex, projectName) => {
        const projectMetaName = document.createElement("div");
        projectMetaName.setAttribute("id", projectIndex);
        projectMetaName.classList = "projectName";
        projectMetaName.textContent = projectName;

        return projectMetaName;
    }

    const createProjectMetaSubDiv = (projectIndex) => {
        const projectMetaSubDiv = document.createElement("div");
        projectMetaSubDiv.setAttribute("id", projectIndex);
        projectMetaSubDiv.classList = "metaSubDiv";

        return projectMetaSubDiv;
    }

    const createNumberOfTasks = (projectIndex, numberTasks) => {
        const numberOfTasks = document.createElement("div");
        numberOfTasks.setAttribute("id", projectIndex);
        numberOfTasks.classList = "numberOfTasks";
        numberOfTasks.textContent = numberTasks + " tasks";

        return numberOfTasks;
    } 

    const createAddTasksBtn = (projectIndex) => {
        const addTasksBtn = document.createElement("div");
        addTasksBtn.setAttribute("id", projectIndex);
        addTasksBtn.classList = "edit";
        addTasksBtn.textContent = "Add Tasks";

        return addTasksBtn;
    }

    const createProjectDoor = (projectIndex) => {
        const projectDoor = document.createElement("div");
        projectDoor.setAttribute("id", projectIndex);
        projectDoor.classList = "projectDoor opened";
        projectDoor.textContent = "▲";

        return projectDoor;
    } 

    const createProjectInput = () => {
        const projectsDiv = document.querySelector('.projects');

        const projectDiv = document.createElement('div');
        projectDiv.classList = "project";

        const projectNameInput = document.createElement('input');
        projectNameInput.type = "text";
        projectNameInput.classList = "projectMeta newProject newProjectName";
        projectNameInput.placeholder = 'Enter a new project name here and press "Enter"';

        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = "Add Project";

        addProjectBtn.addEventListener('click', (e) => {
            //projects.push(projectNameInput.value);
            addProject();
        });

        projectDiv.appendChild(projectNameInput);
        document.body.appendChild(addProjectBtn);
        projectsDiv.appendChild(projectDiv);
    }

    createProjectInput();

    const projects = [];

    const toDoFactory = (title, dueDate, priority, description, notes) => {
        return {
            title,
            dueDate,
            priority,
            description,
            notes
        };
    };

    const projectFactory = (name, items) => {
        return {
            name,
            items
        };
    };



})()