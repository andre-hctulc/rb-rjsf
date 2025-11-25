import type { IconButtonProps, WidgetProps } from "@rjsf/utils";
import type { ChangeEvent, FocusEvent } from "react";

/**
 * @param emptyValue Used for controlled value initialization.
 */
export function inpWidgetProps(widgetProps: WidgetProps, emptyValue: any) {
    const {
        uiSchema,
        defaultValue,
        hideLabel,
        hideError,
        readonly,
        formContext,
        autofocus,
        rawErrors,
        options,
        schema,
        ...inpProps
    } = widgetProps;
    const id = widgetProps.id;

    return {
        rest: {
            uiSchema,
            defaultValue,
            hideLabel,
            hideError,
            formContext,
            rawErrors,
        },
        inpProps: {
            ...inpProps,
            value: widgetProps.value ?? widgetProps.defaultValue ?? emptyValue,
            defaultValue: undefined,
            readOnly: options.readonly ?? readonly,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
                widgetProps.onChange(e.currentTarget.value);
            },
            onBlur: (e: FocusEvent<HTMLInputElement>) => {
                if ("value" in e.currentTarget) {
                    widgetProps.onBlur(id, e.currentTarget.value);
                }
            },
            onFocus: (e: FocusEvent<HTMLInputElement>) => {
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
        iconBtnProps,
    };
}
