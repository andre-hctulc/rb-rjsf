import { GhostButton, LabelMimic } from "@dre44/react-base";
import type { ArrayFieldTemplateProps } from "@rjsf/utils";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import type { FC } from "react";
import { ContextBox } from "../base/context-box";
import { Description } from "../base/description";

export const ArrayFieldTemplate: FC<ArrayFieldTemplateProps> = ({
    registry,
    className,
    items,
    canAdd,
    onAddClick,
    hideError,
    rawErrors,
    readonly,
    title,
    disabled,
    required,
    schema,
    formData,
    uiSchema,
    idSchema,
    errorSchema,
    formContext,
}) => {
    const isRoot = idSchema.$id === "root";
    const ArrayFieldItemTemplate = registry.templates.ArrayFieldItemTemplate;
    const label = title || schema.title;
    const description = schema.description;

    return (
        <ContextBox uiSchema={uiSchema} formContext={formContext}>
            {label && (
                <LabelMimic className="">
                    {label} {required && "*"}
                </LabelMimic>
            )}
            {description && <Description>{description}</Description>}
            {!!items.length && (
                <ContextBox lg indent={!isRoot} list uiSchema={uiSchema} formContext={formContext}>
                    {items.map((element) => (
                        <li key={element.key}>
                            <ArrayFieldItemTemplate {...element} key={element.key} />
                        </li>
                    ))}
                </ContextBox>
            )}
            {canAdd && !readonly && !disabled && (
                <GhostButton
                    className="self-start"
                    disabled={disabled}
                    size="xs"
                    type="button"
                    onClick={onAddClick}
                >
                    Add Item
                </GhostButton>
            )}
            {/* {!hideError && rawErrors && <ErrorText as="div">{rawErrors.join()}</ErrorText>} */}
        </ContextBox>
    );
};
