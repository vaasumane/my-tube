import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videoItems: [],
    },
    reducers: {
        setVideoItemList: (state, action) => {
            if(state.videoItems.length <= 150){
                state.videoItems = [...state.videoItems, ...action.payload];
            }
        },
        clearVideoList: (state) => {
            state.videoItems = [];
        }
    }
});

export const { setVideoItemList,clearVideoList } = videoSlice.actions;
export default videoSlice.reducer;