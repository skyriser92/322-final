import React from 'react';

import TaskItem from './TaskItem';

import './styleCasey.css';

import './FilterSelector';
import FilterSelector from "./FilterSelector";


class TaskList extends React.Component {



  render() {
    const taskItems = this.props.accounts.map(account => {
      return <TaskItem accounts={account} key={account.id}/>
    });

    return (

        <table align="center" className="tableStyling">
          <tbody>
          <tr>
            <th align="left" className="tableHeadingStyling">Name</th>
            <th align="center" className="tableHeadingStyling">balance</th>
          </tr>
          </tbody>

          {taskItems}
        </table>
    )
  }
}

export default TaskList;