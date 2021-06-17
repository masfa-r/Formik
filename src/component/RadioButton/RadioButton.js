import { withStyles } from "@material-ui/core";
import { styles } from "./RadioButton.style";
import { React } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const RadioButton = ({classes, onChange}) =>{

    return(
    <FormControl component="fieldset" className={classes.RadioButtonStyle}>
    <FormLabel className={classes.MuiFormLabelRoot} component="legend">Gender</FormLabel>
    <RadioGroup className={classes.RadioGroupStyle} aria-label="gender" name="gender1"  onChange={onChange}>
      <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" />
      <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" />
      <FormControlLabel value="other" name="gender" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
    );
    }
    
export default withStyles(styles)(RadioButton);