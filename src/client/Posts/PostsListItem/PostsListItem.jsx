import {useState} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import Modal from '../../../shared/components/Modal';
import UpdatePost from '../../Posts/UpdatePost'
import Button from '../../../shared/components/Button'

import styles from './PostsListItem.module.scss'


const PostsListItem = ({ id, title, body, onDelete }) => {
    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => {
    setOpenModal(!openModal)
    }

    
    return (
        <div className={styles.post}>
            {openModal && <Modal onClose={toggleModal}><UpdatePost id={ id }/></Modal>}
            <li>
                <Link to={`/posts/${id}`} className={styles.postItem}>
                    <h2 className={styles.postTitle}>{title}</h2>
                    <p className={styles.postText}>{body}</p>
                </Link>
            </li>
            <div className={styles.btnWrapper}>
                <Button onClick={ onDelete } className={styles.btnDelete}>delete</Button>
                <Button onClick={ toggleModal } className={styles.btnUpdate}>update</Button>
            </div>
        </div>
    )
};

export default PostsListItem;

PostsListItem.defaultProps = {
    id: null,
    title: '',
    body: '',
    onDelete: ()=>{}

}


PostsListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    onDelete: PropTypes.func,
}

