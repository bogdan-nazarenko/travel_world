export interface PagePaths {
    main: {
        home: string;
        about: string;
        tours: string;
    };
    auth: {
        login: string;
        register: string;
    };
}

export interface IDValues {
    gallery: string;
}

export interface ClickProps {
    clickFunc?: () => void;
}

export interface LinkProps {
    linkClass?: string;
    url: string;
    linkName?: string;
}
