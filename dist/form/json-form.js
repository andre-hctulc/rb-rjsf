import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Form, { withTheme } from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { jsonFormTheme } from "./json-form-theme.js";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
const BaseForm = withTheme(jsonFormTheme);
/**
 * [rjsf](https://rjsf-team.github.io/react-jsonschema-form/docs/) based JSON form.
 *
 * ### Caveats
 * - `rjsf` defaults _additionalProperties_ to false for a strict approach to user input.
 */
export const JSONForm = ({ schema, className, value, defaultValue, submitButton, readOnly, disabled, ...formProps }) => {
    return (_jsx(_Fragment, { children: _jsx(BaseForm, { schema: schema || {}, validator: validator, className: twMerge("json-form", className), formData: value ?? defaultValue, uiSchema: { "ui:submitButtonOptions": { norender: !submitButton } }, 
            /*
            TODO readonly not working, but disabled does:
            Widgets not receiving readonly but disabled. Only field template receives readonly
            */
            readonly: readOnly, disabled: disabled, ...formProps, onChange: (e) => {
                console.log("JSONForm onChange", e);
                //alert(JSON.stringify(e.formData, null, 2));
            } }) }));
};
