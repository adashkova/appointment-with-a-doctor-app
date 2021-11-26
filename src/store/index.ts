import { configureStore } from '@reduxjs/toolkit'
import { doctors } from './reduсers/doctors'

export const store = configureStore({
  reducer: {
    doctors: doctors,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
