import React from 'react'
import { FaCheck } from "react-icons/fa6";
import cn from 'classnames'
import classNames from 'classnames';

const Check = ({ isCompleted }) => {
	return (
		<div className="border-2 rounded-full border-white w-5 h-5 mr-3 flex items-center justify-center">
			{isCompleted && <FaCheck size={12} className='text-white' />}
		</div>
	)
}

export default Check
