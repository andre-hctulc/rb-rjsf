import type { DescriptionFieldProps } from "@rjsf/utils";
import type { FC } from "react";
import { Description } from "../base/description";

export const DescriptionFieldTemplate: FC<DescriptionFieldProps> = ({
    id,
    description,
    registry,
    schema,
    uiSchema,
}) => {
    if (!description) {
        return null;
    }
    return <Description id={id}>{description}</Description>;
};
