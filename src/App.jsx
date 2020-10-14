import { Box } from '@material-ui/core'
import React from 'react'
import Editor from './component/Editor'
import Output from './component/Output'



const App = () => ( 
	<Box style={{display: 'flex'}}>
		<Editor />
		<Output />
	</Box>
)
 
export default App