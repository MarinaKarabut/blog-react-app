import { useEffect } from 'react';
import { useParams, useHistory, useLocation} from "react-router-dom"
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import SinglePost from '../../Posts/SinglePost'
import { getOnePosts } from '../../../redux/posts/posts-operations'

import styles from './SinglePostPage.module.scss'
import Button from '../../../shared/components/Button';


const SinglePostPage = () => {

    const post = useSelector(state => state.posts.post, shallowEqual)

    const comments = useSelector(state => state.posts.comments, shallowEqual)

    const history = useHistory();
    const location = useLocation();


    const { postId } = useParams();


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOnePosts(postId))
    }, [dispatch])

    
    
    const handleGoBack = () => {
        history.push(location?.state?.from ?? '/')
    }



    return (
        <div className={styles.container}>
            <Button className={styles.btn} onClick={handleGoBack}>Go back</Button>
            <SinglePost post={post} comments={comments}/>
        </div>
        
    )
};

export default SinglePostPage;
