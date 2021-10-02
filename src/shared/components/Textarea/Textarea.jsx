import PropTypes from 'prop-types'
import { v4 } from 'uuid';

import styles from './Textarea.module.scss'

const Textarea = ({ className, ...inputProps }) => {
    const id = v4();

    return (
        <textarea name="" id={ id } cols="30" rows="10" className={`${styles.textarea} ${className}`} {...inputProps}></textarea>
    )
};

export default Textarea;

Textarea.defaultProps = {
    required: false,
    placeholder: '',
    className: '',
    value: '',
    type: 'text',
    name: '',
    onChange: () => { }
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
}
