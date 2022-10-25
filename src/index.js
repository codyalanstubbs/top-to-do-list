import './style.css';
import {
    add,
    format
} from 'date-fns';

(() => {

    const createProjectsDiv = () => {
        const projectsDiv = document.createElement('div');
        projectsDiv.classList = "projects";
        document.body.appendChild(projectsDiv);
    }

    const addProject = (projects) => {
        const projectNameInput = document.querySelector('.newProjectName');
        if (projectNameInput.value == '' || projectNameInput.value == undefined) {
            // Do nothing
        } else {
            const newProject = projectFactory(projectNameInput.value, []);
            
            projects.push(newProject);
            localStorage.setItem("projects", JSON.stringify(projects));

            const projectIndex = projects.length - 1;
            
            const numberOfItems = projects[projectIndex].items.length

            const projectsDiv = document.querySelector('.projects');
            const projectDiv = buildProjectDiv(projectIndex, numberOfItems, projectNameInput.value);

            
            const toDoItemDiv = buildToDoItemDiv(projectIndex, numberOfItems, "input", "new");
            const toDoItemsDiv = buildToDoItemsDiv(projectIndex, toDoItemDiv);

            projectDiv.appendChild(toDoItemsDiv)

            projectsDiv.insertBefore(projectDiv, projectsDiv.lastChild);
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
        const projectDoor = createProjectDoor(projectIndex, "opened");
        const editTitleBtn = createEditTitleBtn(projectIndex);
        const deleteProjectBtn = createDeleteProjectBtn(projectIndex);

        projectMetaSubDiv.appendChild(numberOfTasks);
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

    const checkRequiredTaskInputs = (projectIndex, taskIndex) => {
        const requiredInputClasses = ['title', 'description', 'priority', 'dueDate'];
        let anyInputsEmpty = false;

        requiredInputClasses.forEach((inputClass) => {
            anyInputsEmpty = checkInputEmpty(projectIndex, taskIndex, inputClass, anyInputsEmpty);
        })

        return anyInputsEmpty;
    } 

    const checkInputEmpty = (projectIndex, taskIndex, inputClass, anyInputsEmpty) => {
        if (inputClass === "priority") {

            if (checkRadioInputsEmpty(projectIndex, taskIndex)) {
                
                const priorityInputs = document.querySelectorAll(`#\\3${projectIndex+"-"+taskIndex}.priority`);
                
                priorityInputs.forEach((priority) => {
                    priority.classList.toggle("incomplete");
                })

                anyInputsEmpty = true;

            }

        } else {

            const inputElement = document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.${inputClass}`);

            if (inputElement.value === '' || inputElement.value === undefined) {
                inputElement.classList.toggle("incomplete");

                anyInputsEmpty = true;
            }

        }

        return anyInputsEmpty;
    }

    const checkRadioInputsEmpty = (projectIndex, taskIndex) => {   
        const priorityRadioInputs = document.querySelectorAll(`#\\3${projectIndex+"-"+taskIndex}.priority`);

        let radioStatus = true; // true means all radios empty

        priorityRadioInputs.forEach((input) => {
            if (input.checked === true) {
                radioStatus = false;
            }
        })     

        return radioStatus;
    }

    const pushTaskInputs = (projectIndex, taskIndex, newOrEdit) => {
        const priorityRadioInputs = document.querySelectorAll(`#\\3${projectIndex+"-"+taskIndex}.priority`);
        let priorityValue;

        priorityRadioInputs.forEach((input) => {
            if (input.checked === true) {
                priorityValue = input.value;
            }
        })

        let numberOfProjectTasks;

        if (newOrEdit === "new") {

            numberOfProjectTasks = projects[projectIndex].items.push(
                toDoFactory(
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.title`).value,
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.dueDate`).value,
                    priorityValue,
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.description`).value,
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.notes`).value,
                    false // project is default "not complete" thus false
                )
            );

        } else if (newOrEdit === "edit") {

            projects[projectIndex].items.splice(taskIndex, 1,
                toDoFactory(
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.title`).value,
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.dueDate`).value,
                    priorityValue,
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.description`).value,
                    document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.notes`).value,
                    false // project is default "not complete" thus false
                )
            );

            numberOfProjectTasks = taskIndex;

        }
        
        return numberOfProjectTasks;

    }

    const removeTaskUI = (projectIndex, taskIndex) => {
        document.querySelector(`#\\3${projectIndex+"-"+taskIndex}.toDoItem.form`).remove();
    }

    const displaySubmittedTask = (projectIndex, taskIndex) => {
        const toDoItemsDiv = document.querySelector(`#\\3${projectIndex}.toDoItems`);
        const toDoItemDiv = buildToDoItemDiv(projectIndex, taskIndex, "div", "new");

        toDoItemsDiv.insertBefore(toDoItemDiv, toDoItemsDiv.lastChild);
    }

    const addNewToDoItem = (projectIndex, addTasksBtn) => {

        const newTaskIndex = document.querySelectorAll(`#\\3${projectIndex}.toDoItems > div.toDoItem.form`).length;
        const newToDoItem = buildToDoItemDiv(projectIndex, newTaskIndex, "input", "new");

        addTasksBtn.before(newToDoItem)
    }
    
    const createAddTasksBtn = (projectIndex) => {
        const addTasksBtn = document.createElement("div");
        addTasksBtn.setAttribute("id", projectIndex);
        addTasksBtn.classList = "addTask toDoItem";
        addTasksBtn.textContent = "Add Task";

        addTasksBtn.addEventListener('click', (e) => {
            addNewToDoItem(projectIndex, addTasksBtn);
        })

        return addTasksBtn;
    }


    const createEditTitleBtn = (projectIndex) => {
        const editTitleBtn = document.createElement("div");
        editTitleBtn.setAttribute("id", projectIndex);
        editTitleBtn.classList = "editTitle";
        editTitleBtn.textContent = "✏️";

        editTitleBtn.addEventListener('click', (e) => {
            editTitleBtnEvents(projectIndex, editTitleBtn);
        } )

        return editTitleBtn;
    }

    const editTitleBtnEvents = (projectIndex, editTitleBtn) => {
        const projectMetaDiv = document.querySelector(`#\\3${projectIndex}.projectMeta`);

        const currentProjectNameDiv = document.querySelector(`#\\3${projectIndex}.projectName`);
        const currentProjectName = projects[projectIndex].name;
        
        const newProjectNameInput = document.createElement('input');
        newProjectNameInput.classList = "projectName";
        newProjectNameInput.value = currentProjectName;

        newProjectNameInput.addEventListener('input', (e) => {
            projects[projectIndex].name = newProjectNameInput.value;
            localStorage.setItem("projects", JSON.stringify(projects));
        })

        newProjectNameInput.addEventListener('focusout', (e) => {
            projects[projectIndex].name = newProjectNameInput.value;
            localStorage.setItem("projects", JSON.stringify(projects));
            
            const newProjectNameDiv = document.createElement('div');
            newProjectNameDiv.id = projectIndex;
            newProjectNameDiv.classList = "projectName";
            newProjectNameDiv.textContent = projects[projectIndex].name;

            newProjectNameInput.remove();
            projectMetaDiv.insertBefore(newProjectNameDiv, projectMetaDiv.firstChild);

            editTitleBtn.addEventListener('click', (e) => {
                editTitleBtnEvents(projectIndex, editTitleBtn);
            } )
            
            localStorage.setItem("projects", JSON.stringify(projects));
        })

        currentProjectNameDiv.remove();
        projectMetaDiv.insertBefore(newProjectNameInput, projectMetaDiv.firstChild);
        newProjectNameInput.focus();
    }

    const resetProjectIds = (deletedProjectIndex, projectsArray) => {
        const newProjectsLength = projectsArray.length - 1;


        let nextProjIndex = deletedProjectIndex + 1;

        for (nextProjIndex; nextProjIndex <= newProjectsLength; nextProjIndex++) {
            const nextProject = document.querySelector(`#\\3${nextProjIndex}.project`);
            nextProject.id = nextProjIndex - 1;
            resetEachTasksProjectId(nextProject, nextProjIndex)
        }
    }

    const resetEachTasksProjectId = (projectElement, projectIndex) => {
        projectElement.childNodes.forEach((child) => {
            let taskIndex = child.id.split()[1];
            child.id = projectIndex+"-"+taskIndex;
        })
    }

    const resetEachTasksTaskId = (projectIndex, taskIndex, elementType) => {
        let taskElements;

        if (elementType === "div") {
            taskElements = document.querySelectorAll(`#\\3${projectIndex}.toDoItems > .toDoItem.display`);
        } else if (elementType === "input") {
            taskElements = document.querySelectorAll(`#\\3${projectIndex}.toDoItems > .toDoItem.form`);
        }
        
        for (taskIndex; taskIndex < taskElements.length; taskIndex++) {
            taskElements.item(taskIndex).id = projectIndex+"-"+taskIndex;
            changeAllDescendents(taskElements.item(taskIndex), projectIndex, taskIndex);
        }
    }

    const changeAllDescendents = (parentElement, projectIndex, taskIndex) => {
        if (parentElement.childNodes.length !== 0) {
            parentElement.childNodes.forEach((childElement) => {
                childElement.id = projectIndex+"-"+taskIndex;
                if (childElement.tagName === "INPUT") {childElement.setAttribute("name", `task-${projectIndex+'-'+taskIndex}-priority`)}
                changeAllDescendents(childElement, projectIndex, taskIndex);
            })
        }
    }

    const deleteProject = (projectIndex, projectsArray) => {
        projectsArray.splice(projectIndex, 1);
        document.querySelector(`#\\3${projectIndex}.project`).remove();
    }

    const createDeleteProjectBtn = (projectIndex) => {
        const deleteProjectBtn = document.createElement("div");
        deleteProjectBtn.setAttribute("id", projectIndex);
        deleteProjectBtn.classList = "deleteProject";
        deleteProjectBtn.textContent = "❌";

        deleteProjectBtn.addEventListener('click', (e) => {
            const response = confirm("Are you Ok with deleting this entire project?");
            if (response === true) {
                resetProjectIds(projectIndex, projects);
                deleteProject(projectIndex, projects);
                localStorage.setItem("projects", JSON.stringify(projects));
            }
        })
        
        return deleteProjectBtn;
    }

    const createProjectDoor = (projectIndex, doorPosition) => {
        const projectDoor = document.createElement("div");
        projectDoor.setAttribute("id", projectIndex);
        projectDoor.classList = `projectDoor ${doorPosition}`;
        
        if (doorPosition === "opened") {
            projectDoor.textContent = "▲";
        } else if (doorPosition === "closed") {
            projectDoor.textContent = "▼";
        }

        projectDoor.addEventListener('click', (e) => {
            const updateProjectIndex = projectDoor.id;
            let newProjectDoor;

            if (doorPosition === "opened") {
                newProjectDoor = createProjectDoor(updateProjectIndex, "closed");
                const toDoItemsDiv = document.querySelector(`#\\3${updateProjectIndex}.toDoItems`); 
                toDoItemsDiv.remove();
            } else if (doorPosition === "closed") {

                newProjectDoor = createProjectDoor(updateProjectIndex, "opened");
                const toDoItemsDiv = createToDoItemsDiv(updateProjectIndex);
                const numberOfTasks = projects[updateProjectIndex].items.length;
                const addTaskBtn = createAddTasksBtn(updateProjectIndex);
                const projectDiv = document.querySelector(`#\\3${updateProjectIndex}.project`);

                for (let i = 0; i < numberOfTasks; i++) {
                    const toDoItemDiv = buildToDoItemDiv(updateProjectIndex, i, "div", "edit");
                    toDoItemsDiv.appendChild(toDoItemDiv);
                }

                toDoItemsDiv.appendChild(addTaskBtn);
                projectDiv.appendChild(toDoItemsDiv);
            }

            projectDoor.before(newProjectDoor);
            projectDoor.remove();
            
        })

        return projectDoor;
    } 

    const addProjectDoorEvents = (projectIndex, projectDoor) => {
        projectDoor.addEventListener('click')
    }

    const closeProjectDoo = (projectIndex, projectDoor) => {

    } 

    const createNotes = (projectIndex, taskIndex, elementType) => {
        if (elementType === "input") {
            return createNotesInput(projectIndex, taskIndex);
        } else if (elementType === "div") {
            return createNotesDiv(projectIndex, taskIndex);
        }
    }    
    
    const createNotesDiv = (projectIndex, taskIndex) => {
        const notesDiv= document.createElement("div");
        notesDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        notesDiv.classList = "notes notInput";
        notesDiv.textContent = projects[projectIndex].items[taskIndex].notes;

        return notesDiv;
    }

    const createNotesInput = (projectIndex, taskIndex) => {
        const notesInput = document.createElement("input");
        notesInput.setAttribute("id", projectIndex+"-"+taskIndex);
        notesInput.classList = "notes";
        notesInput.placeholder = "Enter any additional notes here";

        return notesInput;
    }

    const createDescription = (projectIndex, taskIndex, elementType) => {
        if (elementType === "input") {
            return createDescriptionInput(projectIndex, taskIndex); 
        } else if (elementType === "div") {
            return createDescriptionDiv(projectIndex, taskIndex); 
        }
    }

    const createDescriptionDiv =  (projectIndex, taskIndex) => {
        const description = document.createElement("div");
        description.setAttribute("id", projectIndex+"-"+taskIndex);
        description.classList = "description notInput";
        description.textContent = projects[projectIndex].items[taskIndex].description;

        return description;
    } 

    const createDescriptionInput = (projectIndex, taskIndex) => {
        const description = document.createElement("input");
        description.setAttribute("id", projectIndex+"-"+taskIndex);
        description.classList = "description";
        description.placeholder = "Enter a description here";
        description.required = true;
        
        return description;
    }

    const createTitle = (projectIndex, taskIndex, elementType) => {
        if (elementType === "input") {
            return createTitleInput(projectIndex, taskIndex);
        } else if (elementType === "div") {
            return createTitleDiv(projectIndex, taskIndex);
        }
    }

    const createTitleDiv = (projectIndex, taskIndex) => {
        const title = document.createElement("div");
        title.setAttribute("id", projectIndex+"-"+taskIndex);
        title.classList = "title notInput";
        title.textContent = projects[projectIndex].items[taskIndex].title;

        return title;
    }

    const createTitleInput = (projectIndex, taskIndex) => {
        const title = document.createElement("input");
        title.setAttribute("id", projectIndex+"-"+taskIndex);
        title.classList = "title";
        title.placeholder = "Enter the task's title here";
        title.required = true;

        return title;
    }

    const createPriorityDiv = (projectIndex, taskIndex, elementType) => {
        const priorityDiv = document.createElement("div");
        priorityDiv.classList = "priorities";

        if (elementType === "input") {
            return createPriorityInputs(projectIndex, taskIndex, priorityDiv);
        } else if (elementType === "div") {
            // Do not return anything...the priority level only affects the items background-color
        }
    }

    const createPriorityInputs = (projectIndex, taskIndex, priorityDiv) => {
        const priorityOptions = [[1,"Low"], [2,"Medium"], [3,"High"]];

        priorityDiv.textContent = "Choose a Priority Level: "

        priorityOptions.forEach((priority) => {
            const priorityLabel = document.createElement("label");
            priorityLabel.for = `task-${projectIndex+"-"+taskIndex}-priority`;
            priorityLabel.textContent = priority[1];

            const priorityInput = document.createElement("input");
            priorityInput.type = "radio";
            priorityInput.value = priority[0];
            priorityInput.setAttribute("id", projectIndex+"-"+taskIndex);
            priorityInput.name = `task-${projectIndex+"-"+taskIndex}-priority`;
            priorityInput.classList = "priority";
            priorityInput.required = true;

            priorityDiv.appendChild(priorityInput);
            priorityDiv.appendChild(priorityLabel);

        })

        return priorityDiv;
    }

    const buildToDoItemsDiv = (projectIndex, toDoItemDiv) => {
        const toDoItemsDiv = createToDoItemsDiv(projectIndex);
        const addTasksBtn = createAddTasksBtn(projectIndex);

        toDoItemsDiv.appendChild(toDoItemDiv);
        toDoItemsDiv.appendChild(addTasksBtn);

        return toDoItemsDiv;
    }

    const buildToDoItemDiv = (projectIndex, taskIndex, elementType, newOrEdit) => {
        const title = createTitle(projectIndex, taskIndex, elementType);
        const completeDataDiv = buildCompleteDataDiv(projectIndex, taskIndex, elementType, newOrEdit);
        const description = createDescription(projectIndex, taskIndex, elementType);
        const notes = createNotes(projectIndex, taskIndex, elementType);

        const toDoItem = createToDoItem(projectIndex, taskIndex, elementType);

        toDoItem.appendChild(title);

        if (elementType === "div") {

            const taskDoor = createTaskDoor(projectIndex, taskIndex, "opened");
            completeDataDiv.appendChild(taskDoor);

            if (projects[projectIndex].items[taskIndex].completionStatus === true) {
                toDoItem.classList = `toDoItem display itemComplete`;
            } else if (projects[projectIndex].items[taskIndex].completionStatus === false) {
                toDoItem.classList = `toDoItem display priority-${projects[projectIndex].items[taskIndex].priority}`;
            }

            completeDataDiv.classList = "completeData notInput";
            
            toDoItem.appendChild(completeDataDiv);
            toDoItem.appendChild(description);
            toDoItem.appendChild(notes);

        } else if (elementType === "input") {
    
            toDoItem.appendChild(description);
            toDoItem.appendChild(notes);
            toDoItem.appendChild(completeDataDiv);
        }


        return toDoItem;
    }

    const buildCompleteDataDiv = (projectIndex, taskIndex, elementType, newOrEdit) => {
        const completeDataDiv = createCompleteDataDiv(projectIndex, taskIndex);
        const dueDate = createTaskDueDate(projectIndex, taskIndex, elementType);
        const submitEditTask = createSubmitEditTask(projectIndex, taskIndex, elementType, newOrEdit);
        const deleteDiv = createDeleteTaskDiv(projectIndex, taskIndex, elementType);

        if (elementType === "input") {
            const priorityDiv = createPriorityDiv(projectIndex, taskIndex, elementType);

            completeDataDiv.appendChild(priorityDiv);
            completeDataDiv.appendChild(dueDate);
        } else if (elementType === "div") {
            const completeDiv = createCompleteDiv(projectIndex, taskIndex);

            completeDataDiv.appendChild(dueDate);
            completeDataDiv.appendChild(completeDiv);
        }

        completeDataDiv.appendChild(submitEditTask);
        completeDataDiv.appendChild(deleteDiv);

        return completeDataDiv;
    }

    const createCompleteDataDiv = (projectIndex, taskIndex) => {
        const completeDataDiv = document.createElement("div");
        completeDataDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        completeDataDiv.classList = "completeData";

        return completeDataDiv;
    }

    const createTaskDueDate = (projectIndex, taskIndex, elementType) => {
        if (elementType === "input") {
            return createTaskDueDateInput(projectIndex, taskIndex);
        } else if (elementType === "div") {
            return createTaskDueDateDiv(projectIndex, taskIndex);
        }
    }

    const createTaskDueDateInput = (projectIndex, taskIndex) => {
        const dueDateLabel = document.createElement("label");
        dueDateLabel.setAttribute("for", "dueDate");
        dueDateLabel.textContent = "Due Date: "
        
        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.setAttribute("name", "dueDate");

        dueDateInput.setAttribute("id", projectIndex+"-"+taskIndex);
        dueDateInput.classList = "dueDate";
        dueDateInput.required = true;

        dueDateLabel.appendChild(dueDateInput);

        return dueDateLabel;
    }

    const createTaskDueDateDiv = (projectIndex, taskIndex) => {
        const dueDateDiv = document.createElement("div");
        dueDateDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        dueDateDiv.classList = "dueDate";
        dueDateDiv.textContent = "Due: " + projects[projectIndex].items[taskIndex].dueDate;

        return dueDateDiv;
    }

    const createTaskDoor = (projectIndex, taskIndex, doorPosition) => {
        const taskDoor = document.createElement("div");
        taskDoor.setAttribute("id", projectIndex+"-"+taskIndex);
        taskDoor.classList = `taskDoor ${doorPosition}`;

        if (doorPosition === "opened") {
            taskDoor.textContent = "▲";
        } else if (doorPosition === "closed") {
            taskDoor.textContent = "▼";
        }

        taskDoor.addEventListener('click', (e) => {
            const updateProjectIndex = taskDoor.id.split("-")[0];
            const updateTaskIndex = taskDoor.id.split("-")[1];

            let newTaskDoor;

            if (doorPosition === "opened") {

                newTaskDoor = createTaskDoor(updateProjectIndex, updateTaskIndex, "closed");
                
                const description = document.querySelector(`#\\3${updateProjectIndex+"-"+updateTaskIndex}.description`); 
                const notes = document.querySelector(`#\\3${updateProjectIndex+"-"+updateTaskIndex}.notes`);

                description.remove();
                notes.remove();

            } else if (doorPosition === "closed") {

                newTaskDoor = createTaskDoor(updateProjectIndex, updateTaskIndex, "opened");

                const description = createDescription(updateProjectIndex, updateTaskIndex, "div");
                const notes = createNotes(updateProjectIndex, updateTaskIndex, "div");

                const toDoItem = document.querySelector(`#\\3${updateProjectIndex+"-"+updateTaskIndex}.toDoItem.display`);
                toDoItem.appendChild(description);
                toDoItem.appendChild(notes);
            }

            taskDoor.before(newTaskDoor);
            taskDoor.remove();
            
        })

        return taskDoor;
    } 

    const createCompleteDiv = (projectIndex, taskIndex) => {
        const completeDiv = document.createElement("div");
        completeDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        completeDiv.textContent = "✔️";

        if (projects[projectIndex].items[taskIndex].completionStatus === true) {
            completeDiv.classList = "complete";
        } else if (projects[projectIndex].items[taskIndex].completionStatus === false) {
            completeDiv.classList = "not complete";
        }

        completeDiv.addEventListener('click', (e) => {
            const updateProjectIndex = completeDiv.id.split("-")[0];
            const updateTaskIndex = completeDiv.id.split("-")[1];

            toggleCompletionStatus(updateProjectIndex, updateTaskIndex, completeDiv);
        })

        return completeDiv;
    }

    const toggleCompletionStatus = (projectIndex, taskIndex, completeDiv) => {
        completeDiv.classList.toggle("not");

        const toDoItemDiv = document.querySelector(`#\\3${projectIndex+'-'+taskIndex}.toDoItem.display`);

        if (projects[projectIndex].items[taskIndex].completionStatus === false) {
            projects[projectIndex].items[taskIndex].completionStatus = true; 
            toDoItemDiv.classList = "toDoItem display itemComplete";
        } else if (projects[projectIndex].items[taskIndex].completionStatus === true) {
            projects[projectIndex].items[taskIndex].completionStatus = false; 
            toDoItemDiv.classList = "toDoItem display priority-" + projects[projectIndex].items[taskIndex].priority;
        } 
        console.log(projects[projectIndex].items[taskIndex].completionStatus);
        localStorage.setItem("projects", JSON.stringify(projects));
    }

    const createSubmitEditTask = (projectIndex, taskIndex, elementType, newOrEdit) => {
        if (elementType === "input") {
            return createSubmitTaskDiv(projectIndex, taskIndex, newOrEdit);
        } else if (elementType === "div") {
            return createEditTaskDiv(projectIndex, taskIndex);
        }
    }    
    
    const createEditTaskDiv = (projectIndex, taskIndex) => {
        const editTaskDiv = document.createElement("div");
        editTaskDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        editTaskDiv.classList = "edit";
        editTaskDiv.textContent = "✏️";

        editTaskDiv.addEventListener('click', (e) => {
            const updateProjectIndex = editTaskDiv.id.split("-")[0];
            const updateTaskIndex = editTaskDiv.id.split("-")[1];

            addEditTaskEvents(updateProjectIndex, updateTaskIndex, editTaskDiv);
            
            localStorage.setItem("projects", JSON.stringify(projects));
        });

        return editTaskDiv;
    }

    const addEditTaskEvents = (projectIndex, taskIndex, editTaskDiv) => {
        const toDoItemDiv = document.querySelector(`#\\3${projectIndex+'-'+taskIndex}.toDoItem.display`);
        const toDoItemsDiv = toDoItemDiv.parentNode;
        const toDoItemInput = buildToDoItemDiv(projectIndex, taskIndex, "input", "edit");

        toDoItemsDiv.insertBefore(toDoItemInput, toDoItemDiv);
        toDoItemDiv.remove();

        addValuesToTaskInputs(projectIndex, taskIndex);
    }

    const addValuesToTaskInputs = (projectIndex, taskIndex) => {
        document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.title`).value = projects[projectIndex].items[taskIndex].title;
        document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.dueDate`).value = projects[projectIndex].items[taskIndex].dueDate;
        document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.priority[value="${projects[projectIndex].items[taskIndex].priority}"]`).checked = true; 
        document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.description`).value = projects[projectIndex].items[taskIndex].description;
        document.querySelector(`input#\\3${projectIndex+"-"+taskIndex}.notes`).value = projects[projectIndex].items[taskIndex].notes;
    }
    
    const createSubmitTaskDiv = (projectIndex, taskIndex, newOrEdit) => {
        const submitTaskDiv = document.createElement("button");
        submitTaskDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        submitTaskDiv.classList = "edit submit";

        if (newOrEdit === "new") {
            submitTaskDiv.textContent = "Sumbit Task";
        } else if (newOrEdit === "edit") {
            submitTaskDiv.textContent = "Submit Edits";
        }

        addSubmitTaskEvents(projectIndex, taskIndex, submitTaskDiv, newOrEdit);

        return submitTaskDiv;
    }

    const addSubmitTaskEvents = (projectIndex, taskIndex, submitTaskDiv, newOrEdit) => {
        submitTaskDiv.addEventListener('click', (e) => {
            if (checkRequiredTaskInputs(projectIndex, taskIndex)) {
                // Do not submit data because there is a required input empty
            } else {
                const numberOfProjectTasks = pushTaskInputs(projectIndex, taskIndex, newOrEdit); 

                localStorage.setItem("projects", JSON.stringify(projects));

                removeTaskUI(projectIndex, taskIndex); 

                if (newOrEdit === "new" ) {
                    displaySubmittedTask(projectIndex, numberOfProjectTasks - 1);
                } else if (newOrEdit === "edit") {
                    displaySubmittedTask(projectIndex, taskIndex);
                }
                
                resetNumberOfTasksDiv(projectIndex);
            }
        })
    }

    const createDeleteTaskDiv = (projectIndex, taskIndex, elementType) => {
        const deleteTaskDiv = document.createElement("div");
        deleteTaskDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        deleteTaskDiv.classList = "deleteTask";
        deleteTaskDiv.textContent = "❌";

        deleteTaskDiv.addEventListener('click', (e) => {
            const updateProjectIndex = deleteTaskDiv.id.split('-')[0];
            const updateTaskIndex = deleteTaskDiv.id.split('-')[1];
            deleteTask(updateProjectIndex, updateTaskIndex, elementType);
            localStorage.setItem("projects", JSON.stringify(projects));
            resetEachTasksTaskId(updateProjectIndex, updateTaskIndex, elementType);
            resetNumberOfTasksDiv(updateProjectIndex);
        });

        return deleteTaskDiv;
    }

    const resetNumberOfTasksDiv = (projectIndex) => {
        const numberOfTasksDiv = document.querySelector(`#\\3${projectIndex}.numberOfTasks`);
        const numberOfTasks = projects[projectIndex].items.length;
        if (numberOfTasks === 1) {
            numberOfTasksDiv.textContent = numberOfTasks + " task";
        } else {
            numberOfTasksDiv.textContent = numberOfTasks + " task";
        }
    }

    const deleteTask = (projectIndex, taskIndex, elementType) => {
        
        let toDoItem;

        if (elementType === "input") {
            toDoItem = document.querySelector(`#\\3${projectIndex+"-"+taskIndex}.toDoItem.form`);
        } else if (elementType === "div") {
            toDoItem = document.querySelector(`#\\3${projectIndex+"-"+taskIndex}.toDoItem.display`);
        }

        if (projects[projectIndex].items[taskIndex]) {
            projects[projectIndex].items.splice(taskIndex, 1);
        }

        toDoItem.remove();
    }

    const createToDoItem = (projectIndex, taskIndex, elementType) => {
        if (elementType === "input") {
            return createToDoItemForm(projectIndex, taskIndex);
        } else if (elementType === "div") {
            return createToDoItemDiv(projectIndex, taskIndex);
        }
    }

    const createToDoItemDiv = (projectIndex, taskIndex) => {
        const toDoItemDiv = document.createElement("div");
        toDoItemDiv.setAttribute("id", projectIndex+"-"+taskIndex);
        toDoItemDiv.classList = "toDoItem display";

        return toDoItemDiv;
    }

    const createToDoItemForm = (projectIndex, taskIndex) => {
        const toDoItemForm = document.createElement("div");
        toDoItemForm.setAttribute("id", projectIndex+"-"+taskIndex);
        toDoItemForm.classList = "toDoItem form";

        return toDoItemForm;
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

    const toDoFactory = (title, dueDate, priority, description, notes, completionStatus) => {
        return {
            title,
            dueDate,
            priority,
            description,
            notes,
            completionStatus
        };
    };

    const projectFactory = (name, items) => {
        return {
            name,
            items
        };
    };

    createProjectsDiv();
    buildProjectNameInput();

    let projects = [];
    if (localStorage.getItem("projects")) {
        projects = JSON.parse(localStorage.projects);

        console.log(projects);

        const projectsDiv = document.querySelector(".projects");

        projects.forEach((project, projectIndex) => {
            
            const projectDiv = buildProjectDiv(projectIndex, project.items.length, project.name);
            const toDoItemsDiv = createToDoItemsDiv(projectIndex);

            project.items.forEach((task, taskIndex) => {
                const toDoItem = buildToDoItemDiv(projectIndex, taskIndex, "div", "new");
                toDoItemsDiv.appendChild(toDoItem);
            })

            projectDiv.appendChild(toDoItemsDiv);
            projectsDiv.insertBefore(projectDiv, projectsDiv.lastChild);
        })

    } else {
        
    }
})()