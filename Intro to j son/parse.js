// Parse JSON

const data = `{
    "name": "Shuvam Saha",
    "age": 23,
    "is_student": false,
    "passport_no": null,
    "tech_skills": ["Python", "Javascript", "HTML", "CSS", "SQL", "ReactJS"],
    "address": {
        "city": "Durgapur",
        "state": "New Delhi",
        "pin code": 713203
    }
}`;

const dataObject = JSON.parse(data);

console.log(dataObject['tech_skills'][1])
console.log(dataObject['name']);
console.log(dataObject);