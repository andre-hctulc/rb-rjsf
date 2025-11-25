import type { WidgetProps } from "@rjsf/utils";
import type { FC } from "react";
import { inpWidgetProps } from "../form/json-form.util.js";
import { Checkbox } from "flowbite-react";

export const CheckboxWidget: FC<WidgetProps> = (props) => {
    const { rest, inpProps } = inpWidgetProps(props, "");
    return <Checkbox {...(inpProps as any)} />;
};
