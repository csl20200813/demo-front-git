export function listToTree(treeData) {
    // result存储json数据转为树形结构后的结果
    // temp为临时对象，将json数据按照id值排序
    // len是json长度，用于循环遍历结束的条件
    
    var result = []
    const temp = {}
    const len = treeData.length
    for (var i = 0; i < len; i++) {
      temp[treeData[i].cid] = treeData[i]
    }
    debugger
    for (var j = 0; j < len; j++) {
      var currentElement = treeData[j]
      // 临时变量里面的当前元素的父元素，即pid的值，与找对应的id值
      var tempCurrentElementParent = temp[currentElement['pid']]
      // 如果有父元素，即如果有parentID属性
      if (tempCurrentElementParent) {
        if (!tempCurrentElementParent['children']) {
          tempCurrentElementParent['children'] = []
        }
        tempCurrentElementParent['children'].push(currentElement)
      } else {
        result.push(currentElement)
      }
    }
    return result
  }