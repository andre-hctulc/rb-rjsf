import { TextWidget } from "../widgets/text-widget.js";
import { CheckboxWidget } from "../widgets/checkbox-widget.js";
import { ArrayFieldTemplate } from "../templates/array-field-template.js";
import { AddButtonTemplate, CopyButtonTemplate, MoveDownButtonTemplate, MoveUpButtonTemplate, RemoveButtonTemplate, SubmitButtonTemplate, } from "../templates/button-templates.js";
import { FieldTemplate } from "../templates/field-template.js";
import { ArrayFieldItemTemplate } from "../templates/array-field-item-template.js";
import { TitleFieldTemplate } from "../templates/title-field-template.js";
import { ErrorListTemplate } from "../templates/error-list-template.js";
export const jsonFormTheme = {
    // SEE https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-widgets-fields/
    widgets: {
        TextWidget: TextWidget,
        CheckboxWidget: CheckboxWidget,
    },
    // SEE https://rjsf-team.github.io/react-jsonschema-form/docs/advanced-customization/custom-templates
    templates: {
        // Errors
        ErrorListTemplate: ErrorListTemplate,
        // Array
        ArrayFieldTemplate: ArrayFieldTemplate,
        ArrayFieldItemTemplate: ArrayFieldItemTemplate,
        // Title
        TitleFieldTemplate: TitleFieldTemplate,
        // Field
        FieldTemplate: FieldTemplate,
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
};
