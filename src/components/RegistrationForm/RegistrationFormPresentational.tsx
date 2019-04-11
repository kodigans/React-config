import * as React from 'react'; 

import {Form, FormTitle} from './RegistrationFormPresentationalStyle';
import DataFiled from '../DataFiled/DataFiled';
import SubmitButton from '../Common/SubmitButton/SubmitButton';
import DefaultButton from '../Common/DefaultButton/DefaultButton';


interface RegistrationFormPresentationalProps {};

const RegistrationFormPresentational = ({}: RegistrationFormPresentationalProps) => {
    return (
        <>
            <Form>     
                <DefaultButton/>     
                <DefaultButton/>     
                <FormTitle> 
                    Login
                </FormTitle>
                <DataFiled/>
                <DataFiled/>
                <SubmitButton/>
            </Form>
        </>
    )
};

export default RegistrationFormPresentational;