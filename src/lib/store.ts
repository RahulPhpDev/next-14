import { configureStore } from "@reduxjs/toolkit";
import albumReduces from '../features/albumSlice';
import counterSlice from "@/features/counterSlice";
export const makeStore = () => {
    return configureStore({
        reducer: {
            albums: albumReduces,
            counter: counterSlice
        }
    })
};


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];
