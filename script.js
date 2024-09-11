document.getElementById("orderForm").addEventListener("submit", function(event) {
    validateForm(event);
});

function validateForm(event) {
    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const tagline = document.getElementById("tagline").value;
    const phone = document.getElementById("phone").value;
    const rollNo = 0;  

    try {
        if (tagline.length > 50) {
            alert("Tagline cannot exceed 50 characters.");
            event.preventDefault(); 
            return;
        }
        
        if (phone.length !== 10) {
            alert("Phone number must be 10 digits.");
            event.preventDefault();
            return;
        }

        if (rollNo === 0) {
            throw new Error("Roll number cannot be zero.");
        }

    } catch (error) {
        alert(error.message);
        event.preventDefault();
    }
}


function processOrder(event) {
    event.preventDefault(); 

    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const tagline = document.getElementById("tagline").value;
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;
    const address1 = document.getElementById("address1").value;
    const city = document.getElementById("city").value;
    const pincode = document.getElementById("pincode").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const deliveryDate = document.getElementById("deliveryDate").value;


    const receipt = `
    Order Confirmation:
    ---------------------
    Full Name: ${fullName}
    Age: ${age}
    Tagline: ${tagline}
    TShirt Color: ${color}
    TShirt Size: ${size}
    Quantity: ${quantity}
    Address: ${address1}, ${city} - ${pincode}
    Email: ${email}
    Phone: ${phone}
    Delivery Date: ${deliveryDate}
    Order Date: ${new Date().toLocaleDateString()}
    `;

    alert(receipt);


    const person = new Person(fullName, age);
    person.printDetails();

    
    const student = new Student(fullName, age, 1001);
    student.printDetails();
}


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printDetails = () => {
        console.log(`Person Details: Name: ${this.name}, Age: ${this.age}`);
    }

    greet() {
        console.log("Hello, welcome!");
    }
}


class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age);  
        this.rollNo = rollNo;
    }

   
    printDetails() {
        super.printDetails();  
        console.log(`Roll No: ${this.rollNo}`);
    }
}
