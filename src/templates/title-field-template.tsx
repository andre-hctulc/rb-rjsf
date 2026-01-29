import { LabelMimic } from "@dre44/react-base";
import type { FieldProps, TitleFieldProps } from "@rjsf/utils";
import type { FC } from "react";

export const TitleFieldTemplate: FC<TitleFieldProps> = ({
    id,
    registry,
    schema,
    title,
    required,
    uiSchema,
}) => {
    return (
        <LabelMimic id={id} className="mt-2">
            {title} {required && "*"}
        </LabelMimic>
    );
};
