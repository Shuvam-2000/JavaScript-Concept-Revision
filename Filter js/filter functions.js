// Filter Functions In JS

const arr = [2,22,13,5,56,61,23,7];

const arr1 = arr.filter((val) => val < 10);

console.log(arr1);

// filter function exampe two
const team  = [
        {
            name: "Shuvam",
            age: 23,
            position: "Fresher"
        },
        {
            name: "Riju",
            age: 23,
            position: "Fresher"
        },
        {
            name: "Mousumi",
            age: 43,
            position: "Housewife"
        },
        {
            name: "Rinku",
            age: 46,
            position: "Housewife"
        }
    ];

const fresher = team.filter((val) => val.position == "Fresher");

console.log(fresher);