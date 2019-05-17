import React from 'react';

import './styleCasey.css';



const TaskItem = props => {


  return (


      <tbody className="tableBodyStyle">
        <tr>
          <td className="titleStyle tableRowStyle g">{ props.accounts.name }</td>
          <td className="statusStyle tableRowStyle">{props.accounts.balance}</td>
        </tr>
      </tbody>

  )
};

export default TaskItem;