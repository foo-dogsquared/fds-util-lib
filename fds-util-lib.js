// export function randomInt_inc(x = 0, y = 1) {
//     return Math.floor(Math.random() * (y - x + 1)) + x;
// }

// export function randomInt_exc(x = 0, y = 1) {
//     return Math.floor(Math.random() * (y - x) + x);
// }

// export function createElement(element, node, position, { textContent = "" }) {
//     const element = createElement(element);
//     const node = document.querySelector(node);

//     if (position === 'child') {
//         node.appendChild(element);
//         return 0;
//     } else if (position === 'sibling') {
//         node.insertBefore(element, node);
//         return 0;
//     }
// }

"use strict";

const fds = {
    "math" : {
        "randomInt_inc": function (x = 0, y = 1) {
            if (y >= x) {
                return Math.floor(Math.random() * (y - x + 1)) + x;
            } else if (x >= y) {
                return Math.floor(Math.random() * (x - y + 1)) + y;
            } else {
                return null;
            }
        },

        "randomInt_exc": function (x = 0, y = 1) {
            if (x <= y) {
                return Math.floor(Math.random() * (y - x) + x);
            } else if (x >= y) {
                return Math.floor(Math.random() * (y - x) + x);
            } else {
                return null;
            }
        }
    },

    "dom": {
            "createElem": function (element, referenceNode, position, attributes = {}, textContent = '') {
            const elem = document.createElement(element);
            console.debug(typeof attributes);
            if (typeof attributes === 'object' && attributes)  {
                for (const prop in attributes) {
                    elem.setAttribute(prop, attributes[prop]);
                }
            // adding this since there could be some cases wherein there is no attribute and the dev want to have a text content instead
            } else if (typeof attributes === 'string' && attributes) {
                elem.textContent = attributes;
            } else if (typeof attributes !== 'object' && attributes) {
                console.error("Parameter: 'attributes' is not an object.");
                return 1;
            }

            const elemRefNode = document.querySelector(referenceNode);

            if (position === 'child') {
                elemRefNode.appendChild(elem);
            } else if (position === 'sibling') {
                const parent = elemRefNode.parentElement;
                parent.appendChild(elem, elemRefNode);
            } else {
                console.error("Parameter: 'position' value is not valid.");
                return 1;
            }

            if (textContent) {
                elem.textContent = textContent;
            }

            return 0;
        },

        "removeElem": function (selector, quantity = 1) {
            // TODO: Get the selector
            // TODO: Get the position
            // TODO: Then find the selector in the HTML document
            // TODO: Delete the element(s)
            if (quantity <= 0) {
                console.error("Parameter: 'quantity' must be more than 1.");
                return 1;
            } else if (quantity < 1) {
                const elements = document.querySelectorAll(selector);
                for (node in elements) {
                    node.remove();
                }
            } else {
                const element = document.querySelector(selector);
                element.remove();
            }

            return 0;
        }
    },

    "date": {
        "getFullDateString": function(date = new Date()) {
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            const hour = date.getHours();
            const minute = date.getMinutes();

            let result;

            switch (month) {
                case 0:
                    result = "January";
                    break;
                case 1:
                    result = "February";
                    break;
                case 2:
                    result = "March";
                    break;
                case 3:
                    result = "April";
                    break;
                case 4:
                    result = "May";
                    break;
                case 5:
                    result = "June";
                    break;
                case 6:
                    result = "July";
                    break;
                case 7:
                    result = "August";
                    break;
                case 8:
                    result = "September";
                    break;
                case 9:
                    result = "October";
                    break;
                case 10:
                    result = "November";
                    break;
                case 11:
                    result = "December";
                    break;
            }

            result += ` ${day}, ${year} - ${String(hour).length == 2 ?  hour: '0' + hour}:${String(minute).length == 2 ? minute: '0' + minute}`;

            return result;
        }
    }
}

fds.dom.createElem("p", "header > .wrapper", "child", "I want to be a dog.");
fds.dom.createElem("p", "main > .wrapper", "child", "ANOTHER TEST");