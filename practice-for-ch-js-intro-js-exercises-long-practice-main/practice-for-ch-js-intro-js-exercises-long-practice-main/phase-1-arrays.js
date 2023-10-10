// Your code here
Array.prototype.uniq = function () {
    const uniqueArray = [];

    this.forEach(item => {
        if (!uniqueArray.includes(item)){
            uniqueArray.push(item);
        }
    })

    return uniqueArray;
}

// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function(){
    const twoSumArr = [];

    this.forEach((num, index) => {
        this.forEach((num2, index2) => {
            if (num + num2 === 0 && index < index2) {
                twoSumArr.push([index, index2]);
            }
        })
    })

    return twoSumArr;
}

// console.log([-1, 0, 2, -2, 1].twoSum())

