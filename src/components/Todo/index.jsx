import React from "react"

import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../../redux/slices/toodSlicer"

import styles from "./Todo.module.scss"

function Todo() {
	const items = useSelector((state) => state.todo.tasks)
	const dispatch = useDispatch()

	const inputVal = useRef()
	return (
		<div className={styles.root}>
			<input ref={inputVal} placeholder="enter todo" />
			<button
				onClick={() => {
					console.log("adding ", inputVal.current.value)
					return dispatch(add(inputVal.current.value))
				}}
			>
				add item to store
			</button>
			<ul>
				{items.map((item, ind) => {
					return <li key={item + ind}>{item}</li>
				})}
			</ul>
		</div>
	)
}

export default Todo
