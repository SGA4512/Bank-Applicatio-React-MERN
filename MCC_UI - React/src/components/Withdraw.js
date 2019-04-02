import React, { Component } from 'react';
import Detail from './Detail';
import { Route } from 'react-router-dom';


class Withdraw extends Component {
    state = { accountNumber : "" , withdrawAmount: "", accountInfo: null,  messageData: null }

    withdrawFund = () => {
        const request = new Request('/account/withdraw/' + this.state.accountNumber, {
            crossDomain:true,
            method: 'PUT',  
            redirect: 'follow',
            headers: new Headers({'Content-Type': 'application/json'}),
            credentials: 'same-origin',
            body: JSON.stringify({
                'amount': this.state.withdrawAmount
            })
          });
    
          fetch(request)
            .then(response => { return response.json(); })
            .then(res => {   
                if(res.type === 'success'){
                  this.setState({ accountInfo: res.data })
                }else{
                  this.setState({messageData: res})
                }
            })
            .catch(errors => { console.log(errors);})
    }

    render() { 
      var errorMessage = "";
   
      if (this.state.messageData !== null && this.state.messageData.type === 'danger') {
        errorMessage =  <div className="alert alert-danger" role="alert" style={{ marginTop: '15px'}}>{ this.state.messageData.message }</div>;
      }

        let detailHtml = "";
        if(this.state.accountInfo !== null){
          detailHtml = <Detail accountInfo={ this.state.accountInfo } />
        }

        return ( 
            <div className="container">
            <div className="col-md-offset-1 col-md-10">
              <h2>Withdraw from account</h2>
              <div className="form-group">
                    <label htmlFor="exampleInputAddress">Please enter your account number</label>
                    <input type="text" className="form-control" placeholder="Account Number" style={ { width: '300px' } }
                    value={ this.state.accountNumber } 
                    onChange = {e => this.setState({accountNumber: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Please enter withdral amount</label>
                    <input type="text" className="form-control" placeholder="Amount" style={ { width: '300px' } }
                    value={ this.state.withdrawAmount } 
                    onChange = {e => this.setState({withdrawAmount: e.target.value})}
                    />
                </div>
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
                <button type="submit" className="btn btn-primary" onClick={this.withdrawFund}>Submit</button>
                { errorMessage }
                { detailHtml }
            </div>
            </div>
         );
    }
}
 
export default Withdraw;