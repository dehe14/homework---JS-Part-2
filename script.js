// The Fortune Teller

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

let numOfChildren = 2 ;
let partnerName = `Anna`;
let geoLocation = `Texas`;
let job = `farmer`;


let fortune = (numOfChildren , partnerName , location , job ) => {
    console.log(`You will be a ${job} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`)
}

fortune(numOfChildren ,partnerName ,geoLocation ,job);



// he Age Calculator

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.


let yearOfBirth = 1997;
let chosenYear = 2025;

let calcAge = (yearOfBirth,chosenYear) => {
    age= chosenYear - yearOfBirth;
    orAge = age -1;

    console.log(`I will be either ${orAge} or ${age} in ${chosenYear}`);
}

calcAge(yearOfBirth,chosenYear);


// The Lifetime Supply Calculator

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".


let currAge = 24;
let maxAge=80;
let storedPerDay=2; 
const daysPerYear=365;

let lifeTimeSuplyCalc = (currAge,maxAge,storedPerDay) => {
    let total = (maxAge-currAge)*daysPerYear*storedPerDay;
    console.log(`You will need ${total} to last you until the ripe old age of ${maxAge}`);
}

lifeTimeSuplyCalc(currAge,maxAge,storedPerDay);


// The Geometrizer

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

let radius = 3;
const pi = 3.14;

let circumAndAreaOfCircle=(radius)=>{
    let circumference = 2*pi*radius;
    let area = pi * (radius * radius);
    console.log(`The circumference is ${circumference}`);
    console.log(`The area is ${area}`);
}

circumAndAreaOfCircle(radius);


// The Temperature Converter

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celsius= 25;
let fahrenheit= 50;

let celsiusToFahrenheit=(celsius)=>{
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
}
let fahrenheitToCelsius=(fahrenheit)=>{
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C.`);
}

celsiusToFahrenheit(celsius);
fahrenheitToCelsius(fahrenheit);