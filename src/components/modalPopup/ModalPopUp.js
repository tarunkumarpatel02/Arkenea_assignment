import React from 'react';

import './ModalPopUp.css';
import Input from  '../UI/Input';

const ModalPopUp =(props)=>{
    const showHideModal = props.show?"modal display-block":"modal display-none";
    const formElementsArray = [];
        for (let key in props.formEleArr) {
            formElementsArray.push({
                id: key,
                config: props.formEleArr[key]
            });
        }
        let form = (
            <form onSubmit={props.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        label={formElement.config.label}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event)=> props.changed(event,formElement.id)} />
                ))}
                <button className='btn btn-success'>Add New User</button>
            </form>
        );
   return(
       <div className={showHideModal}>
           <div className="modal-main form-horizontal">
                <button className='btn btn-danger' onClick={props.handleclose}>close</button>
                <div className="row">
                        <h3>Add New User</h3>
                </div>
                 {form}
           </div>
       </div>
   )
}

export default ModalPopUp;