function Header(props) {
    const headerStyle = {
        backgroundColor: '#FFFFFF',
        width: '80%',
        alignItems: 'center',
        margin:' 20px auto',
    }

    return(
        <>  
            <h2 style={headerStyle}>
                {props.text}
            </h2> 
        </>
    );
}

export default Header;