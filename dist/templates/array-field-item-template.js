import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toolbar } from "@dre44/react-base";
export const ArrayFieldItemTemplate = ({ registry, ...props }) => {
    const CopyButton = registry.templates.ButtonTemplates.CopyButton;
    const MoveUpButton = registry.templates.ButtonTemplates.MoveUpButton;
    const MoveDownButton = registry.templates.ButtonTemplates.MoveDownButton;
    const RemoveButton = registry.templates.ButtonTemplates.RemoveButton;
    return (_jsxs("div", { className: props.className, children: [props.hasToolbar && (_jsxs(Toolbar, { justifyContent: "end", className: "mt-3", gap: "xs", children: [props.hasCopy && (_jsx(CopyButton, { registry: registry, onClick: () => {
                            const copy = props.onCopyIndexClick(props.index);
                            copy();
                        } })), props.hasMoveDown && (_jsx(MoveDownButton, { registry: registry, onClick: () => {
                            const moveDown = props.onReorderClick(props.index, props.index + 1);
                            moveDown();
                        } })), props.hasMoveUp && (_jsx(MoveUpButton, { registry: registry, onClick: () => {
                            const moveUp = props.onReorderClick(props.index, props.index - 1);
                            moveUp();
                        } })), props.hasRemove && (_jsx(RemoveButton, { registry: registry, onClick: () => {
                            const remove = props.onDropIndexClick(props.index);
                            remove();
                        } }))] })), props.children] }));
};
