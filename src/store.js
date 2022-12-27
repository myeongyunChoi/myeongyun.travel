import { configureStore, createSlice, current } from '@reduxjs/toolkit'

const areaData = createSlice({
    name: "areaData",
    initialState: "",
    reducers: {
        areaChoice(state, area) {
            return state = area.payload;
        }
    }
})

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
            label: "축제/행사",
            category: "festival",
            guideText: [null],
            count : 0
        },
        {
            label: "음식점",
            category: "restaurant",
            guideText: [null],
            count : 0
        },
        {
            label: "관광지",
            category: "place",
            guideText: [null],
            count : 0
        },
        {
            label: "숙박",
            category: "hotel",
            guideText: [null],
            count : 0
        },
    ],
    reducers: {
        addPlan(state, addPlan) {
            state.forEach((item, idx) => {
                if (addPlan.payload.contentscd.label === item.label) {
                    item.guideText.forEach((item2, idx2) => {
                        if (item2 === null) {
                            item.guideText[idx2] = addPlan.payload.title;
                        }
                    })
                }
            })
        },
        addList(state, plusItem) {
            state.forEach((item, idx) => {
                if (item.label === plusItem.payload.label) {
                    item.guideText.forEach((item2) => {
                        if (item.guideText[item.count]!== null) {
                            item.count +=1;
                            item.guideText.push(null);
                        }
                    })
                }
            })
        }
    }
})


export default configureStore({
    reducer: {
        areaData: areaData.reducer,
        planData: planData.reducer,
        planAmount: planAmount.reducer,
        userInput: userInput.reducer,
        myPlan: myPlan.reducer
    },
})

export let { areaChoice } = areaData.actions
export let { searchName } = userInput.actions
export let { addPlan, addList } = myPlan.actions
