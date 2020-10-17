import React, {Component} from 'react';

import UserList from './components/UI/userList';
import ListProgress from './components/UI/ListProgress';
import ModalPopUp from './components/modalPopup/ModalPopUp'

import './App.css';


class App extends Component {
  state={
    showModal:false,
    orderForm: {
      Fullname: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Your Name'
          },
          value: ''
      },
      DOB: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'DOB'
          },
          value: ''
      },
      Languages: {
          elementType: 'select',
          elementConfig: {
              options: [
                  {value: 'English', displayValue: 'English'},
                  {value: 'Hindi', displayValue: 'Hindi'}
              ]
          },
          value: 'English'
      },
      Gender: {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 'Male', displayValue: 'Male'},
                {value: 'Female', displayValue: 'Female'}
            ]
        },
        value: 'Male'
    },
    About: {
      elementType: 'input',
      elementConfig: {
          type: 'text',
          placeholder: 'About'
      },
      value: ''
  },
  },
  rowData : []
  }

  showModal =()=>{
     this.setState({showModal:true});
  }

  handleclose =()=>{
    this.setState({showModal:false});
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
}
orderHandler = ( event ) => {
  event.preventDefault();
  const formData = {};
  for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
  }
  const UserDetails = {
      orderData: formData
  }
  const tempData = [...this.state.rowData];
  tempData.push(formData);
  // this.setState((prevState, props) => {
  //   const row = formData;
  //   return { rowData: [...prevState.rowData, row] };
  // });
  this.setState({rowData:tempData})
  console.log(this.state.rowData)
}

  render(){

    return(
      <div className="container">
        <div className="row">
          <ModalPopUp show={this.state.showModal} orderHandler={this.orderHandler} changed={this.inputChangedHandler} formEleArr={this.state.orderForm} handleclose={this.handleclose} ord/>
          <div className="leftCol col-md-9">
              <UserList click={this.showModal} rowData={this.state.rowData}/>
          </div>
          <div className="rightCol col-md-3">
            <ListProgress rowData={this.state.rowData} formEleArr={this.state.orderForm}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;