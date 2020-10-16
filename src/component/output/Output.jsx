import { Box, Grid, Typography, Container, Fade } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import SelectOutputMode from '../SelectOutputMode'
import markdown from 'bjork_markdown'
import lexer from 'bjork_markdown/src/lexer/lexer'
import { Context } from '../Context.jsx'
import './output.sass'

const Output = () => {
	let [select, setSelect] = useState(0)
	let [output, setOutput] = useState('')
	const input = useContext(Context).input

	useEffect(() => {
		setOutput(
			select === 0 ? (
				<span 
					dangerouslySetInnerHTML={{__html: markdown(input)}}
				></span>
			) : select === 2 ? (
				<span>{markdown(input)}</span>
			) : (
				<span className="object">
					{JSON.stringify(lexer(input), null, 4)}
				</span>
			)
		)
	}, [input, select])

	return (
		<Container wrap="nowrap">
			<Box p={5}>
				<Box className="output-container">
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