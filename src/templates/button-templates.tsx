import { IconButton } from "@dre44/react-base";
import { getSubmitButtonOptions, type IconButtonProps, type SubmitButtonProps } from "@rjsf/utils";
import type { FC } from "react";
import { iconTemplateProps } from "../form/json-form.util.js";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { Button } from "flowbite-react";
import { PiPlus } from "../icons/phopshpor/plus.js";
import { PiCaretDown } from "../icons/phopshpor/caret-down.js";
import { PiCaretUp } from "../icons/phopshpor/caret-up.js";
import { PiCopy } from "../icons/phopshpor/copy.js";
import { PiTrash } from "../icons/phopshpor/trash.js";

export const AddButtonTemplate: FC<IconButtonProps> = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);

    return (
        <IconButton
            ghost
            {...iconBtnProps}
            className={twMerge("mt-4", iconBtnProps.className)}
            color="neutral"
        >
            <PiPlus />
        </IconButton>
    );
};

export const MoveDownButtonTemplate: FC<IconButtonProps> = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);

    return (
        <IconButton  ghost {...iconBtnProps} color="gray">
            <PiCaretDown />
        </IconButton>
    );
};

export const MoveUpButtonTemplate: FC<IconButtonProps> = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);

    return (
        <IconButton ghost {...iconBtnProps} color="gray">
            <PiCaretUp />
        </IconButton>
    );
};

export const CopyButtonTemplate: FC<IconButtonProps> = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);

    return (
        <IconButton ghost {...iconBtnProps} color="gray">
            <PiCopy />
        </IconButton>
    );
};

export const RemoveButtonTemplate: FC<IconButtonProps> = (props) => {
    const { rest, iconBtnProps } = iconTemplateProps(props);

    return (
        <IconButton ghost {...iconBtnProps} className={twMerge(iconBtnProps.className)} color="red">
            <PiTrash />
        </IconButton>
    );
};

export const SubmitButtonTemplate: FC<SubmitButtonProps> = (props) => {
    const { uiSchema, ...btnProps } = props;
    const { norender } = getSubmitButtonOptions(uiSchema);

    if (norender) {
        return null;
    }

    return (
        <Button {...btnProps} className="mt-4" type="submit">
            Submit
        </Button>
    );
};
