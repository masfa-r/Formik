import { withStyles } from "@material-ui/core";
import { styles } from "./Input.style";
import TextField from '@material-ui/core/TextField';

const InputField = ({classes, ...props}) =>{
    console.log(props);
    return(
        <TextField  InputLabelProps={{
            shrink: true,
           }} 
          className={classes.InputStyle} id="outlined-basic" label={props.children} type={props.inputType} variant="outlined" placeholder={props.placeholder} value={props.value} name = {props.name} 
          onChange={props.onChange} required
           {...props} 
           
           >

        </TextField>
    );
    }
    
export default withStyles(styles)(InputField);