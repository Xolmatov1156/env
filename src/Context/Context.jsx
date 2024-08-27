import React, { createContext, useReducer, useEffect } from "react";

export const SavedProductsContext = createContext();

const savedItemsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const updatedState = [...state, action.payload];
            localStorage.setItem("savedItems", JSON.stringify(updatedState));
            return updatedState;
            case "DELETE_ITEM":
            const filteredState = state.filter(item => item.id !== action.payload);
            localStorage.setItem("savedItems", JSON.stringify(filteredState));
            return filteredState;
        case "SET_ITEMS":
            return action.payload;
        default:
            return state;
    }
};

export const SavedItemsProvider = ({ children }) => {
    const [savedItems, dispatch] = useReducer(savedItemsReducer, []);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("savedItems"));
        if (storedItems) {
            dispatch({ type: "SET_ITEMS", payload: storedItems });
        }
    }, []);

    return (
        <SavedProductsContext.Provider value={{ savedItems, dispatch }}>
            {children}
        </SavedProductsContext.Provider>
    );
};
