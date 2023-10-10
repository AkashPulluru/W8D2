// Your code here
Array.prototype.uniq = function (arr) {
    const uniqueArray = [];

    this.forEach(item => {
        if (!uniqueArray.includes(item)){
            uniqueArray.push(item);
        }
    })

    return uniqueArray;
}