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
    name: "listData",
    initialState: [],
})

let planAmount = createSlice({
    name: "planAmount",
    initialState: 0,
})

let userInput = createSlice({
    name: "userInput",
    initialState: { input: "" },
    reducers: {
        searchName(state, e) {
            state.input = e.payload;
        }
    }
})

let myPlan = createSlice({
    name: "myPlan",
    initialState: [
        {
            festival: "즐기고 싶으신 행사를 추가해주세요.",
            restaurant: "가고 싶은 음식점을 추가해주세요",
            place: "보고 싶었던 관광지를 추가해주세요",
            hotel: "쉬고 싶은 공간을 추가해주세요."
        },
    ],
    reducers: {
        addPlan(state, addTitle, label) {
            console.log(addTitle)
            // if (addTitle.payload.label === "축제/행사") {
                state[0].festival = addTitle.payload.title
            // }
         

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
        userInput: userInput.reducer,
        myPlan: myPlan.reducer
    },
})

export let { searchName } = userInput.actions
export let { addPlan } = myPlan.actions
// export let {expandAmount} = listAmount
// export let { changeSchedule } = schedule.actions