var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

var filterList=document.getElementById('filter')//filter id id for text placeholder


//form submit event
form.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
filterList.addEventListener('keyup',filterItems)
//add item
function addItem(e){
    e.preventDefault()

    //get input value
    var newItem=document.getElementById('item').value
    var addItem=document.getElementById('additem').value

    //create new li document
    var li=document.createElement('li')
    //add class
    li.className='list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem +''+ addItem))

    //create delete button
var delBtn =document.createElement('button')
//add classes to delete button
delBtn.className='btn btn-danger btn-sm float-right delete'

//append text node
delBtn.appendChild(document.createTextNode('X'))

//append button to li
li.appendChild(delBtn)
//append li to list


var edit=document.createElement('button')
edit.className='btn btn-primary btn-sm float-right edit'
edit.appendChild(document.createTextNode('Edit'))
li.appendChild(edit)
li.insertBefore(edit,delBtn)
itemList.appendChild(li) 
}


var listItems = document.getElementsByClassName('list-group-item');
for (var i = 0; i < listItems.length; i++) {
  var editButton = document.createElement('button');
  editButton.className = 'btn btn-primary btn-sm float-right edit';
  editButton.innerText = 'Edit';

  var deleteButton = listItems[i].querySelector('.delete');
  listItems[i].insertBefore(editButton, deleteButton);
}
/*
var deleteButtons = document.getElementsByClassName('delete');

for (var i = 0; i < deleteButtons.length; i++) {
  var editButton = document.createElement('button');
  editButton.className = 'btn btn-primary btn-sm float-right edit';
  editButton.innerText = 'Edit';

  var listItem = deleteButtons[i].parentNode;
  listItem.insertBefore(editButton, deleteButtons[i]);
}

*/
function removeItem(e1){
    if(e1.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li=e1.target.parentElement
            itemList.removeChild(li)
        }
    }
}


function filterItems(e){
    var text=e.target.value.toLowerCase()//get value what u entered in text box
    var items=itemList.getElementsByTagName('li')
    //convert to array
    Array.from(items).forEach(function (item){
        var itemName=item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}