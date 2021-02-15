function easyHttp() {
    this.http = new XMLHttpRequest();
}

//Make an http get request
easyHttp.prototype.get = function(url, callback) {
        this.http.open('GET', url, true);

        let self = this;

        this.http.onload = function() {
            if (self.http.status === 200) {
                callback(null, self.http.responseText);
            } else {
                callback('Error: ' + self.http.status);
            }
        }
        this.http.send();
    }
    //Make an http post request
easyHttp.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'app;ication/json');

    let self = this;

    this.http.onload = function() {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

//Make an http put request
easyHttp.prototype.post = function(url, data, callback) {
        this.http.open('PUT', url, true);
        this.http.setRequestHeader('Content-type', 'app;ication/json');
        let self = this;

        this.http.onload = function() {
            callback(null, self.http.responseText);
        }
        this.http.send(JSON.stringify(data));
    }
    //Make an http delete request