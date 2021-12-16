function LandingPage({setDisplay, GreetingImage}) {

	const createCard = () => {
		setDisplay("create");
	}
	return (
		<div id="LandingPage">
			<div className="img-wrap">
				<img src={GreetingImage} alt="" />
			</div>
			<div className="instruction-wrap">
				<p>If you like the card above and would like to send it to a friend or family member, please click the button below.</p>
			</div>
			<div className="btn-wrap">
				<button className='btn' onClick={createCard}>Create E-Card</button>
			</div>
		</div>
	);
}

export default LandingPage;