import React from 'react';

import ProgressBar from './ProgressBar';
import './ListProgress.css';

const ListProgress = (props) =>{
    let femaleUsers =props.rowData.filter(el=>el.Gender=="Female")
    let maleUsers = props.rowData.length-femaleUsers.length
  return(
      <div className="ListProgress">
            <h2>List Progress</h2>
             <ProgressBar rowData={props.rowData} users={props.formEleArr}/>
                <h4>Female Users</h4> <p>{femaleUsers.length}</p>
                <h4>Male Users</h4>  <p>{maleUsers}</p>     
      </div>
  )
}

export default ListProgress;