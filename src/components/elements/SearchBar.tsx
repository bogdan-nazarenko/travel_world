import { useState } from "react";
import { PinV1, PinsDistance, People, Search } from "./vectors.tsx";
import "../../styles/elements/SearchBar.scss";

const SearchBar = () => {
    const [isInput, setInput] = useState(false);

    function showSearchInput(): void {
        if (isInput === false) {
            setInput(true);
        } else {
            setInput(false);
        }
    }

    const SearchItems = () => {
        return (
            <>
                <div className="search__item">
                    <div className="search__item__icon">
                        <PinV1 />
                    </div>
                    <div className="search__item__wrap">
                        <h3 className="search__title">Location</h3>
                        <div className="search__description">
                            Where are you going?
                        </div>
                    </div>
                </div>
                <div className="search__item">
                    <div className="search__item__icon">
                        <PinsDistance />
                    </div>
                    <div className="search__item__wrap">
                        <h3 className="search__title">Distance</h3>
                        <div className="search__description">Distance k/m</div>
                    </div>
                </div>
                <div className="search__item">
                    <div className="search__item__icon">
                        <People />
                    </div>
                    <div className="search__item__wrap">
                        <h3 className="search__title">Max People</h3>
                        <div className="search__description">0</div>
                    </div>
                </div>
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

    return (
        <div className="search__bar">
            <div className="search__elements">
                {isInput ? <SearchInput /> : <SearchItems />}
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
