import React, { useState } from 'react';
import PropTypes from "prop-types";
import "./styles.scss";
import { ReactComponent as RemoveIcon } from "../../assets/Icons/remove.svg";

const ListItem = (props) => {
    const { index, title, removeItem } = props;
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="d-flex justify-content-between w-100 mb-1">
            <div className="d-flex">
                <button
                    onClick={() => removeItem(index)}
                    className="remove-btn"
                >
                    <RemoveIcon width='10' height='10' />
                </button>

                <p className="title">{title}</p>
            </div>

            {
                count > 0
                    ?
                    <div className="d-flex count-btns-container">
                        <button
                            onClick={() => decrement()}
                            className="count-btn"
                        >
                            <span className="minus">
                                &minus;
                            </span>
                        </button>
                        <div className="count-value">{count}</div>
                        <button
                            onClick={() => increment()}
                            className="count-btn"
                        >
                            <span className="plus">
                                &#43;
                            </span>
                        </button>
                    </div>
                    :
                    <div className="count-zero-container">
                        <button
                            onClick={() => increment()}
                            className="count-btn"
                        >
                            <span className="plus">
                                &#43;
                            </span>
                        </button>
                    </div>
            }
        </div>
    )
}

ListItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default ListItem;