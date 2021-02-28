

let listToTree = ({data, idKey, parentKey,childrenKey}) => {
    
    let ID_KEY = idKey || 'id';
    let PARENT_KEY = parentKey || 'parent';
    let CHILDREN_KEY = childrenKey || 'children';
  
    // let item, id, parentId;
    let map = {};
    for (let i = 0; i < data.length; i++) { // make cache
        if (data[i][ID_KEY]) {
            map[data[i][ID_KEY]] = data[i];
            data[i][CHILDREN_KEY] = [];
        }
    }
    for (let i = 0; i < data.length; i++) {
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
  
  
  module.exports = {listToTree};