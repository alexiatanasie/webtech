const SampleArray=[{
    brand:'a',
    processor:'15',
    ram:16

},
{
    brand:'b',
    processor:'m2',
    ram:16

},
{
    brand:'c',
    processor:'15',
    ram:16

}]

const filterObjects=(arr, searchExpr)=>{
    return arr.filter(el=>{
        let result=true
        Object.keys(searchExpr).forEach(key=>{
            if(!el[key]||el[key]!==searchExpr[key]){
                result =false
            }
        })
        return result
       
    })
}


console.log(filterObjects(SampleArray, {brand:'d', ram:16}))

const sortArray=(arr, key)=>{
    if(arr.every(el=>el[key])){
        return arr
    }
    return arr.sort(function(a,b){
        if(a(key)>b(key)){
            return 1
        }
        else{
            if(a(key)===b(key)){
                return 0
        }
        else{
            if(a(key)<b(key)){
                return -1
        }
    )}
}

console.log(sortArray(sampleArray, 'ram'))