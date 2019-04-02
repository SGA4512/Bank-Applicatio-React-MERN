import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class Detail extends Component {
    state = {  }

    getFormatedDate = (date) => {
        let formatedDate = new Date(date);
        return formatedDate.toString();
    }

    getAllTransation = () => {
        let html = this.props.accountInfo.transations.map(tran => {
            return <tr key={tran._id} ><td> {tran.transationType } </td><td className={ tran.transationType === 'Withdraw' ? 'withdraw' : 'deposit' }> ${tran.amount } </td><td> { this.getFormatedDate(tran.date) }</td></tr>
        })

        return html;
    }

    render() { 
        return ( 
            <div className="detail">
              <div className="row">
                <div className="col-sm-4">
                    <label>Account Number:</label>
                </div>
                <div className="col-sm-8">
                    <span>{ this.props.accountInfo.accountNumber }</span> 
                </div>
               </div>
               <div className="row">
                <div className="col-sm-4">
                    <label>Account Type:</label>
                </div>
                <div className="col-sm-8">
                    <span>{ this.props.accountInfo.type }</span> 
                </div>
               </div>
               <div className="row">
                <div className="col-sm-4">
                    <label>Name:</label>
                </div>
                <div className="col-sm-8">
                <span>{ this.props.accountInfo.name }</span> 
                </div>
                </div>
                <div className="row">
                <div className="col-sm-4">
                    <label>Address:</label>
                </div>
                <div className="col-sm-8">
                <span>{ this.props.accountInfo.address }</span> 
                </div>
                </div>
                <div className="row">
                <div className="col-sm-4">
                    <label>Phone No. :</label>
                </div>
                <div className="col-sm-8">
                <span>{ this.props.accountInfo.phone }</span> 
                </div>
                </div>
                <div className="row">
                <div className="col-sm-4">
                    <label>Balance :</label>
                </div>
                <div className="col-sm-8">
                <span><b>${ this.props.accountInfo.balance }</b></span> 
                </div>
                </div>
                <div className="row">
                <div className="col-sm-4">
                    <label>Last Transation Date:</label>
                </div>
                <div className="col-sm-8">
                <span> { this.getFormatedDate(this.props.accountInfo.lasttransation) }</span> 
                </div>
                </div><br/>
                <div className="row">
                    <div className="col-sm-12"> 
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr><th>Transation Type</th><th>Amount</th><th>Date</th></tr>    
                        </thead>    
                        <tbody>
                            { this.getAllTransation() }
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm-12"    style={{ textAlign: 'right'}}>
                <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-primary"
                  onClick={() => { history.push('/') }}
                  style={{ marginRight: '15px'}}
                >
                 Home
                </button>
                  )} />
                   <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-primary"
                  onClick={() => { history.push('/deposit') }}  
                  style={{ marginRight: '15px'}}
                >
                 Deposit Fund
                </button>
                  )} />
                   <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-primary"
                  onClick={() => { history.push('/withdraw') }}
                >
                 Withdraw Fund
                </button>
                  )} />
                </div>
                </div>
            </div>
         );
    }
}
 
export default Detail;