import React, {useState} from 'react';

const Index = () => {
	const[message, showMessage]=useState(false)
	const handleLogin = (e) => {
		e.preventDefault();
		showMessage(true)
	};
	return (
		<div className="flex items-center justify-center my-8">
			<div className="flex flex-col form-container">
				<form onSubmit={handleLogin} className="form">
					<h4 className="font-bold my-4"> Register </h4>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" placeholder=" Name"/>


					<label htmlFor="email">Email</label>
					<input type="email" id="email" placeholder=" John@gmail.com"/>

					<label htmlFor="card-number">Card number</label>
					<input type="password" id="card-number" placeholder=" 0404 4545 6868 7812"/>

					<label htmlFor="card-name">Name on card</label>
					<input type="number" id="card-name" placeholder=" John Doe"/>

					<div className='flex justify-between'>
						<div >
							<label htmlFor="expires">Expires</label>
							<input type="password" id="expires" placeholder=" 01/19"/>
						</div>
						<div>
							<label htmlFor="security">Security</label>
							<input type="password" id="security" placeholder="  * * *"/>
						</div>

					</div>

					<button className="btn-login">
						Next
					</button>
					{message && <div>
						<p className='bg-green-200 pl-4'>
							Dont t be stupid !
						</p>
						<div className='my-4 py-4 pl-4'>
							Never put your credit card info on a random site.
						</div>
					</div>}
				</form>
			</div>


		</div>
	);
};

export default Index;
