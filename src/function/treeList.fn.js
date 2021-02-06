

let listToTree = (data, options) => {
    //  var map = {}, node, roots = [], i;
    //     for (i = 0; i < list.length; i += 1) {
    //         map[list[i].id] = i; // initialize the map
    //         list[i].children = []; // initialize the children
    //     }
    //     for (i = 0; i < list.length; i += 1) {
    //         node = list[i];
    //         if (node.parentId !== "0") {
    //             // if you have dangling branches check that map[node.parentId] exists
    //             list[map[node.parentId]].children.push(node);
    //         } else {
    //             roots.push(node);
    //         }
    //     }
    //     return roots;
    options = options || {};
    var ID_KEY = options.idKey || 'id';
    var PARENT_KEY = options.parentKey || 'parent';
    var CHILDREN_KEY = options.childrenKey || 'children';

    var item, id, parentId;
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
    return data;
}