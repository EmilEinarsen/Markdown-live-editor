import React, { useState, useEffect } from 'react';
import Switch from './Switch'
import { MuiThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'


function getTheme(type) {
	return createMuiTheme({
		palette: {
			type:  type ? 'dark' : 'light'
		}
	})
}


function DarkModeProvider({children}) {
	const [state, setState] = useState(true)
	const [theme, setTheme] = useState( getTheme(state) )

	useEffect(() => {
		setTheme( getTheme(state) )
	}, [state])
	
	return (
		<>
			<Switch useState={[state, setState]} />
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</>
	)
}

export default DarkModeProvider 