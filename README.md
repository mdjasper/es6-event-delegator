# es6-event-delegator

This repo contains an es6 module which is a event delegator utility function. This module is transpiled into an equivalent es5 module using gulp-babel.

##Usage

Takes a parent selector, child-selector, event, and callback function and applies the event listener to the parent (executed on child event).

```
delegator('.parent', '.child', 'click', function(e){
    //callback function
)};
```

The event object e is passed into the callback function. In special cases, the event.target property points to a child node of the target that you specify in the child selector parameter. To ensure that you always get the correct node returned, an event._target property has been added, which will always point to the node that you specify in the child selector parameter (and not its children).

This function can be used to apply event handelers to objects that will be created or removed dynamically.