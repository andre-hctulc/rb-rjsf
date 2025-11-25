import Form, { withTheme } from "@rjsf/core";
import type { JSONSchema7 } from "json-schema";
import validator from "@rjsf/validator-ajv8";
import type { PropsOf } from "@dre44/react-base";
import { jsonFormTheme } from "./json-form-theme.js";
import type { FC, Ref } from "react";
import type { RJSFSchema } from "@rjsf/utils";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";

type FormProps = PropsOf<typeof Form>;

export type JSONFormRef = Form<any, RJSFSchema, any>;

export type JSONFormChangeHandler = FormProps["onChange"];
export type JSONFormChangeEvent = Parameters<Exclude<JSONFormChangeHandler, undefined>>[0];

export type JSONFormSubmitHandler = FormProps["onSubmit"];
export type JSONFormSubmitEvent = Parameters<Exclude<JSONFormChangeHandler, undefined>>[0];

export type JSONFormErrorHandler = FormProps["onError"];

export type JSONFormFocusHandler = FormProps["onFocus"];

export type JSONFormBlurHandler = FormProps["onBlur"];

interface JSONFormProps<D = any> {
    schema: JSONSchema7;
    defaultValue?: D;
    value?: D;
    onSubmit?: JSONFormSubmitHandler;
    onChange?: JSONFormChangeHandler;
    onError?: JSONFormErrorHandler;
    onFocus?: JSONFormFocusHandler;
    onBlur?: JSONFormBlurHandler;
    className?: string;
    readOnly?: boolean;
    disabled?: boolean;
    submitButton?: boolean;
    liveValidate?: boolean;
    ref?: Ref<JSONFormRef>;
    id?: string;
}

const BaseForm = withTheme(jsonFormTheme);

/**
 * [rjsf](https://rjsf-team.github.io/react-jsonschema-form/docs/) based JSON form.
 *
 * ### Caveats
 * - `rjsf` defaults _additionalProperties_ to false for a strict approach to user input.
 */
export const JSONForm: FC<JSONFormProps> = ({
    schema,
    className,
    value,
    defaultValue,
    submitButton,
    readOnly,
    disabled,
    ...formProps
}) => {
    return (
        <>
            <BaseForm
                schema={schema || {}}
                validator={validator}
                className={twMerge("json-form", className)}
                formData={value ?? defaultValue}
                uiSchema={{ "ui:submitButtonOptions": { norender: !submitButton } }}
                /* 
                TODO readonly not working, but disabled does:
                Widgets not receiving readonly but disabled. Only field template receives readonly 
                */
                readonly={readOnly}
                disabled={disabled}
                {...formProps}
                onChange={(e) => {
                    console.log("JSONForm onChange", e);
                    //alert(JSON.stringify(e.formData, null, 2));
                }}
            />
        </>
    );
};
