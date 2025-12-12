import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from "@dre44/react-base";
import { getSubmitButtonOptions } from "@rjsf/utils";
import { iconTemplateProps } from "../form/json-form.util.js";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { Button } from "flowbite-react";
import { PiPlus } from "../icons/phopshpor/plus.js";
import { PiCaretDown } from "../icons/phopshpor/caret-down.js";
import { PiCaretUp } from "../icons/phopshpor/caret-up.js";
import { PiCopy } from "../icons/phopshpor/copy.js";
import { PiTrash } from "../icons/phopshpor/trash.js";
export const AddButtonTemplate = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);
    return (_jsx(IconButton, { ...iconBtnProps, className: twMerge("mt-4", iconBtnProps.className), color: "neutral", children: _jsx(PiPlus, {}) }));
};
export const MoveDownButtonTemplate = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);
    return (_jsx(IconButton, { ...iconBtnProps, color: "neutral", children: _jsx(PiCaretDown, {}) }));
};
export const MoveUpButtonTemplate = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);
    return (_jsx(IconButton, { ...iconBtnProps, color: "neutral", children: _jsx(PiCaretUp, {}) }));
};
export const CopyButtonTemplate = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);
    return (_jsx(IconButton, { ...iconBtnProps, color: "neutral", children: _jsx(PiCopy, {}) }));
};
export const RemoveButtonTemplate = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);
    return (_jsx(IconButton, { ...iconBtnProps, className: twMerge(iconBtnProps.className), color: "error", children: _jsx(PiTrash, {}) }));
};
export const SubmitButtonTemplate = (props) => {
    const { uiSchema, ...btnProps } = props;
    const { norender } = getSubmitButtonOptions(uiSchema);
    if (norender) {
        return null;
    }
    return (_jsx(Button, { ...btnProps, className: "mt-4", type: "submit", color: "primary", children: "Submit" }));
};
