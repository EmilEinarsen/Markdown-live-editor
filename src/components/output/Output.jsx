import { Box } from '@material-ui/core'
import React, { useContext } from 'react'
import { useData } from '../../Providers/DataProvider'
import './output.sass'

const Output = () => {
	const {
		useSelect: [ select ],
		useOutput: [ output ]
	} = useContext(useData)

	return (
		<Box 
			wrap="nowrap" 
			className={`output-container ${ select === 3 ? 'mobile' : '' }`} 
		>
			{output}
		</Box>
	)
}

export default Output  