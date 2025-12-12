import { jsx as _jsx } from "react/jsx-runtime";
import { inpWidgetProps } from "../form/json-form.util.js";
import { Textarea } from "flowbite-react";
export const TextareaWidget = (props) => {
    const { rest, inpProps } = inpWidgetProps(props, "");
    return _jsx(Textarea, { ...inpProps });
};
