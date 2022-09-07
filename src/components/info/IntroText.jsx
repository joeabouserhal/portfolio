import React from 'react'
import { Zoom } from 'react-reveal'

const IntroText = () => {
	return (
		<div className=''>
			<Zoom>
				<p className='container flex font-mono text-slate-300 text-sm font-light mx-auto p-4 max-w-md'>
					"I'm a Computer Science student at Beirut Arab University.
					I'm always looking for new challenges and opportunities to learn new things."
				</p>
			</Zoom>
		</div>
	)
}

export default IntroText