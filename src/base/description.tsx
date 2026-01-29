import type { ComponentProps, FC } from "react";

export const Description: FC<ComponentProps<"p">> = ({ className, children, ...props }) => {
    if (!children) {
        return null;
    }

    return (
        <p className="text-xs text-t3" {...props}>
            {children}
        </p>
    );
};
