const styles = ({
    GridStyle: {
        margin: 'auto',
    },
    CardStyle: {
        width: "90%",
        margin: 'auto',
        marginTop: '-150px',
        padding: '20px',
        paddingBottom: '30px',
        height: "auto",
        backgroundColor: "white",
        textAlign : "center",
        boxShadow: "5px 10px 10px #888888",
        borderRadius: "8px",
        position: 'sticky'
    },
    '@media (max-width: 500px)': {
        CardStyle: {
            marginTop: '30px',
        }
       }
});

export{ 
    styles
};