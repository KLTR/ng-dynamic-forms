import {
    DynamicFormModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicSelectModel,
    DynamicRadioGroupModel,
    DynamicTextAreaModel,
} from "@ng2-dynamic-forms/core";

export const FOUNDATION_EXAMPLE_MODEL: DynamicFormModel = new DynamicFormModel([

    new DynamicSelectModel<string>(
        {
            id: "bootstrapSelect",
            label: {
                text: "Example Select"
            },
            options: [
                {
                    text: "Option 1",
                    value: "option-1",
                },
                {
                    disabled: true,
                    text: "Option 2",
                    value: "option-2"
                },
                {
                    text: "Option 3",
                    value: "option-3"
                },
                {
                    text: "Option 4",
                    value: "option-4"
                }
            ],
            value: "option-3"
        },
        {

        }
    ),

    new DynamicInputModel(
        {
            help: "Just a sample help text",
            id: "bootstrapInput",
            label: {
                text: "Example Input"
            },
            maxLength: 51,
            placeholder: "example input",
            prefix: "Prefix",
            suffix: "Suffix"
        },
        {

        }
    ),

    new DynamicRadioGroupModel<string>(
        {
            id: "bootstrapRadioGroup",
            label: {
                text: "Example Radio Group"
            },
            options: [
                {
                    text: "Option 1",
                    value: "option-1",
                },
                {
                    disabled: true,
                    text: "Option 2",
                    value: "option-2"
                },
                {
                    text: "Option 3",
                    value: "option-3"
                },
                {
                    text: "Option 4",
                    value: "option-4"
                }
            ],
            value: "option-3"
        },
        {

        }
    ),

    new DynamicTextAreaModel(
        {
            id: "bootstrapTextArea",
            label: {
                text: "Example Textarea"
            },
            rows: 5,
            placeholder: "example Textarea",
        },
        {
            grid: {
                control: "col-sm-9",
                label: "col-sm-3"
            },
            label: "control-label"
        }
    ),

    new DynamicCheckboxModel(
        {
            id: "bootstrapCheckbox",
            label: {
                text: "I do agree"
            }
        },
        {

        }
    )
]);