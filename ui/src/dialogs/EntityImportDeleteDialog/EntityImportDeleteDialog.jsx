import React, { Component } from 'react';
import { Alert, Intent } from '@blueprintjs/core';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteCollection } from 'src/actions';


const messages = defineMessages({
  button_confirm: {
    id: 'collection.delete.confirm',
    defaultMessage: 'Delete',
  },
  button_cancel: {
    id: 'collection.delete.cancel',
    defaultMessage: 'Cancel',
  },
});


class EntityImportDeleteDialog extends Component {
  render() {
    const { intl } = this.props;
    return (
      <Alert
        isOpen={this.props.isOpen}
        icon="trash"
        intent={Intent.DANGER}
        cancelButtonText={intl.formatMessage(messages.button_cancel)}
        confirmButtonText={intl.formatMessage(messages.button_confirm)}
        onCancel={this.props.toggleDialog}
        onConfirm={this.props.onDelete}
      >
        <FormattedMessage
          id="collection.delete.question"
          defaultMessage="Are you sure you want to delete this dataset and all contained items?"
        />
      </Alert>
    );
  }
}

const mapDispatchToProps = { deleteCollection };

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
  injectIntl,
)(EntityImportDeleteDialog);
