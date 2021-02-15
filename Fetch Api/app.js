document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);

//Get local text data
function getText() {
    fetch('text.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            document.getElementById('output').innerHTML = data
        })
        .catch(function(err) {
            console.log(err);
        });
}


// Get local json data
function getJson() {
    fetch('post.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(function(posts) {
                output += `<li>${posts.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}


//Get from External Api
function getApi() {
    fetch('https://api.github.com/users')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let output = '';
            data.forEach(function(user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}