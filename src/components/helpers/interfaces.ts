export interface PagePaths {
    home: string;
    about: string;
    tours: string;
    login: string;
    register: string;
}

export interface ClickProps {
    clickFunc?: () => void;
}

export interface LinkProps {
    linkClass?: string;
    url: string;
    linkName?: string;
}
