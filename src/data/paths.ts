import { mainLinks, authLinks } from "./links";

export const mainPaths: readonly string[] = mainLinks.map((link) => link.url);
export const authPaths: readonly string[] = authLinks.map((link) => link.url);
