function Header({setDisplay}) {

    const goToLanding = () => {
        setDisplay("landing");
    }

    return (
        <header>
            <div onClick={goToLanding} className="container">
                E-Card
            </div>
        </header>
    );
}

export default Header;