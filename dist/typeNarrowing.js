function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `Chai order:${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai...`;
    }
    if (size === 'medium' || size === 'large') {
        return `make extra chai`;
    }
    return `chai order #${size}`;
}
class kulhadChai {
    serve() {
        return `Serving kulhad Chai`;
    }
}
class cutting {
    serve() {
        return `Serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
    else {
        chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`;
    }
    return `serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala chai`;
            break;
        case "ginger":
            return `Ginger chai`;
            break;
        case "elacichi":
            return `elacichi Tea`;
        default:
            return `Masala Chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //then we can be sure that it is masala chai as only that type object has spice level as key
    }
}
export {};
// function isStringArray(arr:unknown):arr is string[]{//in case of unknown we need to tell the datatype while defining,constructing,calling,etc
// return
// }
//# sourceMappingURL=typeNarrowing.js.map