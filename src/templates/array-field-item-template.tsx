import { Toolbar } from "@dre44/react-base";
import type { ArrayFieldTemplateItemType } from "@rjsf/utils";
import type { FC } from "react";

export const ArrayFieldItemTemplate: FC<ArrayFieldTemplateItemType> = ({ registry, ...props }) => {
    const CopyButton = registry.templates.ButtonTemplates.CopyButton;
    const MoveUpButton = registry.templates.ButtonTemplates.MoveUpButton;
    const MoveDownButton = registry.templates.ButtonTemplates.MoveDownButton;
    const RemoveButton = registry.templates.ButtonTemplates.RemoveButton;

    return (
        <div className={props.className}>
            {props.hasToolbar && (
                <Toolbar justifyContent="end" className="mt-3" gap="xs">
                    {props.hasCopy && (
                        <CopyButton
                            registry={registry}
                            onClick={() => {
                                const copy = props.onCopyIndexClick(props.index);
                                copy();
                            }}
                        />
                    )}
                    {props.hasMoveDown && (
                        <MoveDownButton
                            registry={registry}
                            onClick={() => {
                                const moveDown = props.onReorderClick(props.index, props.index + 1);
                                moveDown();
                            }}
                        />
                    )}
                    {props.hasMoveUp && (
                        <MoveUpButton
                            registry={registry}
                            onClick={() => {
                                const moveUp = props.onReorderClick(props.index, props.index - 1);
                                moveUp();
                            }}
                        />
                    )}
                    {props.hasRemove && (
                        <RemoveButton
                            registry={registry}
                            onClick={() => {
                                const remove = props.onDropIndexClick(props.index);
                                remove();
                            }}
                        />
                    )}
                </Toolbar>
            )}
            {props.children}
        </div>
    );
};
