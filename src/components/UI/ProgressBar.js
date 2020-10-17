import React from 'react';

const ProgressBar =(props)=>{
    return(
        <div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={!!props.rowData?props.rowData.length*10+'%':'0'} aria-valuemin="0" aria-valuemax="100" style={{width:!!props.rowData?props.rowData.length*10+'%':'0%'}}>
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;