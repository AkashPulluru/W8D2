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

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].myEach(printEle))

Array.prototype.myMap = function(callback) {

    let length = this.length;

    let i = 0; 

    while ( i < length ) {
        callback(this[i]);
        i = i + 1;
    };
}

function doubler(array) {
    let length = array.length;

    let i = 0;

    while (i < length) {
        let ele = array[i] * 2;
        console.log(ele);
        i = i + 1;
    };
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].myMap(doubler))

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator;
    let arr;

    if (initialValue !== undefined) {
        arr = this;
        accumulator = initialValue;
    }
    else {
        arr = this.slice(1)
        accumulator = this[0];
    };


    arr.myEach(function(ele){
        accumulator = callback(accumulator, ele);
    });
    return accumulator;
};

    function adder(accumulator, num) {
        return accumulator + num;
    }


// console.log([1,2,3].myReduce(adder, 0));

Array.prototype.bubbleSort = function() {
    let arr = this;
    let length = arr.length;

    let i = 1;
    let j = 0;

    while (i < length) {
        while ( j < length - 1) {
            if(arr[i] < arr[j]) {
                let holder1 = arr[j];
                let holder2 = arr[i];
                arr[i] = holder1
                arr[j] = holder2
                i = 1
                j = 0
            };

            i += 1;
            j += 1;
        };
    };
    return arr; 
}

// console.log([1,4,5,3,3,3].bubbleSort())

String.prototype.substrings = function() {
    let length = this.length;
    substrings = [];

    let i = 0; 
    let j = 0 

    while (i < length) { 
        while (j < length) {    
            substrings.push(this.slice(i, j));
            j += 1;
        };

        i += 1; 
        j = i; 
    };

    return substrings;
};

console.log("hello".substrings())