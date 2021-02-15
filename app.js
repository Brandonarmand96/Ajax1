document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //create an XHR object
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'data.txt', true);
    // Optional -Used for spinners/loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }



    xhr.onload = function() {
        if (this.status === 200) {
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
        }
    }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();


    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready 


    //HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}