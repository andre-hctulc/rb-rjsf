import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { ErrorText, Subtitle } from "@dre44/react-base";
export const ErrorListTemplate = (props) => {
    const { errors } = props;
    if (!errors.length) {
        return null;
    }
    return (_jsxs("details", { className: "mb-4", children: [_jsx("summary", { className: "cursor-pointer select-none", children: _jsxs(Subtitle, { as: "span", variant: "h4", children: ["Errors (", errors.length, ")"] }) }), _jsx("ul", { className: "pt-1", children: errors.map((error, i) => {
                    return (_jsx("li", { className: "error", children: _jsx(ErrorText, { children: error.stack }) }, i));
                }) })] }));
};
