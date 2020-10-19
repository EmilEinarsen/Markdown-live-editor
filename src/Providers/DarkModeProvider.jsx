import React, { createContext, useState, useEffect } from 'react'
import { MuiThemeProvider, CssBaseline, createMuiTheme, useMediaQuery } from '@material-ui/core'

export const useDarkMode = createContext()

function getTheme(type) {
	return createMuiTheme({
		palette: {
			type:  type ? 'dark' : 'light'
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'*': {
						scrollbarWidth: 'thin',
						scrollbarColor: type ? 'rgb(83, 83, 83) black' : '',
					},
					'::-webkit-scrollbar': {  width: '6px', height: '6px',  backgroundColor: type ? 'black' : '', },
					'::-webkit-scrollbar-thumb': { backgroundColor: type ? 'rgb(83, 83, 83)' : '', },
				}
			}
		}
	})
}

function DarkModeProvider({children}) {
	const [state, setState] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
	const [theme, setTheme] = useState( getTheme(state) )

	useEffect(() => {
		setTheme( getTheme(state) )
	}, [state])
	
	return (
		<useDarkMode.Provider value={{ useState: [ state, setState ] }}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</useDarkMode.Provider>
	)
}

export default DarkModeProvider 