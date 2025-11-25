import { ErrorText, populateProps } from "@dre44/react-base";
import type { FieldTemplateProps } from "@rjsf/utils";
import { HelperText, Label } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import type { FC } from "react";

export const FieldTemplate: FC<FieldTemplateProps> = (props) => {
    const {
        id,
        classNames,
        style,
        label,
        help,
        required,
        description,
        errors,
        children,
        displayLabel,
        readonly,
    } = props;

    return (
        <div className={twMerge(classNames)} style={style}>
            {displayLabel && label && (
                <Label htmlFor={id} className="mt-2">
                    {label} {required && !readonly ? "*" : ""}
                </Label>
            )}
            {description && <div className="mb-2 mt-1 text-t2 text-sm">{description}</div>}
            {children}
            {!props.hideError && errors && <ErrorText as="div">{errors}</ErrorText>}
            {help && <div>{help}</div>}
        </div>
    );
};
