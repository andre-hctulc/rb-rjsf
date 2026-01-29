import type { ThemeProps } from "@rjsf/core";
import { TextWidget } from "../widgets/text-widget.js";
import { CheckboxWidget } from "../widgets/checkbox-widget.js";
import { SelectWidget } from "../widgets/select-widget.js";
import { TextareaWidget } from "../widgets/textarea-widget.js";
import { ArrayFieldTemplate } from "../templates/array-field-template.js";
import { ObjectFieldTemplate } from "../templates/object-field-template.js";
import {
    AddButtonTemplate,
    CopyButtonTemplate,
    MoveDownButtonTemplate,
    MoveUpButtonTemplate,
    RemoveButtonTemplate,
    SubmitButtonTemplate,
} from "../templates/button-templates.js";
import { FieldTemplate } from "../templates/field-template.js";
import { ArrayFieldItemTemplate } from "../templates/array-field-item-template.js";
import { ErrorListTemplate } from "../templates/error-list-template.js";
import { TitleFieldTemplate } from "../templates/title-field-template.js";
import { DescriptionFieldTemplate } from "../templates/description-field-template.js";
import { FieldErrorTemplate } from "../templates/field-error-template.js";

export const jsonFormTheme: ThemeProps = {
    // Input Components
    // SEE https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields/
    widgets: {
        TextWidget,
        TextareaWidget,
        CheckboxWidget,
        SelectWidget,
    },
    // Base Templates
    // SEE https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-templates
    templates: {
        // Errors
        ErrorListTemplate,
        // Array
        ArrayFieldTemplate,
        ArrayFieldItemTemplate,
        // TODO ArrayFieldDescriptionTemplate,
        // Object
        ObjectFieldTemplate,
        // Title
        TitleFieldTemplate,
        // Description
        DescriptionFieldTemplate,
        // ArrayFieldDescriptionTemplate,
        FieldErrorTemplate,
        // Field
        FieldTemplate,
        // Buttons
        ButtonTemplates: {
            AddButton: AddButtonTemplate,
            MoveDownButton: MoveDownButtonTemplate,
            CopyButton: CopyButtonTemplate,
            MoveUpButton: MoveUpButtonTemplate,
            RemoveButton: RemoveButtonTemplate,
            SubmitButton: SubmitButtonTemplate,
        },
    },
    // Composition of Fields and Widgets
    // SEE https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields
    fields: {},
};
