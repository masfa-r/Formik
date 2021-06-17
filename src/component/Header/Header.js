import { withStyles } from "@material-ui/core";
import { styles } from "./Header.style";

const Header = ({classes}) =>{
    return(
       <h3 className={classes.HeaderStyle}>Employee Information</h3>
    );
    }
    
export default withStyles(styles)(Header);