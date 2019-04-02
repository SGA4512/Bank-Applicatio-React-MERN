import React from 'react';
import { Route } from 'react-router-dom';


class Landing extends React.Component{

    render(){
        return (
            <div className="container landing">
             <div className="col-sm-8 col-sm-offset-2">
              <div className="row">
                <div className="col-sm-4">
                <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-primary"
                  onClick={() => { history.push('/create') }}
                >
                  Create New Account
                </button>
                  )} />
                </div>
                <div className="col-sm-4">
                <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-primary"
                  onClick={() => { history.push('/accountDetails') }}
                >
                  Get Account Details
                </button>
                  )} />
                </div>
                <div className="col-sm-4">
                <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-primary"
                  onClick={() => { history.push('/deposit') }}
                >
                Deposite Fund
                </button>
                  )} />
                </div>
              </div>
              <div className="row">
              <div className="col-sm-4 col-sm-offset-2">
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
                <div className="col-sm-4">
                <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-primary"
                  onClick={() => { history.push('/trasations') }}
                >
                  Get All Trasation Details
                </button>
                  )} />
                </div>
              </div>
              </div>
            </div>
        )
    }

}

export default Landing;