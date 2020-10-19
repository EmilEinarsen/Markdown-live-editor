import { Typography } from '@material-ui/core'
import React from 'react'
import DarkModeProvider from './DarkModeProvider'
import DataProvider from './DataProvider'

const GlobalProvider = ({children}) => (
	<DarkModeProvider>
		<DataProvider>
			<Typography component="div">
				{children}
			</Typography>
		</DataProvider>
	</DarkModeProvider>
)

export default GlobalProvider