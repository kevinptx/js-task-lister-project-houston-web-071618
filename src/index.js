// TODO: 
  // Validate unique list titles


document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const appContent = document.getElementById("app-content");

    // A user should be able to create a new list.
    //Event Listener added to theform, submit event
      // A list needs a title
      // User will submit a form
          // Take in a list title (input)
          // Create a list in the DOM
    
      const listForm = document.getElementById('create-list-form')
      listForm.addEventListener('submit', createList);

        //A user should be able to add new tasks to a list.
          //Event listener added to the form, submit event
            //prevent default
            //get all the inputs (the dropdown, description, priority)
            //create the task (template or element)
            //add the task to the parent list
        
            appContent.addEventListener('submit', function(event){
              const taskFormIsSubmitted = 
            })

            // A list has many tasks
            // A user should be able to delete a list and its associated tasks

        let listsDiv = document.getElementById('lists')
        const appContent = document.getElementById("app-content");
        const listTitleInput = document.getElementById('new-list-title')
        const listTemplate = `
          <div>
          <h2>${listTitleInput.value}
            <button data-title="${listTitleInput.value}" class="delete-list">
              X
            </button>
          </h2>
          <ul>
          </ul>
        </div>
        `
        const taskFormTemplate = `
        <form id="create-task-form">
          <label for="parent-list">Select List:</label>
          <select id="parent-list"></select>
          <label for="new-task-description">Task description:</label>
          <input required type="text" id="new-task-description" placeholder="description">
          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task">
        </form>
        `

        //we're adding the first list
        if (listsDiv === null){
          listsDiv = document.createElement('div')
          listsDiv.id = 'lists'
          appContent.innerHTML += taskFormTemplate
          appContent.append(listsDiv)
        }

        //adding the option for the list being created to the select/dropdown
        const selectEl = document.getElementById('parent-list')
        const optionEl = document.createElement('option')
        optionEl.value = listTitleInput.value
        optionEl.innerText = listTitleInput.value
        selectEl.append(optionEl)
        
        
        // at this point we have something to attach the list template to
        //attaching the list to the listsDiv
        listsDiv.innerHTML += listTemplate
      })
    // A user should be able to add new tasks to a list.


    // A list has many tasks
    // A user should be able to delete a list and its associated tasks.


  // const app = new TaskLister();
});
