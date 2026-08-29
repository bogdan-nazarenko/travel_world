import { useNavigate } from "react-router";
import { PinV1, PinDistance, People, Search } from "./vectors";
import "./SearchWidget.scss";

interface SearchItem {
    icon: () => React.ReactNode;
    label: string;
    id: string;
    type: string;
    min?: number;
    max?: number;
    placeholder: string;
}

const searchItems: SearchItem[] = [
    {
        icon: PinV1,
        label: "Location",
        id: "location",
        type: "text",
        placeholder: "Where are you going?",
    },
    {
        icon: PinDistance,
        label: "Distance",
        id: "distance",
        type: "number",
        min: 0,
        max: 5000,
        placeholder: "Distance k/m",
    },
    {
        icon: People,
        label: "Max People",
        id: "max-people",
        type: "number",
        min: 0,
        max: 100,
        placeholder: "0",
    },
];

const SearchWidget = ({ className = "" }: { className?: string }) => {
    const navigate = useNavigate();

    function searchByKeys(event: React.SubmitEvent<HTMLFormElement>): void {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const params = new URLSearchParams();

        for (let i: number = 0; i < searchItems.length; i++) {
            const id: string = searchItems[i].id;
            const value: string | undefined = data.get(id)?.toString();

            if (value) params.append(id, value);
        }

        navigate(`/results?${params.toString()}`);
    }

    return (
        <search className={`${className} search-widget`.trim()}>
            <form className="search-widget__form" onSubmit={searchByKeys}>
                {searchItems.map((item) => {
                    const Icon = item.icon;
                    const { label, id, type, min, max, placeholder } = item;

                    return (
                        <div className="search-widget__item" key={id}>
                            <Icon />
                            <div className="search-widget__content">
                                <label
                                    className="search-widget__label"
                                    htmlFor={id}
                                >
                                    {label}
                                </label>
                                <input
                                    className="search-widget__field"
                                    id={id}
                                    type={type}
                                    name={id}
                                    min={min}
                                    max={max}
                                    placeholder={placeholder}
                                    required
                                />
                            </div>
                        </div>
                    );
                })}
                <div className="search-widget__submition">
                    <button
                        className="search-widget__button"
                        aria-label="Search"
                        type="submit"
                    >
                        <Search />
                    </button>
                </div>
            </form>
        </search>
    );
};

export default SearchWidget;
