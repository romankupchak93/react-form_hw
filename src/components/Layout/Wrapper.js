import React, {useEffect, useState} from "react";
import {VscCompareChanges} from "react-icons/vsc";
import {SimpleForm} from "../Form/SimpleForm";
import {WithFormik} from "../Form/WithFormik";

export const Wrapper = () => {
    const [formState, setFormState] = useState(true);
    useEffect(()=>{},[formState]);

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="custom-position">
                    <button className="btn btn-outline-primary" onClick={ () => setFormState(!formState)}><VscCompareChanges /> Toggle forms</button>
                </div>
                {
                    formState ? <SimpleForm /> :  <WithFormik />
                }
            </div>
        </div>
    );
}

export default Wrapper
