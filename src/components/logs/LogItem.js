import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog }) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({html: 'Log Deleted' });
    };
    return (
        <li className='collection-item'>
            <div>
                <a href='#edit-log-modal' 
                className={`modal-trigger 
                  ${log.attention ? 'red-text' : 'blue-text'
                }`}
            >
                 {log.message}
                </a>
                <br />
                <span className='grey-text'>
                   <span className="black-text">Ticket id #{log.id}</span> last update by: {' '}
                   <span className='black-text'>{log.tech}</span> on{' '} 
                   <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
                
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleLog: PropTypes.func.isRequired

}
export default connect(null, { deleteLog })(LogItem);
