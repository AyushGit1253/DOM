/* //console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)

console.log(document.forms)
console.log(document.head)

console.log(document.all)

//document.getelementbyid
console.log(document.getElementById('header-title').textContent='HELLO')

var headerTitle=document.getElementById('header-title')
headerTitle.textContent='HELLO'
headerTitle.innerText='123'
headerTitle.innerHTML='<h3>hi</h3>' 

var header=document.getElementById('main-header')
header.style.borderBlock='solid 3px #000'

var titleElements = document.querySelectorAll('h2.title');
//var titleElements = document.querySelectorAll('h2.title')[0];//for only changing first h2..no foreach used here

titleElements.forEach(function(element) {
  element.style.fontWeight = "bold";
  element.style.color = "green";
});
*/

 /* var item=document.getElementsByClassName('list-group-item');
console.log(item[2])
item[2].textContent='HELLO' 

for(var i=0;i<item.length;i++){
  item[i].style.fontWeight='bold'
}
item[2].style.backgroundColor='green' 

var li=document.getElementsByTagName('li')
console.log(li)
console.log(li[2])
li[2].style.fontWeight='bold'

for(var i=0;i<li.length;i++){
  li[i].style.fontWeight='bold'
  li[i].style.background='green'
}
 
 */
/* var title=document.querySelector('.list-group-item:last-child')
title.style.color='red' */

/* var second=document.querySelector('.list-group-item:nth-child(2)')
second.style.backgroundColor='green'
 */
/* var third=document.querySelector('.list-group-item:nth-child(3)')
third.style.display='none' */

/* var all=document.querySelector('.list-group-item:nth-child(2)')
all.style.color='green' */

/* var item=document.querySelectorAll('.list-group-item:nth-child(odd)')
for(var i=0;i<item.length;i++){
  item[i].style.backgroundColor='green'
}
 */

//creating nodes and modifying dom

//parentnode
var items=document.querySelector('#items')
console.log(items.parentNode)

//parentnodelement
console.log(items.parentElement)
items.parentElement.style.backgroundColor='#f4f4f4'

//children

console.log(items.children)
console.log(items.children[1].style.backgroundColor='green')

//firstchildelement
console.log(items.firstChild)
items.firstElementChild.textContent='hello'
items.lastElementChild.textContent='hello'

console.log(items.previousElementSibling)
items.previousElementSibling.style.backgroundColor='green'

//create new div

var div=document.createElement('div')
console.log(div)
div.className='divclass'
div.title='title'

var textDiv=document.createTextNode('hello world')
div.appendChild(textDiv)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

container.insertBefore(div,h1)
div.style.fontSize='30px'
