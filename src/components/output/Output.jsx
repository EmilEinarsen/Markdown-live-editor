import { Box, Typography, Container } from '@material-ui/core'
import React, { useContext } from 'react'
import SelectOutput from './SelectOutput'
import { useData } from '../DataProvider'
import './output.sass'

const Output = () => {
	const { 
		useSelect: [ select ], 
		useOutput: [ output ]
	} = useContext(useData)
	
	return (
		<Container wrap="nowrap">
			<Box py={5}>
				<Box className={`output-container ${ select === 3 ? 'mobile' : '' }`} >
					<SelectOutput />
					<Typography>
						{output}
					</Typography>
				</Box>
			</Box>
		</Container>
	)
}

export default Output