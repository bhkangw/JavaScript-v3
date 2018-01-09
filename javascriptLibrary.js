var _ = {
    map: function (arr, callback) {
        var newarr = []
        for(let i of arr){
            newarr.push(callback(i))
        }
        return newarr;
    },
    reduce: function () {
        // code here;
    },
    find: function () {
        // code here;
    },
    filter: function () {
        // code here;
    },
    reject: function () {
        // code here;
    }
}

var result = _.map([1, 2, 3], function (num) { return num * 3; });
console.log(result)