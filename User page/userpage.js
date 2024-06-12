let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Saikiran Reddy",
    age: 24
};

let profileContainerE1 = document.getElementById("profileContainer");
profileContainerE1.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");

let imgContainerE1 = document.getElementById("imgContainer");

//create an userProfileImg and append it to the imgContainerE1

let imgE1 = document.createElement("img");
imgE1.setAttribute("src", profileDetails.imgSrc);
imgE1.classList.add("profile-img");
imgContainerE1.appendChild(imgE1);

//create a nameEl and append it to the profileContainerE1

let nameE1 = document.createElement("h1");
nameE1.classList.add("profile-name");
nameE1.textContent = profileDetails.name;
profileContainerE1.appendChild(nameE1);

//create an ageE1 and append it to the profileContainerE1

let ageE1 = document.createElement("p");
ageE1.classList.add("age");
ageE1.textContent = "Age: " + profileDetails.age;
profileContainerE1.appendChild(ageE1);