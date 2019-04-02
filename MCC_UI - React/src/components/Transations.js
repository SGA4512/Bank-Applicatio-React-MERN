import React from 'react';
import { Route } from 'react-router-dom';

class Transations extends React.Component{

    state = { accountNumber : "" , transations: null }

    getTransation = () => {
    
        const request = new Request('/account/transations/' + this.state.accountNumber , {
            method: 'GET',  
            crossDomain:true,
            redirect: 'follow',
            credentials: 'same-origin',
            headers: new Headers({'Content-Type': 'application/json'})
          });
    
          fetch(request)
            .then(response => { return response.json(); })
            .then(data => { 
                this.setState({ transations: data })
            } )
            .catch(errors => { console.log(`Could not fetch Account Details: ${errors}`);})

    }
    
    getFormatedDate = (date) => {
        let formatedDate = new Date(date);
        return formatedDate.toString();
    }

    getAllTransation = () => {
            if(this.state.transations !== null){
            let html = this.state.transations.map(tran => {
                return <tr key={tran._id} ><td> {tran.transationType } </td><td className={ tran.transationType === 'Withdraw' ? 'withdraw' : 'deposit' }> ${tran.amount } </td><td> { this.getFormatedDate(tran.date) }</td></tr>
            })

            return html;
        }
    }

    render(){
     
        return(
          <div className="container">
            <div className="col-md-offset-1 col-md-10">
              <h2>Account Transations</h2>
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
                <button type="submit" className="btn btn-primary" onClick={this.getTransation}>Submit</button>
           
                    <table className="table table-bordered table-striped" style={{ marginTop: '15px' }}>
                        <thead>
                            <tr><th>Transation Type</th><th>Amount</th><th>Date</th></tr>    
                        </thead>    
                        <tbody>
                            { this.getAllTransation() }
                        </tbody>
                    </table>
                
            </div>
            </div>
        )
    }
}

export default Transations;