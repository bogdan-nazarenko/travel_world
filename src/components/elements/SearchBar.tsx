import { useState, useRef } from "react";
import { secondaryColor, primaryColor } from "../helpers/constants.ts";
import { PinV1, PinsDistance, People, Search } from "./vectors.tsx";
import "../../styles/elements/SearchBar.scss";

interface SearchItemProps {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const searchItemProps: SearchItemProps[] = [
    { icon: <PinV1 />, title: "Location", description: "Where are you going?" },
    { icon: <PinsDistance />, title: "Distance", description: "Distance k/m" },
    { icon: <People />, title: "Max People", description: "0" },
];

const SearchItemsGroup = () => {
    return (
        <>
            {searchItemProps.map((props) => {
                const { icon, title, description } = props;

                return (
                    <div key={title} className="search__item">
                        <div className="search__item__icon">{icon}</div>
                        <div className="search__item__wrap">
                            <h2 className="search__title">{title}</h2>
                            <div className="search__description">
                                {description}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

const SearchInput = () => {
    const searchRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState("");

    function clearInput(): void {
        const search = searchRef.current;

        if (search) {
            search.value = "";
            setInputValue("");
        }
    }

    return (
        <>
            <input
                className="search__input"
                ref={searchRef}
                type="search"
                name="search"
                placeholder="Search..."
                onChange={(event) => setInputValue(event.target.value)}
            />
            {inputValue && (
                <button
                    className="search__clear__button"
                    onClick={clearInput}
                ></button>
            )}
        </>
    );
};

const SearchBar = () => {
    const [isInput, setInput] = useState(false);

    return (
        <div className="search__bar">
            <div className="search__elements">
                {isInput ? <SearchInput /> : <SearchItemsGroup />}
            </div>

            <div className="search__button__wrap">
                <button
                    className="search__button"
                    style={{
                        backgroundColor: `var(${isInput ? primaryColor : secondaryColor})`,
                    }}
                    onClick={() => setInput(!isInput)}
                >
                    <Search />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
