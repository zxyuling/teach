var regexIp = /^(((\d{0,2})|(1\d{2})|(2[0-5]{2}))\.){3}((\d{0,2})|(1\d{2})|(2[0-5]{2}))$/;//正则匹配ip地址
console.log(regexIp.test('0.199.256.19'));
var regxMail  = /^[A-Za-z0-9]+((\-[A-Za-z0-9]+)|(\.[A-Za-z0-9]+)|(\_[A-Za-z0-9]+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$///正则匹配邮箱地址
console.log(regxMail.test('127J.44__444-444J@QQ.ww')) 
var regxPaw = /([a-z][A-Z])|([A-Z][a-z])|([A-Z][0-9])|([0-9][A-Z])|([a-z][0-9])|([0-9][a-z])/;
console.log(regxPaw.test('5d'))