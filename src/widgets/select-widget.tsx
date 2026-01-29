import type { WidgetProps } from "@rjsf/utils";
import type { FC } from "react";
import { inpWidgetProps } from "../form/json-form.util.js";
import { Select } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";

export const SelectWidget: FC<WidgetProps> = (props) => {
    const { rest, inpProps } = inpWidgetProps(props);
    const { options } = rest;

    return (
        <Select {...inpProps} className={twMerge("", inpProps.className)}>
            {options.enumOptions?.map((option: any, index: number) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
};
