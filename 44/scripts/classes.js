//class declaration,constructors,accessor methods

class Person {
    constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    // Getter
    get personalDetails() {
        return `${this.first_name} ${this.last_name}, age: ${this.age}`; // Added space between first and last name
    }

    // Setter
    set changeAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.log('Invalid age');
        }
    }
}

// Create an instance of the Person class
let p1 = new Person("ale", "alexis", 20);

// Access and print personal details
console.log(p1.personalDetails);  

// Update age using setter
p1.changeAge = 21;
console.log(p1.personalDetails);  
