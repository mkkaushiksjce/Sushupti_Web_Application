const actions = {
}

function createConstant(obj){
    function addPath(obj,path){
        Object.keys(obj).forEach(function(key){
            var curPath = path ? path+'.'+key : key;
            if(typeof obj[key] == "string"){
                obj[key] = curPath;
            }
            else{ addPath(obj[key],curPath)}
        });
    }
    return addPath(obj,"");
}

createConstant(actions);
