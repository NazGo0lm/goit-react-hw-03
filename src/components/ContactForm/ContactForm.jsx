//import React from 'react'
//import cafeStyles from "./ContactForm.module.css"
//import clsx from "clsx";

//import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
//{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const formValidationSchema = Yup.object().shape({
  contactName: Yup.string()
    .required("Required")
    .min(3, 'Name have to have at least 3 characters')
    .max(50, 'the name is too long'),
  contactPhone: Yup.string()
    .matches(
      phoneRegExp,
      "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
    )
    .required('Required'),
  
})

const INITIAL_VALUES = {
  contactName: "",
  contactPhone:"",
}

const ContactForm = ({ onAddContact }) => {
  const submitContact = (values,actions) => {
    const contactObj = {
      name: values.contactName,
      number: values.contactPhone,
      
    }
    onAddContact(contactObj);
    //console.log(values);
    actions.resetForm();

  }
  
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={submitContact}
      validationSchema={formValidationSchema}
    >
      
        <Form>
          <label>
            <span>Name</span>
          <Field
            
              type="text"
              name="contactName"
              
            
            />
            <ErrorMessage
            
              name="contactName"
              component="span"
            />
          </label>

          <label >
            <span>Number</span>
          <Field
            
              type="tel"
              name="contactPhone"
              
            />
            <ErrorMessage
              name="contactPhone"
              component="span"
            />
          </label>

          <button type="submit">
            Add contact
          </button>
        </Form>
    </Formik>
  )
}

export default ContactForm
