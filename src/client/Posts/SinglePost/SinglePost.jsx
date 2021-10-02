import {useState} from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'

import Button from '../../../shared/components/Button'
import Modal from '../../../shared/components/Modal';
import Comment from '../Comment'

import styles from './SinglePost.module.scss'


const SinglePost = ({ post, comments}) => {
    const { title, body, id} = post

    const [openModal, setOpenModal] = useState(false)

     const [postId, setPostId] = useState(null)

    const toggleModal = () => {
        setOpenModal(!openModal)
        setPostId(id)
    }


    const commentEl = comments.map((comment) => <li key={v4()} className={styles.postCommentItem} >{comment.body}</li>)

    return (
        <div className ={styles.post}>
            <div>
                <h2 className={styles.postTitle}>{title}</h2>
                <p className={styles.postText}>{ body }</p>
            </div>
            <div>
                {openModal && <Modal onClose={toggleModal}><Comment id={ postId}/></Modal>}
                <h3 className={ styles.postCommentTitle}>Comments</h3>
                <ul >
                    {commentEl}
                </ul>
                <Button onClick={ toggleModal }>Add comment</Button>
            </div>

        </div>
    )
};

export default SinglePost;

SinglePost.defaultProps = {
    post: {},
    comments:[]
}


SinglePost.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        body:PropTypes.string,
    }),
    comments: PropTypes.array,
}

