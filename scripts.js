// let fruits = ["apple", "banana", "qiwi", "peach"]



// let fruits = ["apple",
//     "banana",
//     false,
//     13,
//     "hello", ["1", "2", "3"],
//     { name: "Peter", lastname: "Parker" },
//     12345
// ]

// let fruits = document.forEach



// var emptyVariable;
// var messege = "hello";
// var name, lastname = "Parker";

// var exampleNumber1 = 123;
// var exampleNumber2 = 12345;
// var exampleNumber3 = Infinity;
// var exampleNumber4 = NaN;


let people = [{
            name: "Peter",
            lastname: "Parker",
            age: 34
        },
        {
            name: "Josh",
            lastname: "Emmet",
            age: 33
        },
        {
            name: "Anderson",
            lastname: "Silva",
            age: 45
        },
        {
            name: "Stype",
            lastname: "Miocic",
            age: 38
        }
    ]
    // let num = 0
    // people.forEach((element) => {
    //     console.log(element)
    //     num++
    // })


let contains = document.querySelector("#contains")

people.forEach((item) => {
    let person = document.createElement("div");
    let name = `${item.name}, `;
    let lastname = `${item.lastname }, `;
    let age = item.age;
    person.append(name);
    person.append(lastname);
    person.append(age);
    contains.append(person);
})