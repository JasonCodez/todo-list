let form = document.querySelector('#add-todo');
let todo = document.querySelector('#todo');
let input = document.querySelector('#enter-todo');






form.addEventListener('submit', function(e){
   e.preventDefault();
   let newTodo = document.createElement('li');
   let removeTodo = document.createElement('button');
   let markFinished = document.createElement('button');
   newTodo.innerText = input.value;
   todo.appendChild(newTodo);
   if(newTodo.innerText){
      newTodo.appendChild(markFinished);
      newTodo.appendChild(removeTodo);
      markFinished.innerText = 'Mark off';
      removeTodo.innerText = 'Delete';
   }

   if(newTodo.innerText === ''){
      alert('Field cannot be blank');
   }
   form.reset()
})

todo.addEventListener('click', function(e){
   if(e.target.innerText === 'Mark off'){
      let todoItem = e.target.parentElement;
      todoItem.style.textDecoration = 'line-through';
      e.target.style.backgroundColor = 'green';
      e.target.innerText = 'Completed!'
   }

   if(e.target.innerText === 'Delete'){
      e.target.parentElement.remove();
   }
})

