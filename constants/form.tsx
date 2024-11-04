export type MenuForm = {
    id: number
    name: string,
    link: string
}

export const NAVBAR_FORM: MenuForm[] = [
    {
        id: 1,
        name: "Swap",
        link: "/"
    },
    {
        id: 2,
        name: "Tokens",
        link: "/tokens"
    },
    {
        id: 3,
        name: "Pools",
        link: "/pools"
    }
]