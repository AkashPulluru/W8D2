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

Array.prototype.transpose = function () {
    let transposeArray = [];

    const length = this.length
    let i =  0
    let j = 0 

    while (i < length) {
        let holderArray = []; 
        while (j < length) {
            holderArray.push(this[j][i])
            j = j + 1 };
        j = 0;    
        transposeArray.push(holderArray);    
    i = i + 1 };

    return transposeArray;
}


// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())


function printEle(ele) {   
    console.log(ele);
}

Array.prototype.myEach = function(callback) {
    let length = this.length;
    
    let i = 0;
    
    while ( i < length) {
        callback(this[i]);
        i = i + 1;
    }; 
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].myEach(printEle))