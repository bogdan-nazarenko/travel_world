import { mainLinks, authLinks } from "./links";

export const mainPaths: string[] = mainLinks.map((link) => link.url);
export const authPaths: string[] = authLinks.map((link) => link.url);
