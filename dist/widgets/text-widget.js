import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { inpWidgetProps } from "../form/json-form.util.js";
import { TextInput } from "flowbite-react";
export const TextWidget = (props) => {
    const { rest, inpProps } = inpWidgetProps(props, "");
    return (_jsx(_Fragment, { children: _jsx(TextInput, { autoComplete: "off", ...inpProps }) }));
};
