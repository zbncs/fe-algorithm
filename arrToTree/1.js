// 目标数组
var arr = [
    { id: 3, parent: 2 },
    { id: 1, parent: null },
    { id: 2, parent: 1 },
];

// 期望结果
var obj = {
    id: 1,
    parent: null,
    child: {
        id: 2,
        parent: 1,
        child: {
            id: 3,
            parent: 2,
        },
    },
};

function arrToTree(arr) {
    let temp = {}
    let tree = {}

    for (let value of arr) {
        temp[value.id] = value
    }

    for (let key in temp) {
        if (temp[key].parent) {
            temp[temp[key].parent].child = temp[key]
        }
        else {
            tree = temp[key]
        }
    }

    return tree
}

console.log(111, arrToTree(arr))


