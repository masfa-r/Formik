import { withStyles } from "@material-ui/core";
import { styles } from "./Avatar.style";
import Avatar from '@material-ui/core/Avatar';


const AvatarComponent = ({classes}) =>{
    return(
        <Avatar src="/broken-image.jpg"  className={classes.AvatarStyle}/>
    );
    }
    
export default withStyles(styles)(AvatarComponent);