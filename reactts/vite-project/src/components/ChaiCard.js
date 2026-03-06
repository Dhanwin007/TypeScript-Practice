import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ChaiCard({ name, price, isSpecial = false }) {
    return (_jsxs("article", { children: [_jsxs("h2", { children: [name, isSpecial && _jsx("span", { children: "star" })] }), _jsx("p", { children: price })] }));
}
//# sourceMappingURL=ChaiCard.js.map