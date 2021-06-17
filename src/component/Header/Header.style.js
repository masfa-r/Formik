const styles = ({
    HeaderStyle: {
      color: 'white',
      letterSpacing: '0.1em',
      backgroundColor: '#2ec4b6',
      height: '35vh',
      margin: '0',
      position: 'relative',
      display: 'flex',
      paddingTop: '35px',
      boxSizing: 'border-box',
      fontSize: '38px',
      justifyContent: 'center',
      fontFamily: 'Lato, sansSerif'
    },
    '@media (max-width: 400px)': {
     HeaderStyle: {
       paddingTop:'30px',
       fontSize:'25px',
       fontSize: '28px'
     }
    }
});

export{ 
    styles
};