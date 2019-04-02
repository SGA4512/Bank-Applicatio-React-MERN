import React from 'react';
import { Route } from 'react-router-dom';

class CreateAccount extends React.Component{

    state = {
      name: "",
      address: "",
      phone: "",
      balance: "",
      type: "",
      messageData: null
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const request = new Request('/account/create', {
          crossDomain:true,
          method: 'POST',  
          redirect: 'follow',
          headers: new Headers({'Content-Type': 'application/json'}),
          credentials: 'same-origin',
          body: JSON.stringify({
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            balance: this.state.balance,
            type: this.state.type
      })
    });
  
        fetch(request)
          .then(response => { return response.json(); })
          .then(data => { this.setState({messageData: data})})
          .catch(errors => { console.log(`Could not fetch previous account entries: ${errors}`);})


       //   this.props.history.push('/');
    }

    render(){
      var sucessMessage = "";
      var accountDetails = "";
      if (this.state.messageData !== null) {
        let classes = "alert alert-" + this.state.messageData.type;
        sucessMessage =  <div className={classes} role="alert">{ this.state.messageData.message }</div>;
        if(this.state.messageData.type === "success"){
        accountDetails = <Route render={({ history}) => (
          <button
            type='button'
            className="btn btn-primary"
            onClick={() => { history.push('/accountDetails') }}
          >
            Get Account Details
          </button>
            )} />
          }
      }

        return(
          <div className="container">
            <div className="col-md-offset-3 col-md-6">
              <h2>Create New Account</h2>
          <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control" placeholder="Name" 
                        value={ this.state.name } 
                        onChange = {e => this.setState({name: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Address</label>
                    <input type="text" className="form-control" placeholder="Address"  
                    value={ this.state.address } 
                    onChange = {e => this.setState({address: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPhone">Phone No.</label>
                    <input type="number" className="form-control" placeholder="Phone No."  
                    value={ this.state.phone } 
                    onChange = {e => this.setState({phone: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputDeposit">Initial Deposit</label>
                    <input type="text" className="form-control" placeholder="Initial Deposit"  
                    value={ this.state.balance } 
                    onChange = {e => this.setState({balance: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputDeposit">Account Type</label>
                    <select type="text" className="form-control" placeholder="Account Type"  
                    value={ this.state.type } 
                    onChange = {e => this.setState({type: e.target.value})}
                    >
                    <option value="">Select Type</option>
                    <option value="checking">Checking</option>
                    <option value="saving">Saving</option>
                    </select>
                </div>
              <div style={{ textAlign: 'right' }}>
                <Route render={({ history}) => (
            <button
              type='button'
              className="btn btn-primary"
              style={{ marginRight: '15px' }}
              onClick={() => { history.push('/') }}
            >
              Cancel
            </button>
              )} />
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <br/>

              {sucessMessage}

              {accountDetails}
           
            </div>
            </div>
        )
    }
}

export default CreateAccount;