function PreviewCard({setDisplay, GreetingImage, Email, Greeting, Body, Closing}) {

    const backToCreate = () => {
        setDisplay("create");
    }

    const sendCard = () => {
        let mailto = `mailto: ${Email}`
        mailto += '?subject=E-Card';
        mailto += '&body=You have received an e-card.';
        mailto += '%0D%0A%0D%0A';
        mailto += 'Go to E-Card';
        mailto += '%0D%0A';

        let url = 'http://smija.github.io/ecard/';
        url += `?greeting=${encodeURIComponent(Greeting)}`;
        url += `&body=${encodeURIComponent(Body)}`;
        url += `&closing=${encodeURIComponent(Closing)}`;

        mailto += encodeURIComponent(url);

        window.open(mailto);
    }
    return (
        <div id="PreviewCard">
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
            <div id="button-row">
                <div className="btn-wrap">
                    <button onClick={backToCreate}>Back to Create</button>
                </div>
                <div className="btn-wrap">
                    <button onClick={sendCard}>Send E-Card</button>
                </div>
            </div>
        </div>
    );
}

export default PreviewCard;