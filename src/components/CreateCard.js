function CreateCard({setDisplay, GreetingImage, Email, SetEmail, Greeting, SetGreeting, Body, SetBody, Closing, SetClosing}) {
    const previewCard = (e) => {
        e.preventDefault();
        setDisplay("preview");
    }
    return (
        <div id="CreateCard">
            <div className="img-wrap">
				<img src={GreetingImage} alt="" />
			</div>
            <div id="form-wrap">
                <form>
                    <div className='form-row'>
                        <label htmlFor="">Who would you like to send this to:</label>
                        <input
                            type="email"
                            placeholder="recipient email"
                            id="email"
                            value={Email}
                            onChange={e => SetEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="">Greeting:</label>
                        <input
                            type="text"
                            placeholder="Greeting"
                            value={Greeting}
                            onChange={e => SetGreeting(e.target.value)}
                        />
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="">Body:</label>
                        <textarea
                            name=""
                            id=""
                            rows="5"
                            placeholder="Your message..."
                            value={Body}
                            onChange={e => SetBody(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="">Closing:</label>
                        <input
                            type="text"
                            placeholder="Closing"
                            value={Closing}
                            onChange={e => SetClosing(e.target.value)}
                        />
                    </div>
                    <div className='btn-wrap'>
                        <button type="submit" onClick={previewCard}>Preview Card</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCard;