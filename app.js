var todoList = [];

var form = document.getElementById('Todo-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    
    var input = document.getElementById('input-form').value;
    todoList.push(input);   
    document.getElementById('list').innerHTML = todoList;
    
});