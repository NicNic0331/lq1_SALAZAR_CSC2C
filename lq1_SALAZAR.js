// Persona Data Storage.
const persona1 = {
  name: "Maria Delos Santos Las Marias",
  age: 25,
  address: "Upper Session Road, Baguio City, Benguet"
};

const persona2 = {
  name: "Juan Gamoso Dela Cruz",
  age: 28,
  address: "San Nicolas, Candon City, Ilocos Sur"
};


// Split the full name into an array and then reconstruct it in the desired order.
const persona1NameArray = persona1.name.split(" ");
const persona2NameArray = persona2.name.split(" ");

// Function to handle rearranging names with last names.
const rearrangeName = (nameArray) => {

  // Assume the last 2 parts are the last name if length > 2.
  const lastName = nameArray.slice(-2).join(" ");
  const firstAndMiddleNames = nameArray.slice(0, -2).join(" ");
  return `${lastName}, ${firstAndMiddleNames}`;
};

// Rearrange the names to LASTNAME, First Name Middle Name.
const persona1RearrangedName = rearrangeName(persona1NameArray);
const persona2RearrangedName = rearrangeName(persona2NameArray);

// Log the rearrange names to the console.
console.log(`Persona 1 Rearranged Name: ${persona1RearrangedName}`);
console.log(`Persona 2 Rearranged Name: ${persona2RearrangedName}`);


// Log the persona information in the format: Name, Age, Address.
console.log(`Persona 1: ${persona1RearrangedName}, ${persona1.age}, ${persona1.address}`);
console.log(`Persona 2: ${persona2RearrangedName}, ${persona2.age}, ${persona2.address}`);


// Declare additional variables to store the length of each persona's name and address.
const persona1NameLength = persona1.name.length;
const persona2NameLength = persona2.name.length;
const persona1AddressLength = persona1.address.length;
const persona2AddressLength = persona2.address.length;


//Sum of all numeric values from the var or const declarations.
const sumOfNumericValues = persona1.age + persona2.age;
console.log(`Sum of numeric values: ${sumOfNumericValues}`);

//Add the ages of both personas. Subtract the length of Persona 1's name from the result, then multiply by the length of Persona 2's name.
const result2 = (persona1.age + persona2.age - persona1NameLength) * persona2NameLength;
console.log(`Result 2: ${result2}`);

//Raise the length of Persona 1's address to the power of Persona 2's address length.
const result3 = Math.pow(persona1AddressLength, persona2AddressLength);
console.log(`Result 3: ${result3}`);

