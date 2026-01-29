import { ErrorText, Subtitle } from "@dre44/react-base";
import type { ErrorListProps, FieldErrorProps } from "@rjsf/utils";
import type { FC } from "react";

export const FieldErrorTemplate: FC<FieldErrorProps> = ({
    errorSchema,
    errors,
    registry,
    schema,
    uiSchema,
    idSchema,
}) => {
    if (!errors?.length) {
        return null;
    }

    return (
        <details className="mb-4">
            <summary className="cursor-pointer select-none">
                <Subtitle<"span"> as="span" variant="h4">
                    Errors ({errors.length})
                </Subtitle>
            </summary>
            <ul className="pt-1">
                {errors.map((error, i) => {
                    return (
                        <li key={i} className="error">
                            <ErrorText>{error}</ErrorText>
                        </li>
                    );
                })}
            </ul>
        </details>
    );
};
