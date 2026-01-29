import { mergeObjects, type UiSchema } from "@rjsf/utils";
import { useMemo } from "react";

interface UseUiSchemaResult {
    mergedUiSchema: UiSchema;
    fieldSchema: UiSchema;
}

/**
 * Merges the root UI schema from the form context with the field-specific UI schema.
 * This is a custom behavior of the react-base RJSF implementation. By default the root schema only targets root level fields.
 */
export function useUiSchema(formContext: any, fieldSchema: UiSchema | undefined): UseUiSchemaResult {
    const mergedUiSchema = useMemo(
        () => mergeObjects(formContext?.rootUiSchema ?? {}, fieldSchema ?? {}),
        [formContext?.rootUiSchema, fieldSchema],
    );
    return { mergedUiSchema, fieldSchema: fieldSchema ?? {} };
}
