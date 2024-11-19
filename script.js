fetch('https://official-joke-api.appspot.com/random_joke')
.then((response) =>{
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.error(err)
});
