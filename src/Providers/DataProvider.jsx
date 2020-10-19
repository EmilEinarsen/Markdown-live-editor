import React, { createContext, useState, useEffect } from "react"
import { text } from './text.js'
import markdown from 'bjork_markdown'
import lexer from 'bjork_markdown/src/lexer/lexer'
import Editor from '../components/Editor/Editor'

export const useData = createContext()

const createOutput = (
	type, 
	input
) => type === 0 ? (
	<span className="html"
		dangerouslySetInnerHTML={{__html: markdown(input)}}
	></span>
) : type === 1 ? (
	<span className="object">
		{JSON.stringify(lexer(input), null, 4)}
	</span>
) : type === 2 ? (
	<span className="html">
		{
			markdown(input)
			.replace(/<br>/g, '\n')
			.replace(/<h(.*?)>(.*?)<\/h(.*?)>/g, '\n<h$1>\n$2\n</h$3>\n')
			.replace(/<p>(.*?)<\/p>/g, '<p>\n$1\n</p>')
			.replace(/<ul>(.*?)<\/ul>/g, '<ul>\n$1\n</ul>')
			.replace(/<li>(.*?)<\/li>/g, '<li>$1</li>\n')
			.replace(/<pre>/g, '\n<pre>')
		}
	</span>
) : type === 3 ? (
	<Editor className='mobile'/>
) : ''

const DataProvider = ({children}) => {
	const [ input, setInput ] = useState(text)
	const [ select, setSelect ] = useState(0)
	const [ output, setOutput ] = useState(createOutput(select, input))

	useEffect(() => {
		setOutput( createOutput(select, input) )
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