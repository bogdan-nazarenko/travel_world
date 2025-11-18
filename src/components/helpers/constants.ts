import type { PagePaths, IDValues } from "./interfaces.ts";

// modifiers
export const active: string = "active";
export const open: string = "open";

// colors
export const secondaryColor: string = "--secondary-color";
export const primaryColor: string = "--primary-color";
export const lightPinkColor: string = "--light-pink-color";

// objects
const pages: PagePaths = {
    main: {
        home: "/",
        about: "/about",
        tours: "/tours",
    },
    auth: {
        login: "/login",
        register: "/register",
    },
};

export const main = pages.main;
export const auth = pages.auth;

export const identifiers: IDValues = {
    gallery: "gallery",
};
