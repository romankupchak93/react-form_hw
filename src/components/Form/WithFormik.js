import React,{useRef,useEffect} from 'react';
import { Formik } from 'formik';
export const WithFormik = () => {

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    return (
        <div className="card border-dark my-5 w-100 text-left">
            <h5 className="card-header">Sign in with «Formik»</h5>
                <div className="card-body formWrap">
                <Formik
                    initialValues={{ email: '', password: '', checkBoxStatus: false }}
                    validate={values => {
                        console.log(values);
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Email is required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Email must be in correct';
                        }

                        if(!values.password) {
                            errors.password = 'Password is required';
                        } else if(values.password.length < 6){
                            errors.password = 'Password is too short';
                        }  else if(values.password.length > 12){
                            errors.password = 'Password is too long';
                        }

                        if(!values.checkBoxStatus === true){
                            errors.checkBoxStatus = 'I agree must be a checked'
                        }
                        console.log(errors);
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            // alert('You\'re Welcome');
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-label-group">
                                <input
                                    ref={inputRef}
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <label htmlFor="email">Email</label>
                                {
                                    errors.email && touched.email && errors.email ?
                                        <div className="tooltip-valid alert-danger">
                                            {errors.email && touched.email && errors.email}
                                        </div> : null
                                }
                            </div>
                            <div className="form-label-group">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <label htmlFor="password">Password</label>
                                {
                                errors.password && touched.password && errors.password ?
                                    <div className="tooltip-valid alert-danger">
                                        {errors.password && touched.password && errors.password}
                                    </div> : null
                            }
                            </div>
                            <div className="form-check">
                                <label>
                                    <input type="checkbox"
                                           className="form-check-input"
                                           onChange={handleChange}
                                           value={values.checkbox}
                                           name="checkBoxStatus"
                                    />
                                  I agree
                                </label>
                            </div>
                            {
                                errors.checkBoxStatus && touched.checkBoxStatus && errors.checkBoxStatus ?
                                    <div className="tooltip-valid alert-danger">
                                        {errors.checkBoxStatus && touched.checkBoxStatus && errors.checkBoxStatus}
                                    </div> : null
                            }
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
