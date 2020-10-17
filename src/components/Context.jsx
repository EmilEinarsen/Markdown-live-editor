import React, { useState } from "react"
import { text } from './text.js'

export const Context = React.createContext()

const InputContext = ({children}) => {
	const [input, setInput] = useState(text)
	return (
		<Context.Provider value={{input, setInput}}>
			{children}
		</Context.Provider>
	)
}

export default InputContext