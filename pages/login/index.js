import React, {useState} from 'react';

const Index = () => {
	const[message, showMessage]=useState(false)
	const handleLogin = (e) => {
		e.preventDefault();
		showMessage(true)
	};
	return (
		<div className="flex items-center justify-center min-h-min mt-16 md:mt-20">
			<div className={`flex flex-col form-container ${message ? "bg-red-200": ""}`}>
				{message && <div>
					<p className='bg-green-600 pl-4'>
						Thanks for the money !
					</p>
					<div className='my-2 py-1 pl-4'>
						Never put your credit card info on a random site.
					</div>
				</div>}
				<form onSubmit={handleLogin} className="form">
					<h4 className="font-bold my-4"> Register </h4>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" placeholder=" Name" autoFocus required/>


					<label htmlFor="email">Email</label>
					<input type="email" id="email" placeholder=" John@gmail.com" required/>

					<label htmlFor="card-number">Card number</label>
					<input type="password" id="card-number" placeholder=" 0404 4545 6868 7812" required/>

					<label htmlFor="card-name">Name on card</label>
					<input type="text" id="card-name" placeholder=" John Doe" required/>

					<div className='flex flex-col md:flex-row md:justify-between'>
						<div>
							<label htmlFor="expires">Expires</label>
							<input type="password" id="expires" placeholder=" 01/19" required/>
						</div>
						<div>
							<label htmlFor="security">Security</label>
							<input type="password" id="security" placeholder="  * * *" required/>
						</div>

					</div>

					<button className="btn-login">
						Next
					</button>

					<div className='mx-1'>
						<div className='flex items-center justify-center flex-col text-justify'>
							<h6 className='my-2'>Info & conditions</h6>
							<p className='leading-tight my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum nobis possimus sequi.
								Aliquam corporis esse harum maxime nobis placeat quasi ut voluptatibus? Aliquid autem corporis enim
								fuga inventore quia, tempore vitae! Cupiditate deleniti dolorem error libero molestiae, nostrum quam
								quia quod repudiandae voluptates. Ad, aspernatur necessitatibus? A, accusamus alias autem beatae
								blanditiis consequatur debitis, dignissimos dolorem eos error exercitationem hic labore libero magni
								molestias nam non odio perferendis perspiciatis provident quaerat, quod recusandae rem reprehenderit
								rerum saepe sint suscipit temporibus veritatis voluptatibus! Architecto aspernatur deserunt earum
								eos harum itaque iure, libero nihil ratione repellat repellendus rerum sequi sit voluptate.</p>
						</div>
					</div>

				</form>




			</div>


		</div>
	);
};

export default Index;
