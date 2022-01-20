const pesanKopi = (order)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const kopi = ['Kopi Susu','Cappucino','Coffe Latte', 'Americano']
            let cek = kopi.find((item) =>{
                return item == order
            })
            if (cek){
                resolve (cek)
            } else{
                reject (new Error(`${order} tidak ada di dalam menu. Menu yang tersedia ${kopi} `))
            }
        },2000)
    })
}

async function proces (param1){
    try{
        const result = await pesanKopi(param1)
        console.log(`${result} akan diantar ya kakak`)
    } catch(err) {
        console.log(err)
    } finally {
        console.log("Terima kasih sudah berkunjung :)")
    }
}

proces ("Americano")
proces ("Leci")

const daftarToko = (toko) =>{
    return new Promise((resolve,reject) =>{
        setTimeout (()=>{
            const namaToko = ['Minang Mart', 'Budiman', 'Aciak Mart', 'Bundo Mart']
            const cek = namaToko.find((item) =>{
                return item == toko
            })
            if (cek){
                resolve(cek)
            } else {
                reject (namaToko)
            }
        }, 5000)
    })
}

async function proces2 (param1){
    try{
        const result = await daftarToko(param1)
        console.log(`${result} sudah masuk dalam daftar`)
    } catch(err){
        console.log(`${param1} belum masuk dalam daftar`)
        err.push(param1)
        console.log(`${err}. Data ${param1} telah dimasukkan`)
    } finally{
       console.log("Terima kasih")
    }
}

proces2 ("Nambo")
