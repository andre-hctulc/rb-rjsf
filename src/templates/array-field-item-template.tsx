import { Toolbar } from "@dre44/react-base";
import type { ArrayFieldTemplateItemType } from "@rjsf/utils";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import type { FC } from "react";
import { ContextBox } from "../base/context-box";

export const ArrayFieldItemTemplate: FC<ArrayFieldTemplateItemType> = ({
    registry,
    index,
    className,
    hasToolbar,
    hasCopy,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    onCopyIndexClick,
    onReorderClick,
    onAddIndexClick,
    onDropIndexClick,
    canAdd,
    children,
    schema,
    totalItems,
    disabled,
    readonly,
    uiSchema,
}) => {
    const CopyButton = registry.templates.ButtonTemplates.CopyButton;
    const MoveUpButton = registry.templates.ButtonTemplates.MoveUpButton;
    const MoveDownButton = registry.templates.ButtonTemplates.MoveDownButton;
    const RemoveButton = registry.templates.ButtonTemplates.RemoveButton;
    const btnProps = { uiSchema: { "ui:size": "xs" } };

    return (
        <ContextBox className={twMerge("", className)} uiSchema={uiSchema} formContext={registry.formContext}>
            {hasToolbar && (
                <Toolbar justifyContent="end" className="mt-3" gap="xs">
                    {hasCopy && (
                        <CopyButton
                            registry={registry}
                            onClick={() => {
                                const copy = onCopyIndexClick(index);
                                copy();
                            }}
                            {...btnProps}
                        />
                    )}
                    {hasMoveDown && (
                        <MoveDownButton
                            registry={registry}
                            onClick={() => {
                                const moveDown = onReorderClick(index, index + 1);
                                moveDown();
                            }}
                            {...btnProps}
                        />
                    )}
                    {hasMoveUp && (
                        <MoveUpButton
                            registry={registry}
                            onClick={() => {
                                const moveUp = onReorderClick(index, index - 1);
                                moveUp();
                            }}
                            {...btnProps}
                        />
                    )}
                    {hasRemove && (
                        <RemoveButton
                            registry={registry}
                            onClick={() => {
                                const remove = onDropIndexClick(index);
                                remove();
                            }}
                            {...btnProps}
                        />
                    )}
                </Toolbar>
            )}
            {children}
        </ContextBox>
    );
};
