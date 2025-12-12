import Form from "@rjsf/core";
import type { JSONSchema7 } from "json-schema";
import type { PropsOf } from "@dre44/react-base";
import type { FC, Ref } from "react";
import type { RJSFSchema } from "@rjsf/utils";
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
/**
 * [rjsf](https://rjsf-team.github.io/react-jsonschema-form/docs/) based JSON form.
 *
 * ### Caveats
 * - `rjsf` defaults _additionalProperties_ to false for a strict approach to user input.
 */
export declare const JSONForm: FC<JSONFormProps>;
export {};
