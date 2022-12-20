import { configureStore, createSlice } from '@reduxjs/toolkit'

// let schedule = createSlice({
//     name: 'calendar',
//     initialState: [""],
//     reducers: {
//         changeSchedule(state, e) {
//             return (
//                 e.payload.forEach((item, idx) => {
//                     let offset = item.getTimezoneOffset() * 60000;
//                     let date = new Date(item.getTime() - offset);
//                     state[idx] = date.toISOString().split("T")[0];
//                 })
//             )
//         }
//     }
// })

let planData = createSlice({
    name:"listData",
    initialState: [],
})

let planAmount = createSlice({
    name:"planAmount",
    initialState: 0,
})

let userInput = createSlice({
    name:"userInput",
    initialState:{input :""},
    reducers:{
        searchName(state, e){
            state.input = e.payload.target.value;
        }
    }
})

// let listAmount = createSlice({
//     name:"listAmount",
//     initialState: 6,
//     reducers:{
//         expandAmount(state, e, listHeight, setHeight){
//             const wraptHeight = e.offsetHeight;
//             if (listHeight / 2 < e.scrollTop) {
//                 if (state.listAmount <= 93) {
//                     state + 6);
//                     setHeight(listHeight + wraptHeight * 2);
//                 }
//             }
//         }
//     }
// })

export default configureStore({
    reducer: {
        // schedule: schedule.reducer,
        planData: planData.reducer,
        planAmount: planAmount.reducer,
        userInput: userInput.reducer
        // listAmount : listAmount.reducer
    },
})

export let {searchName} = userInput.actions
// export let {expandAmount} = listAmount
// export let { changeSchedule } = schedule.actions