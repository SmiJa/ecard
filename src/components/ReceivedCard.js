function ReceivedCard({Greeting, Body, Closing, GreetingImage, setDisplay}) {

    const goToLanding = () => {
        window.location.search = "";
        setDisplay("create");
    }

    return (
        <div id="RecievedCard">
            <div className="img-wrap">
				<img src={GreetingImage} alt="" />
			</div>
            <div className="message-wrap">
                <p className="greeting-wrap">
                    {Greeting} <span className="comma">,</span>
                </p>
                <p className="body-wrap">
                    {Body}
                </p>
                <p className="closing-wrap">
                    {Closing}
                </p>
            </div>
            
            <div className="btn-wrap">
                <button onClick={goToLanding}>Like this card? Send one to someone.</button>
            </div>
        </div>
    );
}

export default ReceivedCard;