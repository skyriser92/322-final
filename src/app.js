import React, { Component } from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import TaskList from './TaskList';
import AddTask from './AddTask';
import TaskBoard from './TaskBoard';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            accounts: [],
            transactions: []
        };
    }

    onUpdateTaskList = (newTaskList) => {
        this.setState({accounts: newTaskList});
    }

    componentDidMount() {
        this.getData();
    }


    getData() {
        axios.get('https://my-json-server.typicode.com/bnissen24/Project2DB/accounts')
            .then(response => {
                this.setState({accounts: response.data});
            }).catch(error => {
            this.setState({errorMessage: error.message});
        });

        axios.get('https://my-json-server.typicode.com/bnissen24/Project2DB/transactions')
            .then(response => {
                this.setState({transactions: response.data});
            }).catch(error => {
            this.setState({errorMessage: error.message});
        });
    }


    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (name) => {
        //event.preventDefault();
        let balance = 500;
        this.setState({
            term: '',
            accounts: [ ... this.state.accounts, { name, balance }]
        });
    }
    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }
    onViewChange(view) {
        this.setState({ view });
    }
    render() {
        const {view} = this.state;

        switch (view) {
            case 'TaskList':
                return (this.wrapPage(
                    <TaskList accounts={this.state.accounts} />
                ));
            case 'TaskBoard':
                return (this.wrapPage(
                    <TaskBoard accounts={this.state.accounts} transactions={this.state.transactions}/>
                ));
            case 'AddTask':
                return (this.wrapPage(
                    <AddTask onSubmit={this.onSubmit} />
                ));
            default:
                return (this.wrapPage(
                    <h2>Invalid Tab, choose another</h2>
                ));
        }
    }
}

export default App;
