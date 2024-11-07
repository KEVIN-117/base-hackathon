import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./CreateForm";

const meta: Meta<typeof Form> = {
    title: "Create Form",
    component: Form,
    args: {},
    tags: ['autodocs'],
}


export default meta;

type story = StoryObj<typeof meta>

export const CreateForm: story = {
    args: {
        customers: [
            {
                id: '1',
                name: "John Doe"
            },
            {
                id: '2',
                name: "Jane Doe"
            },
            {
                id: '3',
                name: "John Smith"
            }
        ]
    }
}