import GreetingImage from '../images/greetingCardImg.jpg';

function CreateCard({setDisplay}) {
    const previewCard = () => {
        setDisplay("landing")
    }
    return (
        <div id="CreateCard">
            <div className="img-wrap">
				<img src={GreetingImage} alt="" />
			</div>
            <div id="form-wrap">
                <form action="">
                    <div className='form-row'>
                        <label htmlFor="">Who would you like to send this to:</label>
                        <input type="email" placeholder="recipient email" required />
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="">Greeting:</label>
                        <input type="text" placeholder="Greeting" required />
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="">Body:</label>
                        <textarea name="" id="" rows="5" placeholder="Your message..."></textarea>
                    </div>
                    
                    <div className='form-row'>
                        <label htmlFor="">Closing:</label>
                        <input type="text" placeholder="Closing" required />
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