import React from 'react';
import Detail from './Detail';
import { Route } from 'react-router-dom';

class AccountDetails extends React.Component{

    state = { accountNumber : "" , accountInfo: null }

    getDtails = () => {
    
        const request = new Request('/account/' + this.state.accountNumber , {
            method: 'GET',  
            crossDomain:true,
            redirect: 'follow',
            credentials: 'same-origin',
            headers: new Headers({'Content-Type': 'application/json'})
          });
    
          fetch(request)
            .then(response => { return response.json(); })
            .then(data => { 
                this.setState({ accountInfo: data })
            } )
            .catch(errors => { console.log(`Could not fetch Account Details: ${errors}`);})

    }

    render(){
      let detailHtml = "";
      if(this.state.accountInfo !== null){
        detailHtml = <Detail accountInfo={ this.state.accountInfo } />
      }

        return(
          <div className="container">
            <div className="col-md-offset-1 col-md-10">
              <h2>Account Details</h2>
              <div className="form-group">
                    <label htmlFor="exampleInputAddress">Please enter your account number</label>
                    <input type="text" className="form-control" placeholder="Account Number" style={ { width: '300px' } }
                    value={ this.state.accountNumber } 
                    onChange = {e => this.setState({accountNumber: e.target.value})}
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
                <button type="submit" className="btn btn-primary" onClick={this.getDtails}>Submit</button>
                { detailHtml }
            </div>
            </div>
        )
    }
}

export default AccountDetails;