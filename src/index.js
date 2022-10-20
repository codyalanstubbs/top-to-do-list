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

    let projects = [];
    createProjectsDiv();
    const addProject = (projects) => {
        const projectNameInput = document.querySelector('.newProjectName');
        if (projectNameInput.value == '' || projectNameInput.value == undefined) {
            // Do nothing
        } else {
            const newProject = projectFactory(projectNameInput.value, []);
            projects.push(newProject);

            const projectIndex = projects.length - 1;
            
            const numberOfItems = projects[projectIndex].items.length

            const projectsDiv = document.querySelector('.projects');
            const projectDiv = buildProjectDiv(projectIndex, numberOfItems, projectNameInput.value);

            const toDoItemDiv = buildToDoItemDiv(projectIndex, numberOfItems);
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
        const numberOfTasks = createNumberOfTasks(projectIndex, numberTasks);

        const projectMetaSubDiv = createProjectMetaSubDiv(projectIndex);
        const projectDoor = createProjectDoor(projectIndex);
        const addTasksBtn = createAddTasksBtn(projectIndex);
        const editTitleBtn = createEditTitleBtn(projectIndex);
        const deleteProjectBtn = createDeleteProjectBtn(projectIndex);

        projectMetaSubDiv.appendChild(numberOfTasks);
        projectMetaSubDiv.appendChild(addTasksBtn);
        projectMetaSubDiv.appendChild(editTitleBtn);
        projectMetaSubDiv.appendChild(deleteProjectBtn);
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
        
        if (numberTasks === 0 || numberTasks === 1) {
            numberOfTasks.textContent = "1 task";
        } else {
            numberOfTasks.textContent = numberTasks + " tasks";
        }

        return numberOfTasks;
    } 

    const createAddTasksBtn = (projectIndex) => {
        const addTasksBtn = document.createElement("div");
        addTasksBtn.setAttribute("id", projectIndex);
        addTasksBtn.classList = "addTask";
        addTasksBtn.textContent = "Add Task";

        return addTasksBtn;
    }

    const createEditTitleBtn = (projectIndex) => {
        const editTitleBtn = document.createElement("div");
        editTitleBtn.setAttribute("id", projectIndex);
        editTitleBtn.classList = "editTitle";
        editTitleBtn.textContent = "Edit Title";

        return editTitleBtn;
    }

    const resetProjectIds = (deletedProjectIndex, projectsArray) => {
        const newProjectsLength = projectsArray.length - 1;


        let nextProjIndex = deletedProjectIndex + 1;

        for (nextProjIndex; nextProjIndex <= newProjectsLength; nextProjIndex++) {
            const nextProject = document.querySelector(`#\\3${nextProjIndex}.project`);
            nextProject.id = nextProjIndex - 1;
            resetTaskIds(nextProject, nextProjIndex)
        }
    }

    const resetTaskIds = (projectElement, projectIndex) => {
        projectElement.childNodes.forEach((child) => {
            let taskIndex = child.id.split()[1];
            child.id = projectIndex+"-"+taskIndex;
        })
    }

    const deleteProject = (projectIndex, projectsArray) => {
        projectsArray.splice(projectIndex, 1);
        document.querySelector(`#\\3${projectIndex}.project`).remove();
    }

    const createDeleteProjectBtn = (projectIndex) => {
        const deleteProjectBtn = document.createElement("div");
        deleteProjectBtn.setAttribute("id", projectIndex);
        deleteProjectBtn.classList = "deleteProject";
        deleteProjectBtn.textContent = "Delete Project";

        deleteProjectBtn.addEventListener('click', (e) => {
            const response = confirm("Are you Ok with deleting this entire project?");
            if (response === true) {
                resetProjectIds(projectIndex, projects);
                deleteProject(projectIndex, projects);
            }
        })
        
        return deleteProjectBtn;
    }

    const createProjectDoor = (projectIndex) => {
        const projectDoor = document.createElement("div");
        projectDoor.setAttribute("id", projectIndex);
        projectDoor.classList = "projectDoor opened";
        projectDoor.textContent = "▲";

        return projectDoor;
    } 

    const createNotesInput = (projectIndex, taskIndex) => {
        const notes = document.createElement("input");
        notes.setAttribute("id", projectIndex+"-"+taskIndex);
        notes.classList = "notes";
        notes.placeholder = "Enter any additional notes here";

        return notes;
    }

    const createDescriptionInput = (projectIndex, taskIndex) => {
        const description = document.createElement("input");
        description.setAttribute("id", projectIndex+"-"+taskIndex);
        description.classList = "description";
        description.placeholder = "Enter a description here";
        
        return description;
    }

    const createTitleInput = (projectIndex, taskIndex) => {
        const title = document.createElement("input");
        title.setAttribute("id", projectIndex+"-"+taskIndex);
        title.classList = "title";
        title.placeholder = "Enter the task's title here";

        return title;
    }

    const buildToDoItemsDiv = (projectIndex, toDoItemDiv) => {
        const toDoItemsDiv = createToDoItemsDiv(projectIndex);

        toDoItemsDiv.appendChild(toDoItemDiv);

        return toDoItemsDiv;
    }

    const buildToDoItemDiv = (projectIndex, taskIndex) => {
        const titleInput = createTitleInput(projectIndex, taskIndex);
        const completeDataDiv = buildCompleteDataDiv(projectIndex, taskIndex);
        const descriptionInput = createDescriptionInput(projectIndex, taskIndex);
        const notesInput = createNotesInput(projectIndex, taskIndex);
    
        const toDoItemDiv = createToDoItemDiv(projectIndex, taskIndex);
        
        toDoItemDiv.appendChild(titleInput);
        toDoItemDiv.appendChild(completeDataDiv);
        toDoItemDiv.appendChild(descriptionInput);
        toDoItemDiv.appendChild(notesInput);

        return toDoItemDiv;
    }

    const buildCompleteDataDiv = (projectIndex, taskIndex) => {
        const completeDataDiv = createCompleteDataDiv(projectIndex, taskIndex);
        const dueDateInput = createDueDateInput(projectIndex, taskIndex);
        const taskDoor = createTaskDoor(projectIndex, taskIndex);
        const completeDiv = createCompleteDiv(projectIndex, taskIndex);
        const editDiv = createSubmitTaskDiv(projectIndex, taskIndex);
        const deleteDiv = createDeleteTaskDiv(projectIndex, taskIndex);

        completeDataDiv.appendChild(dueDateInput);
        completeDataDiv.appendChild(taskDoor);
        completeDataDiv.appendChild(completeDiv);
        completeDataDiv.appendChild(editDiv);
        completeDataDiv.appendChild(deleteDiv);

        return completeDataDiv;
    }

    const createCompleteDataDiv = (projectIndex, taskIndex) => {
        const completeDataDiv = document.createElement("div");
        completeDataDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        completeDataDiv.classList = "completeData";

        return completeDataDiv;
    }

    const createDueDateInput = (projectIndex, taskIndex) => {
        const dueDateLabel = document.createElement("label");
        dueDateLabel.setAttribute("for", "dueDate");
        dueDateLabel.textContent = "Due Date: "

        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.setAttribute("id", projectIndex+"-"+taskIndex);
        dueDateInput.setAttribute("name", "dueDate");
        dueDateInput.classList = "dueDate";

        dueDateLabel.appendChild(dueDateInput);

        return dueDateLabel;
    }

    const createTaskDoor = (projectIndex, taskIndex) => {
        const taskDoor = document.createElement("div");
        taskDoor.setAttribute("id", projectIndex+"-"+taskIndex);
        taskDoor.classList = "taskDoor opened";
        taskDoor.textContent = "▼";

        return taskDoor;
    } 

    const createCompleteDiv = (projectIndex, taskIndex) => {
        const completeDiv = document.createElement("div");
        completeDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        completeDiv.textContent = "Not Complete";
        completeDiv.classList = "not complete";

        return completeDiv;
    }

    const createSubmitTaskDiv = (projectIndex, taskIndex) => {
        const submitTaskDiv = document.createElement("div");
        submitTaskDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        submitTaskDiv.classList = "edit submit";
        submitTaskDiv.textContent = "Sumbit Task";

        return submitTaskDiv;
    }

    const createDeleteTaskDiv = (projectIndex, taskIndex) => {
        const deleteTaskDiv = document.createElement("div");
        deleteTaskDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        deleteTaskDiv.classList = "deleteTask";
        deleteTaskDiv.textContent = "Delete Task";

        return deleteTaskDiv;
    }

    const createToDoItemDiv = (projectIndex, taskIndex) => {
        const toDoItemDiv = document.createElement("div");
        toDoItemDiv.setAttribute("id", projectIndex+"-"+taskIndex);
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
            addProject(projects);
        });

        return addProjectBtn;
    }

    buildProjectNameInput();

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