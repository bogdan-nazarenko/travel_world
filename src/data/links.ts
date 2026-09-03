import { type TourLinkProps } from "@ui/components/TourLink";
import { tourCatalog } from "@data/images";

export interface NavLink {
    targetId?: string;
    url: string;
    name: string;
}

export const mainLinks: NavLink[] = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/tours", name: "Tours" },
] as const;

export const authLinks: NavLink[] = [
    { url: "/login", name: "Login" },
    { url: "/register", name: "Register" },
] as const;

export const tourLinkData: TourLinkProps[] = [
    {
        url: "#",
        image: tourCatalog.london,
        title: "Big Ben",
        location: "London",
    },
    {
        url: "#",
        image: tourCatalog.dubai,
        title: "Dubai",
        location: "UAE",
    },
    {
        url: "#",
        image: tourCatalog.bali,
        title: "Bali",
        location: "Indonesia",
    },
    {
        url: "#",
        image: tourCatalog.phetchabun,
        title: "Phetchabun",
        location: "Thailand",
    },
    {
        url: "#",
        image: tourCatalog.sydney,
        title: "Sydney",
        location: "Australia",
    },
    {
        url: "#",
        image: tourCatalog.paris,
        title: "Paris",
        location: "France",
    },
    {
        url: "#",
        image: tourCatalog.wuxi,
        title: "Wuxi",
        location: "China",
    },
    {
        url: "#",
        image: tourCatalog.maafushi,
        title: "Maafushi Island",
        location: "Maldives",
    },
    {
        url: "#",
        image: tourCatalog.phiphi,
        title: "Phi Phi Island",
        location: "Thailand",
    },
    {
        url: "#",
        image: tourCatalog.elNido,
        title: "El Nido",
        location: "Philippines",
    },
] as const;
