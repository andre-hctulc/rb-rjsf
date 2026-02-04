import { mergeObjects, type IconButtonProps, type WidgetProps } from "@rjsf/utils";
import type { ChangeEvent, FocusEvent } from "react";
import { useUiSchema } from "./use-ui-schema";

/**
 * Other props that occur for some widget types.
 */
interface Others {
    errorSchema?: any;
    autocomplete?: any;
}

/**
 * @param emptyValue Used for controlled value initialization.
 */
export function inpWidgetProps(widgetProps: WidgetProps & Others, emptyValue: any) {
    const {
        // field specific ui schema
        // e.g. "some.field": { "ui:size": "sm", ... }
        uiSchema,
        defaultValue,
        hideLabel,
        hideError,
        readonly,
        formContext,
        autofocus,
        rawErrors,
        // options: Merged configuration object from multiple sources (in precedence order):
        // 1. JSON schema properties (enum, enumNames, etc.) - lowest precedence
        // 2. Widget defaults (built-in defaults for each widget type)
        // 3. uiSchema ui:options (from field-specific ui:options) - highest precedence
        // 4. Form-level props (readonly, disabled from JSONForm component)
        options,
        schema,
        autocomplete,
        errorSchema,
        ...inpProps
    } = widgetProps;
    const id = widgetProps.id;

    const { mergedUiSchema, fieldSchema: fieldSchema } = useUiSchema(formContext, uiSchema);

    return {
        rest: {
            uiSchema,
            defaultValue,
            hideLabel,
            hideError,
            formContext,
            rawErrors,
            schema,
            options,
            errorSchema,
        },
        inpProps: {
            autoComplete: autocomplete ?? "off",
            ...inpProps,
            value:
                widgetProps.value ??
                widgetProps.defaultValue ??
                fieldSchema["ui:defaultValue"] ??
                // options.emptyValue is undefined in most cases unless explicitly set, so we expect `emptyValue` param explicitly as fallback
                options.emptyValue ??
                emptyValue,
            defaultValue: undefined,
            readOnly: options.readonly ?? readonly,
            // flowbite uses "sizing" prop for form element sizes
            sizing: mergedUiSchema["ui:size"],
            onChange: (e: ChangeEvent<any>) => {
                widgetProps.onChange(e.currentTarget.value);
            },
            onBlur: (e: FocusEvent<any>) => {
                if ("value" in e.currentTarget) {
                    widgetProps.onBlur(id, e.currentTarget.value);
                }
            },
            onFocus: (e: FocusEvent<any>) => {
                if ("value" in e.currentTarget) {
                    widgetProps.onFocus(id, e.currentTarget.value);
                }
            },
        },
    };
}

export function iconTemplateProps(widgetProps: IconButtonProps) {
    const { uiSchema, defaultValue, ...iconBtnProps } = widgetProps;

    return {
        rest: {
            uiSchema,
            defaultValue,
        },
        iconBtnProps: { ...iconBtnProps, size: uiSchema?.["ui:size"] },
    };
}
