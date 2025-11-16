import type { PagePaths, IDValues } from "./interfaces.ts";

// modifiers
export const active: string = "active";
export const open: string = "open";

// colors
export const secondaryColor: string = "--secondary-color";
export const primaryColor: string = "--primary-color";
export const lightPinkColor: string = "--light-pink-color";

// objects
export const pages: PagePaths = {
    home: "/",
    about: "/about",
    tours: "/tours",
    login: "/login",
    register: "/register",
};

export const identifiers: IDValues = {
    gallery: "gallery",
};
