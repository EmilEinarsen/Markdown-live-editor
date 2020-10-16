import React, { useState } from 'react'

import { Tabs, Tab } from '@material-ui/core'

const SelectRenderType = ({handleSelection}) => {
	const [value, setValue] = React.useState(0)

	return (
		<Tabs
			indicatorColor="primary"
			textColor="primary"
			onChange={handleChange}
			value={value}
		>
			<Tab label="Preview" />
			<Tab label="TookenList" />
			<Tab label="HTML" />
		</Tabs>
	)

	function handleChange(event, newValue) {
		setValue(newValue)
		handleSelection(newValue)
	}
}

export default SelectRenderType