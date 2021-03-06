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

        "randomInt_exc": function (x = 0, y = 2) {
            if (x <= y) {
                return Math.floor(Math.random() * (y - x) + x);
            } else if (x >= y) {
                return Math.floor(Math.random() * (y - x) + x);
            } else {
                return null;
            }
        },

        "decimalToBaseN": function (int, radix) {
            if (radix <= 1) {
                console.error(`Valid radix goes from 2 and above.`);
            }

            // we're starting at -1 since the first place in any numeral system is radix to the power of 0
            let power = -1;
            let numeralString = '';


            while (Math.pow(radix, power) <= int) {
                power++;
            }


            for (let index = 0; power > 0; power--) {
                let char = int % radix;
                if (char >= 10) char = String.fromCharCode(97 + (char - 10));
                numeralString += `${char}`;
                int = Math.floor(int / radix);
            }
            
            // We're simply reversing them since mathematically speaking, when we first divide it by the radix,
            // we are getting radix to the power of 0, then the next division by radix will be the radix 
            // to the power of 1, and so forth.
            numeralString = numeralString.split('').reverse().join('');
            
            if (radix === 16) numeralString = `0x${numeralString}`
            else if (radix === 8) numeralString = `0${numeralString}`

            return numeralString;
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
