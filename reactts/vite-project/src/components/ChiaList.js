import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { ChaiCard } from './ChaiCard';
export function ChaiList({ items }) {
    return (_jsxs("div", { children: ["ChaiList:", items.map((chai) => (_jsx(ChaiCard, { name: chai.name, price: chai.price, isSpecial: chai.price > 60 }, chai.id) //always remember that key should be given to the component rendered on iteration
            ))] }));
}
export default ChaiList;
//# sourceMappingURL=ChiaList.js.map