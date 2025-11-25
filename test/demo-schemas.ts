import type { JSONSchema7 } from "json-schema";

const demoSchema: JSONSchema7 = {
    type: "object",
    properties: {
        name: {
            type: "string",
            title: "Name",
            description: "Your name",
        },
        age: {
            type: "integer",
            title: "Age",
            description: "Your age",
        },
    },
};

export const arrayDemo: JSONSchema7 = {
    title: "Items",
    description: "Items description",
    type: "array",
    items: demoSchema,
};
