var person={}
var person1=new Object();
console.log(person)
console.log(person1);

//in javascript the objects are created based on another existing ones=> prototype inheritance
//objects are key-value type
 
var person2={
    last_name:'ale',
    first_name:'tan'
}
console.log(person2);
var student =Object.create(person2);
student.group=1000;
console.log(student.last_name);

var employee=Object.create(student);
employee.salary=100010;
console.log(employee['salary']);
console.log(employee.last_name);

emp2= Object.create(employee);
console.log(emp2);