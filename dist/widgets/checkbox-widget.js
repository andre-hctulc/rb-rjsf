import { jsx as _jsx } from "react/jsx-runtime";
import { inpWidgetProps } from "../form/json-form.util.js";
import { Checkbox } from "flowbite-react";
export const CheckboxWidget = (props) => {
    const { rest, inpProps } = inpWidgetProps(props, "");
    return _jsx(Checkbox, { ...inpProps });
};
