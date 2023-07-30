// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// how to fetch data from database using fetch

/*
1. fetch from json file
2. console log the data from JSON file 
3. display json in html

 */
 
fetch('./data/employees.json')
    .then(response => response.json())
    .then((json) => console.log(json));

    function appendData(data) {
        let li = document.createElement('li');
        
    }

    