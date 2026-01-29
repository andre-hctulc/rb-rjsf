import type { UiSchema } from "@rjsf/utils";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import type { ComponentProps, FC } from "react";
import { useUiSchema } from "../form/use-ui-schema";

type ContextBoxProps = ComponentProps<"div" | "ul"> & {
    lg?: boolean;
    indent?: boolean;
    list?: boolean;
    uiSchema: UiSchema | undefined;
    formContext: any;
};

export const ContextBox: FC<ContextBoxProps> = ({
    className,
    children,
    lg,
    indent,
    list,
    uiSchema,
    formContext,
    ...props
}) => {
    const Comp: any = list ? "ul" : "div";
    const { mergedUiSchema, fieldSchema } = useUiSchema(formContext, uiSchema);
    const size = mergedUiSchema?.["ui:size"];
    const smMode = size === "sm" || size === "xs";

    return (
        <Comp
            className={twMerge(
                "flex flex-col",
                lg ? (smMode ? "gap-2" : "gap-4") : smMode ? "gap-1" : "gap-2",
                indent && "border-transparent border-l-[0.5px] hover:border-divider ml-2 pl-2",
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    );
};
