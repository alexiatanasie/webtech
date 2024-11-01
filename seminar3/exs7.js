const sampleDictionary=['the', 'quick', 'fox']

const sampleText=`
best
read
on`

const checkAcrostic=(text, dictionary)=>{
const candidate=text.split('\n').filter(el=>el.trim()).map(el=>el[0]).join('')
return dictionary.indexOf(candidate)!==-1
}

console.log(checkAcrostic(sampleText, sampleDictionary))