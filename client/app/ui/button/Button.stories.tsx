import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta: Meta <typeof Button> = {
    title: "Example/Button",
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonHTMLAttributes: Story = {
    args: {
        children: "Button",
    },
};

