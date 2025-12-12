/**
 * @param emptyValue Used for controlled value initialization.
 */
export function inpWidgetProps(widgetProps, emptyValue) {
    const { uiSchema, defaultValue, hideLabel, hideError, readonly, formContext, autofocus, rawErrors, options, schema, ...inpProps } = widgetProps;
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
            onChange: (e) => {
                widgetProps.onChange(e.currentTarget.value);
            },
            onBlur: (e) => {
                if ("value" in e.currentTarget) {
                    widgetProps.onBlur(id, e.currentTarget.value);
                }
            },
            onFocus: (e) => {
                if ("value" in e.currentTarget) {
                    widgetProps.onFocus(id, e.currentTarget.value);
                }
            },
        },
    };
}
export function iconTemplateProps(widgetProps) {
    const { uiSchema, defaultValue, ...iconBtnProps } = widgetProps;
    return {
        rest: {
            uiSchema,
            defaultValue,
        },
        iconBtnProps,
    };
}
