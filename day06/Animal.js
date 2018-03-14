/*
* 		Animal 是原型类，包含了3个方法
*/
function Animal(s)
{
	this.sort =	s; 
	this.eat = function()
	{
		return "有只猪在吃";
	}
}
Animal.prototype.run = function()
{
	return "我在跑";
}
Animal.prototype.rest = function()
{
	return "我在休息";
}


/*
*		Dog是Animal的子类，使用原型继承的方式继承
*/
function Dog()
{

}

Dog.prototype = new Animal(1);
Dog.prototype.kanjiahuyuan = function()
{
	return "我能帮你看家护院";
}

var d = new Dog();
console.log(d.run());
console.log(d.kanjiahuyuan());


/*
*		pig是Animal的子类，使用call绑定的继承的方式继承，但坑爹的是不能继承父类在原型链中定义的方法
*/
function Pig()
{
	Animal.call(this);
}
Pig.prototype.sleep = function()
{
	return "我不仅能吃我还能睡"
}
var p  = new Pig();
console.log(p.eat());
console.log(p.sleep());


