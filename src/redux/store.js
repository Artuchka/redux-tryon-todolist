import { configureStore } from "@reduxjs/toolkit"
import todoSlicer from "./slices/toodSlicer"

export const store = configureStore({
	reducer: {
		todo: todoSlicer,
	},
})
