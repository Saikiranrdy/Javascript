let arrayOfPersons = [{'name': 'Rahul', 'age': 19} , {'name': 'Vinod', 'age': 10}, {'name': 'pavan', 'age': 11 }, {'name': 'Geetha', 'age': 17}];

for (let person of arrayOfPersons) {
    let eachPersonAge = person.age;
    if(eachPersonAge >= 18) {
        console.log(person.name);
     }
}