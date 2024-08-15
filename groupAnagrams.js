var groupAnagrams = function(strs) {
    // stringg.split("").sort().join("");
    let obj = {}
    for (let i = 0; i <strs.length; i++){
        // aet
       let sortedstring = strs[i].split("").sort().join("");
       console.log(sortedstring)
            if (sortedstring in obj){
                obj[sortedstring].push(strs[i])
                }
                else{
                    // create sorted string to hold array
                    obj[sortedstring] = [strs[i]]
                }
        }

console.log(obj)
        const arrays = Object.values(obj);
        const combined = arrays.concat(); 
        return combined
