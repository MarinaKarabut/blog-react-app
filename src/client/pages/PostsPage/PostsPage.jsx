import {useState, useEffect} from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import PostsList from '../../Posts/PostsList'
import Button from '../../../shared/components/Button'
import Modal from '../../../shared/components/Modal'
import NewPost from '../../Posts/NewPost'
import { fetchPosts } from '../../../redux/posts/posts-operations'

import styles from './PostsPage.module.scss'


const PostsPage = () => {
    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => {
    setOpenModal(!openModal)
    }
    
    const postsList = useSelector(state => state.posts.posts, shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


    return (
        <div className ={styles.container}>
            <Button onClick = { toggleModal }>Create a new post</Button>
            <PostsList posts={postsList} />
            {openModal && (<Modal onClose = { toggleModal }><NewPost/></Modal>)}
        </div>
        
    )
};

export default PostsPage;
