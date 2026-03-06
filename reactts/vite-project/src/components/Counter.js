import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export const Counter = () => {
    const [count, setCounter] = useState(0);
    return (_jsxs("div", { children: [_jsxs("p", { children: ["Cups ordered:", count] }), _jsx("button", { onClick: () => setCounter((prev) => prev + 1), children: "Increase count" })] }));
};
//# sourceMappingURL=Counter.js.map