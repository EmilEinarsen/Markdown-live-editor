import React, { useState } from 'react';
import Switch from './Switch'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'

function DarkModeProvider({children}) {
	const [theme, setTheme] = useState()
	
	const handleTheme = newTheme => {
		setTheme(newTheme)
	}
	
	return (
		<>
			<Switch handleTheme={handleTheme} />
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</>
	)
}

export default DarkModeProvider 