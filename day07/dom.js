var fragment = document.createDocumentFragment();
var p = document.createTextNode('Hello World!');
var ul = document.createElement('ul');
var li = document.createElement('li');
var b1 = document.createElement('button');
var b2 = document.createElement('button');
ul.setAttribute('id','id');
b1.setAttribute('id','addLi');
b1.innerHTML = '新增';
b2.setAttribute('id','removeLi');
b2.innerHTML = '删除';

fragment.appendChild(p);
fragment.appendChild(ul);
fragment.appendChild(b1);
fragment.appendChild(b2);
ul.appendChild(li);

document.body.appendChild(fragment);
