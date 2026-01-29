import type { FieldTemplateProps } from "@rjsf/utils";
import { Label } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import type { FC } from "react";
import { ContextBox } from "../base/context-box";

export const FieldTemplate: FC<FieldTemplateProps> = ({
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
    hideError,
    disabled,
    onChange,
    onDropPropertyClick,
    onKeyChange,
    registry,
    schema,
    uiSchema,
    formData,
    formContext,
    hidden,
    rawDescription,
    rawErrors,
    rawHelp,
}) => {
    /**
     * Checkboxes require a special layout because checkboxes render labels themselves and
     * this does not receive the label for checkboxes
     */
    const isCheckbox = schema.type === "boolean";
    /**
     * _minimal_ means that we are in a nested context e.g. obj property or array property.
     * In this case we do not display the description or the label. These are rendered by the object/array field instead.
     *
     * rxjs does not pass a label in these cases.
     * But tt also does not pass labels for checkboxes because checkboxes render labels themselves, this must be checked.
     */
    const minimal = (displayLabel === false || !label) && !isCheckbox;

    return (
        <ContextBox
            className={twMerge(hidden && "hidden", classNames)}
            style={style}
            uiSchema={uiSchema}
            formContext={formContext}
        >
            {!minimal && !isCheckbox && (
                <Label htmlFor={id} className="">
                    {label} {required && "*"}
                </Label>
            )}
            {!minimal && !isCheckbox && description}
            {children}
            {isCheckbox && description}
            {!hideError && errors && help}
            {help}
        </ContextBox>
    );
};
