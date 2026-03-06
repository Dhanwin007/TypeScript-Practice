function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });
// This function is type-safe.
// Generics allow any type to be passed,
// but each function call preserves that specific type (T),
// ensuring the returned array contains only that type.
function pair(a, b) {
    return [a, b];
} //helps in building library frameworks
pair("masala", 20);
pair("masala", { flavor: "ginger" });
const numberBox = { content: 10 };
const stringBox = { content: "10" };
const res = {
    status: 2,
    data: {
        flavor: "vanilla"
    }
};
export {};
//the above one is important example
//# sourceMappingURL=GenericsTS.js.map