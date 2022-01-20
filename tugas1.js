const cekHariKerja = (day) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selesa', 'rabu', 'jumat' ]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

//fungsi berikut digunakan untuk menjalankan program dari promise
async function proces(param1){
    //bagian try akan dijalankan ketika fungsi promise memberikan return berupa resolve
    try{
        const result = await cekHariKerja(param1)
        console.log(result)
    }
    //bagian catch akan dijalankan ketika fungsi promise memberikan return berupa reject
    catch(err){
        console.log(err)
    } 
    //bagian finally akan dijalankan selalu. bagian ini dapat berguna sebagai akhir dari suatu program. sehingga fungsi try dan catch berguna memberi tahu apakah data atau prgram berhasil dan finally berguna untuk pemberitahuan bahawa programnya telah selesai
    finally {
        console.log("Tetap semangat jalani hari ini :)")
    }
}

//untuk menjalankan fungsi promise diatas. hal yang perlu dilakukan cukup menjalankan fungsi proces 
proces("minggu")

//ketika menggunakan console.log terjadi pending terlebih dahulu untuk menandakan bahwa program sudah jalan akan tetapi belum mengeluarkan hasil karna program bersifat asynchronous
console.log(proces("jumat"))
