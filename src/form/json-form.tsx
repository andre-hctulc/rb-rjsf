"use client";

import Form, { withTheme } from "@rjsf/core";
import type { JSONSchema7 } from "json-schema";
import type { PropsOf } from "@dre44/react-base";
import { jsonFormTheme } from "./json-form-theme.js";
import type { FC } from "react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import validator from "@rjsf/validator-ajv8";

type FormProps = PropsOf<typeof Form>;
export type BaseFormProps = Omit<FormProps, "schema" | "formData" | "validator">;

interface JSONFormProps<D = any> extends BaseFormProps {
    schema: JSONSchema7;
    defaultValue?: D;
    value?: D;
    className?: string;
    /**
     * Render submit button?
     * @default false
     */
    submitButton?: boolean;
    liveValidate?: boolean;
}

const ThemedForm = withTheme(jsonFormTheme);

/**
 * *react-base* [rjsf](https://rjsf-team.github.io/react-jsonschema-form/docs/) implementation.
 */
export const JSONForm: FC<JSONFormProps> = ({
    schema,
    className,
    value,
    defaultValue,
    submitButton,
    uiSchema,
    formContext,
    ...formProps
}) => {
    return (
        <ThemedForm
            schema={schema || {}}
            className={twMerge("RBF_Form", className)}
            formData={value ?? defaultValue}
            uiSchema={{
                ...uiSchema,
                "ui:submitButtonOptions": {
                    norender: !submitButton,
                    ...uiSchema?.["ui:submitButtonOptions"],
                },
            }}
            formContext={{
                ...formContext,
                rootUiSchema: uiSchema,
            }}
            validator={validator}
            {...formProps}
        />
    );
};
