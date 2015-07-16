let matches = function(element, selector){
    var api = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'];
    for(var a in api){
        if(typeof element[api[a]] === 'function'){
            return element[api[a]](selector);
        }
    }
};

export function delegator(parentSelector, childSelector, event, callback){
    var parents = document.querySelectorAll(parentSelector);

    for(var i = 0; i < parents.length; i++){
        parents[i].addEventListener(event, function(e){
            var target = e.target;
            while(!matches(target, parentSelector) && !matches(target,'html')){
                if(matches(target,childSelector)){
                    e._target = target;
                    callback.call(this, e);
                    break;
                }
                target = target.parentNode;
            }

        }, false);
    }
}