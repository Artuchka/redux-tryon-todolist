import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	tasks: [],
}

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		add: (state, data) => {
			console.log(123)
			console.log(data)
			state.tasks = [...state.tasks, data.payload]
		},
	},
})

export const { add } = todoSlice.actions

export default todoSlice.reducer
