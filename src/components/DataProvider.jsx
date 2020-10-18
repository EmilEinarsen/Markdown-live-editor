import React, { useState, useEffect } from "react"
import { text } from './text.js'
import markdown from 'bjork_markdown'
import lexer from 'bjork_markdown/src/lexer/lexer'
import Editor from './Editor/Editor'

export const useData = React.createContext()

const DataProvider = ({children}) => {
	const [input, setInput] = useState(text)
	const [select, setSelect] = useState(0)
	const [output, setOutput] = useState(text)

	useEffect(() => {
		setOutput(
			select === 0 ? (
				<span className="html"
					dangerouslySetInnerHTML={{__html: markdown(input)}}
				></span>
			) : select === 1 ? (
				<span className="object">
					{JSON.stringify(lexer(input), null, 4)}
				</span>
			) : select === 2 ? (
				<span className="html">
					{markdown(input)}
				</span>
			) : select === 3 ? (
				<Editor className='mobile'/>
			) : ''
		)
	}, [input, select])

	return (
		<useData.Provider value={{
			useInput: [ input, setInput ], 
			useSelect: [ select, setSelect ],
			useOutput: [ output ]
		}}>
			{children}
		</useData.Provider>
	)
}

export default DataProvider