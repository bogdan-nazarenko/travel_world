import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { headerState } from "@data/states";

const appSlice = createSlice({
    name: "app",
    initialState: { headerState },
    reducers: {
        setMenuOpen(state, action: PayloadAction<boolean>): void {
            const { headerState } = state;

            headerState.isMenuOpen = action.payload;
        },
    },
});

export const { setMenuOpen } = appSlice.actions;
export const appReducer = appSlice.reducer;
