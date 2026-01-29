import type { WidgetProps } from "@rjsf/utils";
import type { FC } from "react";
import { inpWidgetProps } from "../form/json-form.util.js";
import { TextInput } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";

export const TextWidget: FC<WidgetProps> = (props) => {
    const { rest, inpProps } = inpWidgetProps(props);

    return <TextInput autoComplete="off" {...inpProps} className={twMerge("", inpProps.className)} />;
};
