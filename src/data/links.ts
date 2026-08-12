interface NavLink {
    url: string;
    name: string;
}

export const mainLinks: NavLink[] = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/tours", name: "Tours" },
];

export const authLinks: NavLink[] = [
    {
        url: "/login",
        name: "Login",
    },
    {
        url: "/register",
        name: "Register",
    },
];
