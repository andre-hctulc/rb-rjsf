import { jsxs as _jsxs } from "react/jsx-runtime";
import { Subtitle } from "@dre44/react-base";
export const TitleFieldTemplate = (props) => {
    const { title, id } = props;
    return (_jsxs(Subtitle, { id: id, variant: "h3", mt: "sm", children: [title, " ", props.required && "*"] }));
};
