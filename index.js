window.addEventListener('load', ()=>{
    const form = document.querySelector('#form');
    const input = document.querySelector('#user-input');
    const list = document.querySelector('#task-list')

   form.addEventListener('submit', (e)=>{
       e.preventDefault();
       const task = input.value;
       
       if (!task)
       {
           alert('Please put in what you have to do :)')
           return;
       }

       const taskDiv = document.createElement('div');
       taskDiv.classList.add('task');

       list.appendChild(taskDiv);

       const checkBox = document.createElement('span');
       checkBox.classList.add('check');
       taskDiv.appendChild(checkBox);

       const taskInput = document.createElement('input');
       taskInput.classList.add('text');
       taskInput.type='text';
       taskInput.value=task;
       taskInput.setAttribute('readonly','readonly');
       taskDiv.appendChild(taskInput);

       const buttonDiv = document.createElement('div');
       buttonDiv.classList.add('inputs');
       taskDiv.appendChild(buttonDiv);

       const editButton = document.createElement('button');
       editButton.innerHTML = 'Edit';
       editButton.classList.add('edit');
       buttonDiv.appendChild(editButton);
       const deleteButton= document.createElement('button');
       deleteButton.innerHTML = 'Delete';
       deleteButton.classList.add('delete')
       
       buttonDiv.appendChild(deleteButton)

       checkBox.addEventListener('click', ()=>{
           checkBox.classList.toggle('checked')
           taskInput.classList.toggle('checked')
           editButton.classList.toggle('checked')
       })

       editButton.addEventListener('click', ()=>{
        if (editButton.innerText.toLowerCase() == 'edit')
        {
        taskInput.removeAttribute('readonly');
        taskInput.focus();
        editButton.innerText = 'Save';
        } else {
            taskInput.setAttribute('readonly','readonly');
            editButton.innerText = 'Edit'
        }
       })

       deleteButton.addEventListener('click', ()=>{
           list.removeChild(taskDiv);
       })
       input.value = "";
    
   })

  
    
})