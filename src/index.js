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
            console.log(projectIndex);
            const numberOfItems = projects[projectIndex].items.length

            const projectsDiv = document.querySelector('.projects');
            const projectDiv = buildProjectDiv(projectIndex, numberOfItems, projectNameInput.value);

            const toDoItemDiv = buildToDoItemDiv(projectIndex);
            const toDoItemsDiv = buildToDoItemsDiv(projectIndex, toDoItemDiv);

            projectDiv.appendChild(toDoItemsDiv)

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

    const createNotesInput = (projectIndex) => {
        const notes = document.createElement("input");
        notes.setAttribute("id", projectIndex);
        notes.classList = "notes";
        notes.placeholder = "Enter any additional notes here";

        return notes;
    }

    const createDescriptionInput = (projectIndex) => {
        const description = document.createElement("input");
        description.setAttribute("id", projectIndex);
        description.classList = "description";
        description.placeholder = "Enter a description here";
        
        return description;
    }

    const createTitleInput = (projectIndex) => {
        const title = document.createElement("input");
        title.setAttribute("id", projectIndex);
        title.classList = "title";
        title.placeholder = "Enter the task's title here";

        return title;
    }

    const buildToDoItemsDiv = (projectIndex, toDoItemDiv) => {
        const toDoItemsDiv = createToDoItemsDiv(projectIndex);

        toDoItemsDiv.appendChild(toDoItemDiv);

        return toDoItemsDiv;
    }

    const buildToDoItemDiv = (projectIndex) => {
        const titleInput = createTitleInput(projectIndex);
        const completeDataDiv = buildCompleteDataDiv(projectIndex);
        const descriptionInput = createDescriptionInput(projectIndex);
        const notesInput = createNotesInput(projectIndex);
    
        const toDoItemDiv = createToDoItemDiv(projectIndex);
        
        toDoItemDiv.appendChild(titleInput);
        toDoItemDiv.appendChild(completeDataDiv);
        toDoItemDiv.appendChild(descriptionInput);
        toDoItemDiv.appendChild(notesInput);

        return toDoItemDiv;
    }

    const buildCompleteDataDiv = (projectIndex) => {
        const completeDataDiv = createCompleteDataDiv(projectIndex);
        const dueDateInput = createDueDateInput(projectIndex);
        const taskDoor = createTaskDoor(projectIndex);
        const completeDiv = createCompleteDiv(projectIndex);
        const editDiv = createSubmitTaskDiv(projectIndex)

        completeDataDiv.appendChild(dueDateInput);
        completeDataDiv.appendChild(taskDoor);
        completeDataDiv.appendChild(completeDiv);
        completeDataDiv.appendChild(editDiv);

        return completeDataDiv;
    }

    const createCompleteDataDiv = (projectIndex) => {
        const completeDataDiv = document.createElement("div");
        completeDataDiv.setAttribute("id", projectIndex);
        completeDataDiv.classList = "completeData";

        return completeDataDiv;
    }

    const createDueDateInput = (projectIndex) => {
        const dueDateLabel = document.createElement("label");
        dueDateLabel.setAttribute("for", "dueDate");
        dueDateLabel.textContent = "Due Date: "

        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.setAttribute("id", projectIndex);
        dueDateInput.setAttribute("name", projectIndex);
        dueDateInput.classList = "dueDate";

        dueDateLabel.appendChild(dueDateInput);

        return dueDateLabel;
    }

    const createTaskDoor = (projectIndex) => {
        const taskDoor = document.createElement("div");
        taskDoor.setAttribute("id", projectIndex);
        taskDoor.classList = "taskDoor opened";
        taskDoor.textContent = "▼";

        return taskDoor;
    } 

    const createCompleteDiv = (projectIndex) => {
        const completeDiv = document.createElement("div");
        completeDiv.setAttribute("id", projectIndex);
        completeDiv.textContent = "Not Complete";
        completeDiv.classList = "not complete";

        return completeDiv;
    }

    const createSubmitTaskDiv = (projectIndex) => {
        const submitTaskDiv = document.createElement("div");
        submitTaskDiv.setAttribute("id", projectIndex);
        submitTaskDiv.classList = "edit submit";
        submitTaskDiv.textContent = "Sumbit Task";


        return submitTaskDiv;
    }

    const createToDoItemDiv = (projectIndex) => {
        const toDoItemDiv = document.createElement("div");
        toDoItemDiv.setAttribute("id", projectIndex);
        toDoItemDiv.classList = "toDoItem";

        return toDoItemDiv;
    }

    const createToDoItemsDiv = (projectIndex) => {
        const toDoItemsDiv = document.createElement("div");
        toDoItemsDiv.setAttribute("id", projectIndex);
        toDoItemsDiv.classList = "toDoItems";

        return toDoItemsDiv;
    }

    const buildProjectNameInput = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectDiv = createProjectDiv();
        const projectNameInput = createProjectNameInput();
        const addProjectBtn = createProjectInputBtn();
        

        projectDiv.appendChild(projectNameInput);
        document.body.appendChild(addProjectBtn);
        projectsDiv.appendChild(projectDiv);
    }

    const createProjectNameInput = () => {
        const projectNameInput = document.createElement('input');
        projectNameInput.type = "text";
        projectNameInput.classList = "projectMeta newProject newProjectName";
        projectNameInput.placeholder = 'Enter a new project name here and press "Enter"';

        return projectNameInput;
    }

    const createProjectInputBtn = () => {
        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = "Add Project";

        addProjectBtn.addEventListener('click', (e) => {
            //projects.push(projectNameInput.value);
            addProject();
        });

        return addProjectBtn;
    }

    buildProjectNameInput();

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