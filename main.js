var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

//form submit event
form.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)

//add item
function addItem(e){
    e.preventDefault()

    //get input value
    var newItem=document.getElementById('item').value

    //create new li document
    var li=document.createElement('li')
    //add class
    li.className='list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //create delete button
var delBtn =document.createElement('button')
//add classes to delete button
delBtn.className='btn btn-danger btn-sm float-right delete'

//append text node
delBtn.appendChild(document.createTextNode('X'))

//append button to li
li.appendChild(delBtn)
//append li to list
itemList.appendChild(li)
  
}

function removeItem(e1){
    if(e1.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li=e1.target.parentElement
            itemList.removeChild(li)
        }
    }
}
var listItems = document.getElementsByClassName('list-group-item');

for (var i = 0; i < listItems.length; i++) {
  var editButton = document.createElement('button');
  editButton.className = 'btn btn-primary btn-sm float-right edit';
  editButton.innerText = 'Edit';

  var deleteButton = listItems[i].querySelector('.delete');
  listItems[i].insertBefore(editButton, deleteButton);
}