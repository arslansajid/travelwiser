import React from 'react';
import PropTypes from "prop-types";
import {
  Popover, PopoverBody, Button
} from 'reactstrap';
import "./styles.scss";

const DeleteListDialog = (props) => {
  const { id, isOpen, toggle, listDeleteHandler } = props;

  return (
    <Popover placement="bottom" isOpen={isOpen} target={id} toggle={toggle}>
      <PopoverBody>
        <div className="message">Are you sure you want to delete this packing list?</div>
        <div className="d-flex justify-content-center pt-3">
          <Button
            className="tw-button-filled mr-2"
            color="danger"
            onClick={() => {
              toggle();
              listDeleteHandler()
            }}
          >
            Delete
          </Button>{' '}
          <Button
            className="tw-button-link p-0"
            color="secondary"
            onClick={toggle}
          >
            Cancel
          </Button>
        </div>
      </PopoverBody>
    </Popover>
  )
}

DeleteListDialog.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  listDeleteHandler: PropTypes.func.isRequired,
};

export default DeleteListDialog;
