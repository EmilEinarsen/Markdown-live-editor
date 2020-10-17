import { Box, Typography, Container } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import SelectOutputMode from '../SelectOutputMode'
import markdown from 'bjork_markdown'
import lexer from 'bjork_markdown/src/lexer/lexer'
import { Context } from '../Context.jsx'
import './output.sass'
import Editor from '../editor/Editor'

const Output = () => {
	let [select, setSelect] = useState(0)
	let [output, setOutput] = useState('')
	
	const input = useContext(Context).input

	useEffect(() => {
		setOutput(
			select === 0 ? (
				<div className="html"
					dangerouslySetInnerHTML={{__html: markdown(input)}}
				></div>
			) : select === 1 ? (
				<div className="object">
					{JSON.stringify(lexer(input), null, 4)}
				</div>
			) : select === 2 ? (
				<div className="html">
					{markdown(input)}
				</div>
			) : (
				<Editor className='mobile'/>
			)
		)
	}, [input, select])

	return (
		<Container wrap="nowrap">
			<Box py={5}>
				<Box 
					className={`output-container${ select === 3 ? ' mobile' : '' }`}
				>
					<SelectOutputMode 
						handleSelection={handleSelection} 
					/>
					<Typography>
						{output}
					</Typography>
				</Box>
			</Box>
		</Container>
	)

	function handleSelection(param) {
		setSelect(param)
	}
}

export default Output