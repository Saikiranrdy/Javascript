let objectKey = "name";
 
let arrayOfInventions = [
   {
     name: "Printing Press",
     "invented by": "Johannes Gutenberg",
     year: 1440
   },
   {
     name: "Light Bulb",
     "invented by": "Thomas Edison",
     year: 1879
   },
   {
     name: "Telephone",
     "invented by": "Alexander Graham Bell",
     year: 1876
   },
   {
     name: "Aeroplane",
     "invented by": "Orville and Wilbur Wright",
     year: 1903
   },
   {
     name: "Computer",
     "invented by": "Charles Babbage",
     year: 1822
   }
 ];


for (let invention of arrayOfInventions) {
      let eachObjectKeyValue = invention[objectKey];
      console.log(eachObjectKeyValue);
}