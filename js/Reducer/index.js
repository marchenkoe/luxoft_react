import { combineReducers } from 'redux'

let gridRecords = [
        {firstName: "John", lastName: "Doe", active: false, id: 1},
        {firstName: "Mary", lastName: "Moe", active: false, id: 2},
        {firstName: "Peter", lastName: "Noname", active: true, id: 3}
    ],
    detailsRecords = [
        {
            id: 1,
            name: "John Doe",
            about: "Nice guy",
            hobby: "Likes drinking wine",
            skills: ["html", "javascript", "redux"]
        }, {
            id: 2,
            name: "Mary Moe",
            about: "Cute girl",
            hobby: "Likes playing xbox whole days long",
            skills: ["Fortran", "Lua", "R#"]
        }
    ];

const gridState = {
    records: gridRecords,
    filtered: gridRecords,
    filterText: '',
}

export function grid(state = gridState, action) {
    switch (action.type) {
        case "TOGGLE_ACTIVE":
            let newState = {...state};
            newState.records[action.value].active = !newState.records[action.value].active;
            return newState;
        case "FILTER":
            console.log("action ", action)
            let text;
            const newFiltered = state.records.filter((record) => {
                text = action.payload.toLowerCase();
                return record.firstName.toLowerCase().includes(text);
        })
            return {
                ...state,
                filtered: newFiltered,
                filteredText: text,
            }
        default:
            return state
    }
}


export function details(state = detailsRecords, action) {
    switch (action.type) {
        default:
            return state
    }
}





export const rootReducer = combineReducers({
    details,
    grid
});
