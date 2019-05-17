import React from 'react';

import './PageTabs.css';

class TaskBoard extends React.Component {

    state = {
        log: [],
        account: ''
    };

    getTransactions = () => {
        let account = this.state.account;
        let list = this.props.transactions.filter(list => list.accountId === account.id);

        console.log(this.props.transactions)

        this.setState({log: list})
    }

    todoCards = this.state.log.map(record => {
            return (<li>
                {record.name} <br />
                {record.type} <br />
                {record.amount} <br />
            </li>);
    });

    options = this.props.accounts.map(account=> {
        return(<option value={account.id} onClick={this.getTransactions(account)}>{account.name}</option>)
    });

    render() {
        return (<div class="board">
            <div>
                <select value={this.setState.account} onChange={(e) => this.setState({account: e.target.value})}>
                    <option value="default">Pick an Option...</option>
                    {this.options}
                </select>
            </div>
            <div>
                <h1>History</h1>
            <ul>
                {this.todoCards}
            </ul>
            </div>
        </div>)
    }



};


export default TaskBoard