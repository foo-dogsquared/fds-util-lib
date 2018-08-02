# fds-util-lib
A very useless utility library for random purposes. 😁

## Features
- Pseudorandom number generator of integers
- Creating an element quickly
- Conversion of Date() object (take a look at [moment.js](https://www.npmjs.com/package/moments))

## How-to
For now, the library is just a `.js` with an object so calling this library is just simple as...
```js
    fds.TYPE.FUNCTION;

    // example uses
    fds.dom.createElem("a", "header > .wrapper", "child", "I'm a dog", {"style": "color: #b3411d"});
    fds.math.randomInt_inc(0, 10);
```

## Functions
- ### Date
    - #### `getFullDateString()` 
        - this needs a `Date` object; having no parameter will simply provide the current date and time
        - *return value*: a string containing the date and time
- ### DOM
    - #### `createElem(htmlTag, referenceNode, position[, textContent, attributes])`
        - creates a new HTML element in the document
        - needs the following **in order**: 
            - `htmlTag` - self-explanatory; tags such as `a`, `div`, `input`, etc.
            - `referenceNode` - this is the element node to be used as a reference to the position of the new element; accepted value is a CSS selector to the node
            - `position` - this will be the position of the new node relative to the `referenceNode`; accepts the following values:
                - **child** - the new node will be a child to the `referenceNode`
                - **sibling** - the new node will be in the same scope as the `referenceNode`
            - `textContent` - **optional**; this is will be the text contained inside of the new element, if it is possible
            - `attributes` - **optional**; the attributes of the new node; accepts an object containing the name of the attribute as the keys and its values as the value 
        - *return value*: an integer that dictates whether the function has been successful or not; any non-zero integer indicates that the function is not completed
- ### Math
    - #### `randomInt_exc(min, max)`
        - accepts two integers that indicate the range of the return value **excluding** the maximum integer
        - if it has no parameter values, it will have (0, 2) as the default so the possible values will be 0 and 1
        - *return value*: an integer that is pseudo-randomly generated from the range (if it is indicated)
    - #### `randomInt_inc(min, max)`
        - accepts two integers that indicate the range of the return value **including** the maximum integer
        - if it has no parameter values, it will execute the function with (0, 1) as the default values so possible values may be 0 or 1
        - *return value*: same as `randomInt_exc` (except the `max` is included this time)
    - #### `decimalToBaseN(int, radix)`
        - accepts two integers: the number to be converted and the radix to be converted to base-*n* (binary or base-2, octal or base-8, hexadecimal or base-16, etc.)
        - the value of `radix` cannot be less than or equal to 1
        - basically `Number(x).toString()`, lol
        - *return value*: a string of the output number