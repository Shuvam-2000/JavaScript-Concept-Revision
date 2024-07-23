// JSON Stringify

const data = {
    name: "Shuvam",
    age: 23,
    city: "Durgapur"
}

// send data to server in form of object to server in JSON format
const convertTojson =  JSON.stringify(data);

console.log(convertTojson);

