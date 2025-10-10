import { useState, type ReactNode } from "react";
import { PinV1, PinsDistance, People, Search } from "./vectors.tsx";
import "../../styles/elements/SearchBar.scss";

interface SearchItemProps {
    children: ReactNode;
    title: string;
    description: string;
}

const SearchItem = ({ children, title, description }: SearchItemProps) => {
    return (
        <div className="search__item">
            <div className="search__item__icon">{children}</div>
            <div className="search__item__wrap">
                <h3 className="search__title">{title}</h3>
                <div className="search__description">{description}</div>
            </div>
        </div>
    );
};

const SearchItemsGroup = () => {
    return (
        <>
            <SearchItem title="Location" description="Where are you going?">
                <PinV1 />
            </SearchItem>
            <SearchItem title="Distance" description="Distance k/m">
                <PinsDistance />
            </SearchItem>
            <SearchItem title="Max People" description="0">
                <People />
            </SearchItem>
        </>
    );
};

const SearchInput = () => {
    return (
        <input
            className="search__input"
            type="text"
            name="search"
            placeholder="Search..."
        />
    );
};

const SearchBar = () => {
    const [isInput, setInput] = useState(false);

    function showSearchInput(): void {
        if (isInput === false) {
            setInput(true);
        } else {
            setInput(false);
        }
    }

    return (
        <div className="search__bar">
            <div className="search__elements">
                {isInput ? <SearchInput /> : <SearchItemsGroup />}
            </div>

            <div className="search__button__wrap">
                <button
                    className="search__button"
                    style={{
                        backgroundColor: `var(${isInput ? "--primary-color" : "--secondary-color"})`,
                    }}
                    onClick={showSearchInput}
                >
                    <Search />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
