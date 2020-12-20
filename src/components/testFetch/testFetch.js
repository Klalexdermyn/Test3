
fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(() => console.log('some error'));