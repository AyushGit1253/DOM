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
/* console.log(item[2])
item[2].textContent='HELLO' */

/*for(var i=0;i<item.length;i++){
  item[i].style.fontWeight='bold'
}
item[2].style.backgroundColor='green' */

var li=document.getElementsByTagName('li')
console.log(li)
console.log(li[2])
li[2].style.fontWeight='bold'

for(var i=0;i<li.length;i++){
  li[i].style.fontWeight='bold'
  li[i].style.background='green'
}

