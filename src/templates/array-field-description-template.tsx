import type { ArrayFieldDescriptionProps } from "@rjsf/utils";
import type { FC } from "react";
import { Description } from "../base/description";

export const ArrayFieldDescriptionTemplate: FC<ArrayFieldDescriptionProps> = ({
    description,
    registry,
    schema,
    uiSchema,
    idSchema,
}) => {
    if (!description) {
        return null;
    }
    return <Description>{description}</Description>;
};
