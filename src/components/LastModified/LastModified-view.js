import React from 'react';
import PropTypes from 'prop-types';
import SyncedStatus from '../SyncedStatus';
import './LastModified.css';

const LastModified = props => (
  <div>
    <div className="last-modified">
      Last modified on {convertEpochToDate(props.date)}
      &nbsp;
      {props.user && <SyncedStatus synced={props.synced} />}
    </div>
  </div>
);

const convertEpochToDate = epoch => {
  return new Date(epoch).toLocaleString();
};

LastModified.propTypes = {
  date: PropTypes.number,
  user: PropTypes.object,
  synced: PropTypes.bool,
};

export default LastModified;