
//contoh asynchronous
// setTimeout(() =>{
//     console.log("Hai")
// },1000)

// console.log("Halo")

//synchronous

const tunggu = new Promise ((resolve,reject)=>{
    
    setTimeout(() =>{
        resolve("hai")
    },1000)
    return reject("Gagal nih")
})

// tunggu.then((sapa)=>{
//     console.log(sapa)
//     console.log("Halo")
// }).catch((err) =>{
//     console.log(err)
// })

async function proses(){
    try{
        const result = await tunggu
        console.log(result)
        // console.log("Halo")
    }catch(err){
        console.log(err)
    }
}

proses()