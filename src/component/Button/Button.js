import { withStyles } from "@material-ui/core";
import { styles } from "./Button.style";
import {Button} from '@material-ui/core';

const ButtonComponent = ({classes, type}) =>{
    return(
        <Button className={classes.ButtonStyle} variant="contained" type={type}>
        Submit</Button>
    );
    }
    
export default withStyles(styles)(ButtonComponent);