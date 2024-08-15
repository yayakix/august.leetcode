/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
let count = {}
    for (let i = 0; i <nums.length; i++){
        if (nums[i] in count){
            count[nums[i]] += 1
        }else{
        count[nums[i]] = 1
        }
    }
    // highest counts
    let entries = Object.entries(count)
    entries.sort((a, b) => b[1] - a[1]);
    let thing = entries.slice(0,k)
    let wow = thing.map((thang) =>{
        return Number(thang[0])
    })
  return wow


 
};
