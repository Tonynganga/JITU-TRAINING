// function fn(){
//     console.log("Just a function");
// }

// function higherOrderFunction(callback){
//     callback();
// }

// higherOrderFunction(fn);

// function first() {
//     console.log(1);
// }

// function second(callback){
//     setTimeout(() => {
//        console.log(2); 

//     //    Execute the callback function
//     callback()
//     }, 0);

// }

// function third(){
//     console.log(3);
// }

// first();
// second(third);

// function  asynchronousRequest(args, callback) {
//     if(!args){
//         return callback(new Error('Whoa something went wrong'));
//     }else{
//         return setTimeout(
//             // Just adding a random number so it seems like contrived asychronous function
//             // return different data
//             () => callback(null, {body: args+ '' + Math.floor(Math.random() * 10)}),
//             500,
//         )
//     }
// }
// asynchronousRequest();
// console.log(asynchronousRequest.callback);
posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
]
function getPosts(){
    setTimeout(() => {
        let output;
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
            
        });
        document.body.innerHTML = output
        
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
                
            }else{
                reject('Something went wrong!!');
            }
        }, 3000);
});
}

createPost({title: 'Post three', body:'This is post three'})
.then(getPosts).catch(err => console.log(err));
