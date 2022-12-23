import { configureStore, createSlice } from '@reduxjs/toolkit'

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
        // {
        //     festival: "즐기고 싶으신 행사를 추가해주세요.",
        //     restaurant: "가고 싶은 음식점을 추가해주세요",
        //     place: "보고 싶었던 관광지를 추가해주세요",
        //     hotel: "쉬고 싶은 공간을 추가해주세요.",
        //     category:"festival",
        //     guideText :"즐기고 싶으신 행사를 추가해주세요."
        // },
        {
            label:"축제/행사",
            category:"festival",
            guideText :"즐기고 싶으신 행사를 추가해주세요."
        },
        {
            label:"음식점",
            category:"restaurant",
            guideText :"가고 싶은 음식점을 추가해주세요"
        },
        {
            label:"관광지",
            category:"place",
            guideText :"보고 싶었던 관광지를 추가해주세요"
        },
        {
            label:"숙박",
            category:"hotel",
            guideText :"쉬고 싶은 공간을 추가해주세요."
        },
    ],
    reducers: {
        addPlan(state, addPlan) {
            state.forEach((item)=>{
                if(addPlan.payload.contentscd.label === item.label){
                    item.guideText = addPlan.payload.title
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
export let { addPlan } = myPlan.actions
