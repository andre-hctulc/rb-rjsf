import { Subtitle } from "@dre44/react-base";
import type { TitleFieldProps } from "@rjsf/utils";
import type { FC } from "react";

export const TitleFieldTemplate: FC<TitleFieldProps> = (props) => {
    const { title, id } = props;

    return (
        <Subtitle id={id} variant="h3" mt="sm">
            {title} {props.required && "*"}
        </Subtitle>
    );
};
