import { withStyles } from "@material-ui/core";
import { styles } from "./CardContainer.style";
import { Card } from "@material-ui/core";
import ButtonComponent from "../../component/Button/Button";
// import { Formik } from 'formik';
import { useFormik } from 'formik';
import Input from "../../component/Input/Input";
import RadioButton from "../../component/RadioButton/RadioButton";
import AvatarComponent from "../../component/Avatar/Avatar"
import * as yup from 'yup';
import Grid from '@material-ui/core/Grid';

const CardContainer = ({ classes }) => {

    const validationSchema = yup.object({
        firstName: yup.string('Enter your first name').required('First Name is required').matches(/^[a-zA-Z]+$/, 'Enter a valid name'),
        lastName: yup.string('Enter your last name').required('Last name is required').matches(/^[a-zA-Z]+$/, 'Enter a valid name'),
        email: yup.string('Enter valid email').email('enter valid format').required('Required'),
        age: yup.number('Enter valid age').required('Required')
    });

    const formik = useFormik(({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            gender: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    }));
    return (
        <Grid className={classes.GridStyle} item lg={4} xs={11} >
            <Card className={classes.CardStyle}>
                <AvatarComponent />
                {/* <Header /> */}
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        placeholder="Enter First Name..."
                        inputType='text'
                        onChange={formik.handleChange}
                        name='firstName'
                        value={formik.values.firstName}
                        error={Boolean(formik.errors.firstName)}
                        helperText={formik.errors.firstName}
                    >First Name</Input>
                    <Input
                        placeholder="Enter Last Name..."
                        inputType='text'
                        onChange={formik.handleChange}
                        name="lastName"
                        value={formik.values.lastName}
                        error={Boolean(formik.errors.lastName)}
                        helperText={formik.errors.lastName}
                    >Last Name</Input>
                    <Input
                        placeholder="Enter Email ID..."
                        inputType='email'
                        onChange={formik.handleChange}
                        name='email'
                        value={formik.values.email}
                        error={Boolean(formik.errors.email)}
                        helperText={formik.errors.email}
                    >Email</Input>
                    <Input
                        placeholder="Enter Your Age.."
                        inputType='number'
                        onChange={formik.handleChange}
                        name='age'
                        value={formik.values.age}
                        error={Boolean(formik.errors.age)}
                        helperText={formik.errors.age}
                    >Age</Input>
                    <br />
                    <RadioButton onChange={formik.handleChange} />
                    <br></br>

                    <ButtonComponent type="submit" />

                </form>
            </Card>
        </Grid>
    );
}

export default withStyles(styles)(CardContainer);