import React, { Component } from 'react';
import { Alert, Intent } from '@blueprintjs/core';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteCollection } from 'src/actions';


const messages = defineMessages({
  button_confirm: {
    id: 'mapping.save.confirm',
    defaultMessage: 'Update mapping & re-import',
  },
  button_cancel: {
    id: 'mapping.save.cancel',
    defaultMessage: 'Cancel',
  },
});


class EntityImportSaveDialog extends Component {
  render() {
    const { intl } = this.props;
    return (
      <Alert
        isOpen={this.props.isOpen}
        icon="floppy-disk"
        intent={Intent.PRIMARY}
        cancelButtonText={intl.formatMessage(messages.button_cancel)}
        confirmButtonText={intl.formatMessage(messages.button_confirm)}
        onCancel={this.props.toggleDialog}
        onConfirm={this.props.onSave}
      >
        <FormattedMessage
          id="collection.save.question"
          defaultMessage="Updating this mapping will delete any previously extracted entities. Are you sure you would like to continue?"
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
)(EntityImportSaveDialog);
