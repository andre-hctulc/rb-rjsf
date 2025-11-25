import type { ArrayFieldTemplateProps } from "@rjsf/utils";
import { Button } from "flowbite-react";
import type { FC } from "react";

export const ArrayFieldTemplate: FC<ArrayFieldTemplateProps> = (props) => {
    const ArrayFieldItemTemplate = props.registry.templates.ArrayFieldItemTemplate;

    return (
        <div className={props.className}>
            {props.items.map((element) => (
                <ArrayFieldItemTemplate {...element} key={element.key} />
            ))}
            {props.canAdd && (
                <Button
                    className="mt-4 ml-auto"
                    size="sm"
                    type="button"
                    onClick={props.onAddClick}
                    color="primary"
                >
                    Add Item
                </Button>
            )}
        </div>
    );
};
