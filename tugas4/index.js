const fetch = require('cross-fetch')

url = 'https://jsonplaceholder.typicode.com/users'


//menggunakan asyn await
// async function listName(){
//     const data = await fetch(url)
//     const result = await data.json()
//     result.forEach(item =>{
//         console.log(item.name)
//     })
// }


//menggunakan try and catch
result = fetch(url).then(res =>{
    res.json().then(fin =>{
        fin.forEach(Element =>{
            console.log(Element.name)
        })
    }).catch(res =>{
        console.log("catch 1")
    })
}).catch(err =>{
    console.log("catch 2")
})

console.log(result)
// listName()
