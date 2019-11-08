import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { ic_done } from '../../utils/icons';

const SyncedStatus = props => {
  return (
    <Fragment>
      {props.syncedStatus === false ? (
        <Spinner size="sm" animation="grow" role="status" />
      ) : (
        <Icon icon={ic_done} />
      )}
    </Fragment>
  );
};

SyncedStatus.propTypes = {
  syncedStatus: PropTypes.bool,
};

export default SyncedStatus;
