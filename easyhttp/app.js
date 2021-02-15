 const http = new easyHttp;

 //get Posts
 http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
     if (err) {
         console.log(err);
     } else {
         console.log(posts)
     }
 });


 // Get single post
 //http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
 //    if (err) {
 //        console.log(err);
 //    } else {
 //        console.log(posts)
 //    }
 //});


 //Create Data
 const data = {
     title: 'Custom Post',
     body: 'This is a custom post'
 };

 //Create Post
 http.get('https://jsonplaceholder.typicode.com/posts', data, function(err, posts) {
     if (err) {
         console.log(err);
     } else {
         console.log(posts)
     }
 });

 // Update post
 http.get('https://jsonplaceholder.typicode.com/posts/1', data, function(err, posts) {
     if (err) {
         console.log(err);
     } else {
         console.log(posts)
     }
 });