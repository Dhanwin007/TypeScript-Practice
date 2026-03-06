import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { ChaiCard } from './components/ChaiCard';
import { Counter } from './components/Counter';
import { ChaiList } from './components/ChiaList';
const menu = [{ id: 1, name: "Masala", price: 12 }, { id: 2, name: "Cinamon", price: 30 }, { id: 3, name: "greenTea", price: 25 }];
function App() {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("h1", { children: "Vite + React" }), _jsx(ChaiList, { items: menu }), _jsx(Counter, {})] }) }));
}
export default App;
//# sourceMappingURL=App.js.map