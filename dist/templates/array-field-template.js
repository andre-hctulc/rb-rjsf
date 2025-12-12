import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { Button } from "flowbite-react";
export const ArrayFieldTemplate = (props) => {
    const ArrayFieldItemTemplate = props.registry.templates.ArrayFieldItemTemplate;
    return (_jsxs("div", { className: props.className, children: [props.items.map((element) => (_createElement(ArrayFieldItemTemplate, { ...element, key: element.key }))), props.canAdd && (_jsx(Button, { className: "mt-4 ml-auto", size: "sm", type: "button", onClick: props.onAddClick, color: "primary", children: "Add Item" }))] }));
};
