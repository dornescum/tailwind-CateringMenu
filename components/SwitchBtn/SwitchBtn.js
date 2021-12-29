import {useState} from 'react';
import {Switch} from '@headlessui/react';

const SwitchBtn = () => {
	const [isEnabled, setIsEnabled] = useState(false);

	return (
		<Switch
			checked={isEnabled}
			onChange={setIsEnabled}
			className={`${
				isEnabled ? 'bg-blue-600' : 'bg-gray-200'
			} relative inline-flex items-center h-6 rounded-full w-11`}
		>
			<span className="sr-only">Enable notifications</span>
			<span
				className={`${
					isEnabled ? 'translate-x-6' : 'translate-x-1'
				} inline-block w-4 h-4 transform bg-white rounded-full`}
			/>
		</Switch>
	);
};

export default SwitchBtn;
