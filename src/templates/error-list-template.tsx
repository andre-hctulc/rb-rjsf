import { ErrorText, Subtitle } from "@dre44/react-base";
import type { ErrorListProps } from "@rjsf/utils";
import type { FC } from "react";

export const ErrorListTemplate: FC<ErrorListProps> = (props) => {
    const { errors } = props;

    if (!errors.length) {
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
                            <ErrorText>{error.stack}</ErrorText>
                        </li>
                    );
                })}
            </ul>
        </details>
    );
};
