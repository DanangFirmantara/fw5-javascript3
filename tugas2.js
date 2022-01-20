const getmonth = ((callback) =>{
    setTimeout(() =>{
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'December']
        if(!error){
            callback(null, month)
        } else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
})

function map(param1,param2){
    param2.map((element) =>{
        console.log(element)
    })
}

getmonth(map)