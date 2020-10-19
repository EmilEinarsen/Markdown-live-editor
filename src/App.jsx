import React from 'react'
import Navbar from './components/Bar/Bar'
import GlobalProvider from './Providers/GlobalProvider'
import Main from './components/Main'

const App = () => (
	<GlobalProvider>
		<Navbar />
		<Main />
	</GlobalProvider>
)
 
export default App