import React,{useState,useEffect,useRef} from 'react';
import {fieldValidator} from './validator';

export const SimpleForm = () => {

    const inputRef = useRef(null);
    const [formState, setFormState] = useState({
        login: '',
        password: '',
        checkBoxStatus: false,
        formErrors: {login: null, password: null, checkBoxStatus: null}
    });

    const [formStateValidation,setFormStateValidation] = useState({
        formStatus: false
    });


    const onChangeFormValue = (event) => {
        const valueType = event.target.type === 'text' || event.target.type === 'password'?
            event.target.value : event.target.checked;


        const formError = (form) => {
            setFormState( prev => {
                return {
                    ...prev,
                    [event.target.name]: valueType,
                    formErrors: {
                        ...prev.formErrors,
                        [Object.keys(form)]: Object.values(form)[0]
                    }
                }
            });
        }

        fieldValidator(event.target.name, valueType, formError);
    }

    useEffect(()=>{
        const checkError = Object.values(formState.formErrors).every(e => e === null);

        if(formState.login.length > 0 && formState.password.length > 0 && formState.checkBoxStatus && checkError){
            setFormStateValidation({formStatus: true});
        }

    },[formState]);

    useEffect(()=>{
        inputRef.current.focus();
    },[] );

    const onSubmit = () =>{
        alert('You\'re Welcome');
    }

    return (
        <div className="card border-dark my-5 w-100 text-left">
            <h5 className="card-header">Sign in with «Simple Form»</h5>
            <div className="card-body formWrap">
                <form>
                    <div className="form-label-group">
                        <input type="email"
                               ref={inputRef}
                               name="login"
                               className="form-control"
                               value={formState.login}
                               placeholder="Email"
                               onChange={onChangeFormValue}
                        />
                        <label htmlFor="login">Email</label>
                            {
                            formState.formErrors.login === null? null: <div className="tooltip-valid alert-danger">
                                {formState.formErrors.login}
                            </div>
                        }
                    </div>
                    <div className="form-label-group">
                        <input type="password"
                           name="password"
                           className="form-control"
                           value={formState.password}
                           placeholder="Password"
                           onChange={onChangeFormValue}
                        />
                        <label htmlFor="password">Password</label>
                            {
                                formState.formErrors.password === null? null: <div className="tooltip-valid alert-danger">
                                    {formState.formErrors.password}
                                </div>
                            }
                    </div>
                    <div className="form-check">
                        <label>
                            <input type="checkbox"
                                   name="checkBoxStatus"
                                   className="form-check-input"
                                   checked={formState.checkBoxStatus}
                                   onChange={onChangeFormValue}
                            />
                            I agree
                        </label>
                    </div>
                    {
                        formState.formErrors.checkBoxStatus === null? null: <div className="tooltip-valid alert-danger">
                            {formState.formErrors.checkBoxStatus}
                        </div>
                    }
                    <button
                        type="submit"
                        className={formStateValidation.formStatus === false? 'btn btn-primary btn-block disableBtn': 'btn btn-primary btn-block'}
                        onClick={onSubmit}
                        disabled={formStateValidation.formStatus === false} > Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
