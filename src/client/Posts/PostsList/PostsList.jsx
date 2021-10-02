import { useCallback} from 'react';
import {useDispatch} from 'react-redux'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'

import { deletePost } from '../../../redux/posts/posts-operations';

import PostsListItem from '../PostsListItem'

import styles from './PostsList.module.scss'


function PostsList({ posts }) {
    
    const dispatch = useDispatch()

    const onDeletePost = useCallback((id) => dispatch(deletePost(id)), [dispatch])

    const postEl = posts.map(({ id, ...post }) => <PostsListItem key={v4()} id={id} {...post} onDelete={() => onDeletePost(id)}/>)
    
    return (
        <>
            <ul className={ styles.postList}>
                {postEl }
            </ul>
        </>
    )
};

export default PostsList;

PostsList.defaultProps = {
    posts: [],

}


PostsList.propTypes = {
    posts: PropTypes.array,

}
