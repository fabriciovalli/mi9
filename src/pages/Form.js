import React from 'react';
import styled from 'styled-components';
import Field from '../components/Field';
import Button from '../components/Button';
import Box from '../components/Box';
import { Formik } from 'formik';

const ColumnLayout = styled.div.attrs(props => ({
    className: "columns is-multiline",
}))``;

const Column = styled.div.attrs(props => {
    let classes = (props.config || "") + " column";
    return {
        className: classes,
    };
})``;

const FormButton = styled(Button).attrs(props => ({
    className: "is-primary",
}))`
`;

const FormComponent = styled.form``;

const formInitialValues = {
    firstName: "",
    surname: "",
    dob: "",
    nationality: "",
    email: "",
    occupation: "",
}

const Form = (props) => {
    return (
        <Box width='70vw'>
            <Formik
                initialValues={formInitialValues}
                validate={values => {
                    let errors = {};
                    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!values.firstName) {
                        errors.firstName = "First Name is required";
                    }
                    if (!values.surname) {
                        errors.surname = "Surname is required";
                    }
                    if (!values.nationality) {
                        errors.nationality = "Nationality is required";
                    }
                    if (!values.occupation) {
                        errors.occupation = "Occupation is required";
                    }
                    if (!values.dob) {
                        errors.dob = "Date of Birth is required";
                    }
                    if (!values.email) {
                        errors.email = "Email is required";
                    }
                    if(!regex.test(values.email)) {
                        errors.email = "Email is invalid";
                    }
                    return errors;
                }}
                onSubmit={values => {
                    props.history.push("/thankyou");
                }}
                render={({
                    touched,
                    errors,
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                        <FormComponent onSubmit={handleSubmit}>
                            <ColumnLayout>
                                <Column config="is-half">
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        name="firstName"
                                        label="First Name" placeholder="Joe"
                                        errorText={errors.firstName}
                                        touched={touched.firstName}
                                    />
                                </Column>
                                <Column config="is-half">
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surname}
                                        name="surname"
                                        label="Surname" placeholder="Valli"
                                        errorText={errors.surname}
                                        touched={touched.surname}
                                    />
                                </Column>
                                <Column config="is-half">
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.dob}
                                        type="date"
                                        name="dob"
                                        label="Date of Birth" placeholder="01/01/1980"
                                        errorText={errors.dob}
                                        touched={touched.dob}
                                    />
                                </Column>
                                <Column config="is-half">
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nationality}
                                        label="Nationality"
                                        name="nationality"
                                        placeholder="Irish"
                                        errorText={errors.nationality}
                                        touched={touched.nationality}
                                    />
                                </Column>
                                <Column config="is-half">
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        label="Email Address"
                                        name="email"
                                        placeholder="hello@info.com"
                                        type="email"
                                        errorText={errors.email}
                                        touched={touched.email}
                                    />
                                </Column>
                                <Column config="is-half">
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.occupation}
                                        label="Occupation"
                                        name="occupation"
                                        placeholder="Front End Developer"
                                        errorText={errors.occupation}
                                        touched={touched.occupation}
                                    />
                                </Column>
                            </ColumnLayout>
                            <ColumnLayout>
                                <Column config="is-4 is-offset-8">
                                    <FormButton type="submit" primary>Submit</FormButton>
                                </Column>
                            </ColumnLayout>
                        </FormComponent>
                    )}
            />
        </Box>
    );
};

export default Form;