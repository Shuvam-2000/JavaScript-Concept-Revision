// Fetch API in JS

// GET requests
// fetch("https://dummyjson.com/products", {
//     method: 'GET'
// })
// .then((res) => { return res.json()})
// .then((data) => { console.log(data)
// })


// POST requests
fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      category: "Stationary"
    })
  })
  .then(res => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err)
  });