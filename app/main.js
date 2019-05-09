var name = "Sunil";
var age = 33.3;
var isMale = true;
var gender = 'M';
var address = {
    houseNo: '23',
    street: 'New Manas Nagar',
    city: 'Naini',
    state: 'UP'
};
var undefinedVar;

console.log("name : " + typeof(name) + " ,value : " + name);
console.log("age : " + typeof(age) + " ,value : " + age);
console.log("isMale : " + typeof(isMale) + " ,value : " + isMale);
console.log("gender : " + typeof(gender) + " ,value : " + gender);
console.log("address : " + typeof(address) + " ,value : " + address);
console.log("undefinedVar : " + typeof(undefinedVar) + " ,value : " + undefinedVar);
console.log('***********************************************');

name = String("Sunil");
age = Number(33.3);
isMale = Boolean("true");
gender = String("M");
address = Object.create({
    houseNo: '23',
    street: 'New Manas Nagar',
    city: 'Naini',
    state: 'UP',
    toString: function() {
        return `
                 House # : ${this.houseNo} , Street : ${this.street}, City : ${this.city} , State : ${this.state}
                 `;
    }
});
const suresh = {
    "name": "Suresh",
    "address": "Lucknow",
    "uid": 12,
};

address = {};
console.log("name : " + typeof(name) + " ,value : " + name.valueOf());
console.log("age : " + typeof(age) + " ,value : " + age);
console.log("isMale : " + typeof(isMale) + " ,value : " + isMale);
console.log("gender : " + typeof(gender) + " ,value : " + gender);
console.log("address : " + typeof(address) + " ,value : " + address);
console.log("undefinedVar : " + typeof(undefinedVar) + " ,value : " + undefinedVar);

console.log('****************************************');
console.log("Hello How are you doing");
const names = ["Sunil", "Dinesh", "Suresh", "John", "Joseph"];
