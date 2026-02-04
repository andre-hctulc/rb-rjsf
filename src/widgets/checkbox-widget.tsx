import type { WidgetProps } from "@rjsf/utils";
import type { FC } from "react";
import { inpWidgetProps } from "../form/json-form.util.js";
import { Checkbox, Label } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";

export const CheckboxWidget: FC<WidgetProps> = (props) => {
    const { rest, inpProps } = inpWidgetProps(props, false);
    const { label, ...restProps } = inpProps;

    return (
        <Label className="flex items-center gap-2">
            <Checkbox {...restProps} />
            {label}
        </Label>
    );
};
