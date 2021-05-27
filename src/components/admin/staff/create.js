import {Formik, Field, Form} from "formik";
import * as yup from 'yup';

const validation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),

});

const CreateStaff = () => {
    const initValuse = {
        name: '',
        email: '',
        permission: ''
    };

    return (
        <>
            <Formik
                initialValues={initValuse}
                validationSchema={validation}
                onSubmit={(values) => console.log(values)}
            >

                {() => (

                    <Form>
                        <Field type={'input'} name={'name'} placeholder={'Enter staff name'}/>
                        <Field type={'email'} name={'email'} placeholder={'Enter staff name'}/>
                        <Field name={'permission'} as={'select'}>
                            <option value="r">Read</option>
                            <option value="rw">Read & Write</option>
                        </Field>

                        <button type={'submit'}>Sumbit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
};

export default CreateStaff;