import { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Breadcrumbs } from "./Breadcrumbs"

const meta: Meta<typeof Breadcrumbs> = {
    title: "Example/Breadcrumbs",
    component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>


export default meta

type Story = StoryObj<typeof meta>

export const BreadcrumbsHTMLAttributes: Story = {
    args: {
        breadcrumbs: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Invoices",
                href: "/invoices",
            }, 
            {
                label: "Invoice #123",
                href: "/invoices/123",
                active: true,
            }
        ]
    },
}