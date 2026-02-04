import type { WidgetProps } from "@rjsf/utils";
import type { FC } from "react";
import { inpWidgetProps } from "../form/json-form.util.js";
import { Textarea } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";

export const TextareaWidget: FC<WidgetProps> = (props) => {
    const { rest, inpProps } = inpWidgetProps(props, "");
    return <Textarea {...(inpProps as any)} />;
};
