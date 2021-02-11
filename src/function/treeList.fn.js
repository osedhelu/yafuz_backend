

let listToTree = ({data, idKey, parentKey,childrenKey}) => {
    
    var ID_KEY = idKey || 'id';
    var PARENT_KEY = parentKey || 'parent';
    var CHILDREN_KEY = childrenKey || 'children';

    // var item, id, parentId;
    var map = {};
    for (var i = 0; i < data.length; i++) { // make cache
        if (data[i][ID_KEY]) {
            map[data[i][ID_KEY]] = data[i];
            data[i][CHILDREN_KEY] = [];
        }
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i][PARENT_KEY]) { // is a child
            if (map[data[i][PARENT_KEY]]) // for dirty data
            {
                map[data[i][PARENT_KEY]][CHILDREN_KEY].push(data[i]); // add child to parent
                data.splice(i, 1); // remove from root
                i--; // iterator correction
            } else {
                data[i][PARENT_KEY] = 0; // clean dirty data
            }
        }
    };
    console.log(data)
    return data;
}


module.exports = {listToTree};