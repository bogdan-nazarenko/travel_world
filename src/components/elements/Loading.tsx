import "../../styles/elements/Loading.scss";

const Loading = () => {
    return (
        <svg
            className="loading"
            width="100"
            height="90"
            viewBox="-11 -10.13 100 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="39" cy="34.87" r="9.5238" />
            <g strokeWidth="4.7619">
                <ellipse cx="39" cy="34.87" rx="47.619" ry="21.429" />
                <ellipse
                    transform="rotate(60)"
                    cx="49.698"
                    cy="-16.34"
                    rx="47.619"
                    ry="21.429"
                />
                <ellipse
                    transform="rotate(120)"
                    cx="10.698"
                    cy="-51.21"
                    rx="47.619"
                    ry="21.429"
                />
            </g>
        </svg>
    );
};

export default Loading;
