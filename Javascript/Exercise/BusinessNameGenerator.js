// 1.//create a business name generator by combining list of adjectives
// logic:

// let a= Math.floor(Math.random()*5)+5
// console.log(a)

// // lets understand behind this approch 

// // math.random() will only generate between 0 to 1
// math.floor() and math.random() can generate random the intergers with out decimals

// Adjective:
// crazy
// Amazing
// Fire

// shopename:
// Engine
// Foods
// Garments

// AnotherWord:
// bros
// Limited
// Hub

let adjective = () => {
    let a = "crazy";
    let b = "Amazing";
    let c = "Fire";
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return a;
    } else if (random == 1) {
        return b;
        // return b;
    } else if (random == 2) {
        return c;
    }
};
let shopename = () => {
    let d = "Engine";
    let e = "Foods";
    let f = "Garments";
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return d;
    } else if (random == 1) {
        return e;
    } else if (random == 2) {
        return f;
    }
};
    let AnotherWord = () => {
        let g = "bros";
        let h = "Limited";
        let i = "Hub";
        let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            return g;
        } else if (random == 1) {
            return h;
        } else if (random == 2) {
            return i;
        }
    };


console.log(`${adjective()}${shopename()}${AnotherWord()}`)