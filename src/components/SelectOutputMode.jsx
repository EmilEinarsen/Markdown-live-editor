import React, { useState } from 'react'

import { Tabs, Tab, useMediaQuery, AppBar } from '@material-ui/core'

const SelectRenderType = ({handleSelection}) => {
	const [value, setValue] = useState(0)
	const matches = useMediaQuery('(min-width:1100px)');

	return (
		<AppBar>
			{ matches ? (
				<Tabs
					indicatorColor="primary"
					textColor="primary"
					color="default"
					variant="fullWidth"
					onChange={handleChange}
					value={value}
				>
					<Tab label="Preview" />
					<Tab label="TookenList" />
					<Tab label="HTML" />
				</Tabs>
			) : (
				<Tabs
					indicatorColor="primary"
					textColor="primary"
					color="default"
					onChange={handleChange}
					value={value}
				>
					<Tab label="Editor" value={3}/>
					<Tab label="Preview" value={0}/>
					<Tab label="TookenList" value={1}/>
					<Tab label="HTML" value={2}/>
				</Tabs>
			)}
		</AppBar>
	)

	function handleChange(event, newValue) {
		setValue(newValue)
		handleSelection(newValue)
	}
}

export default SelectRenderType