import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
  Button, Modal, ModalBody
} from 'reactstrap';
import "./styles.scss";

const CreateListDialog = (props) => {
  const { isOpen, toggle, listCreateHandler } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalBody className="modal-body">
        <h3 className="modal-heading">Create new packing list</h3>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="modal-input mb-5"
          placeholder="Name"
        />
        <select
          required
          className="modal-input"
        >
          <option value="" hidden>Use as template</option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
        <div className="d-flex justify-content-center pt-5">
          <Button
            className="tw-button-filled"
            color="danger"
            onClick={() => {
              listCreateHandler(inputValue);
              toggle();
            }}
          >
            Create
          </Button>{' '}
          <Button
            className="tw-button-link"
            color="secondary"
            onClick={toggle}
          >
            Cancel
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

CreateListDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  listCreateHandler: PropTypes.func.isRequired,
};

export default CreateListDialog;
