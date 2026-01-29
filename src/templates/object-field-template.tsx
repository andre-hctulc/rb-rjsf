import type { ObjectFieldTemplateProps } from "@rjsf/utils";
import type { FC } from "react";
import { ContextBox } from "../base/context-box";
import { LabelMimic } from "@dre44/react-base";
import { Description } from "../base/description";

export const ObjectFieldTemplate: FC<ObjectFieldTemplateProps> = ({
    description,
    title,
    properties,
    required,
    disabled,
    readonly,
    uiSchema,
    idSchema,
    schema,
    formData,
    onAddClick,
    registry,
    errorSchema,
    formContext,
    hideError,
}) => {
    const isRoot = idSchema.$id === "root";

    return (
        <ContextBox formContext={formContext} uiSchema={uiSchema}>
            {title && (
                <LabelMimic>
                    {title}
                    {required && "*"}
                </LabelMimic>
            )}
            {description && <Description>{description}</Description>}
            {!!properties.length && (
                <ContextBox list indent={!isRoot} lg uiSchema={uiSchema} formContext={formContext}>
                    {properties.map((prop) => {
                        return <li key={prop.name}>{prop.content}</li>;
                    })}
                </ContextBox>
            )}
        </ContextBox>
    );
};
