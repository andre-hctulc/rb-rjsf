import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { ErrorText, populateProps } from "@dre44/react-base";
import { HelperText, Label } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
export const FieldTemplate = (props) => {
    const { id, classNames, style, label, help, required, description, errors, children, displayLabel, readonly, } = props;
    return (_jsxs("div", { className: twMerge(classNames), style: style, children: [displayLabel && label && (_jsxs(Label, { htmlFor: id, className: "mt-2", children: [label, " ", required && !readonly ? "*" : ""] })), description && _jsx("div", { className: "mb-2 mt-1 text-t2 text-sm", children: description }), children, !props.hideError && errors && _jsx(ErrorText, { as: "div", children: errors }), help && _jsx("div", { children: help })] }));
};
