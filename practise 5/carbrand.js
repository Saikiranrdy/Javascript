let arrayOfCarBrands = [{'name': 'Chevrolet', 'Country': 'America'}, {'name': 'Maruti Suzuki', 'Country': 'India'}, {'name': 'Audi', 'Country': 'Germany'}, {'name': 'Tata', 'Country': 'India'}, {'name': 'Honda', 'Country': 'Japan'}];

let arrayOfIndianCarBrandNames =[];
    for (let carBrand of arrayOfCarBrands) {
        let eachCarBrandCountry = carBrand.Country;
        if(eachCarBrandCountry === "India") {
            let nameOfCarBrand = carBrand.name;
            arrayOfIndianCarBrandNames.push(nameOfCarBrand);
        }
    }
    console.log(arrayOfIndianCarBrandNames);