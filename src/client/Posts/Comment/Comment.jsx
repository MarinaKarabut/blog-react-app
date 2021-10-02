import {useCallback} from 'react';
import { useDispatch } from 'react-redux'

import Button from '../../../shared/components/Button';
import Textarea from '../../../shared/components/Textarea'
import { fields } from './fields'
import { initialState } from './initialState'
import useForm from '../../../shared/hooks/useForm'
import { addComment } from '../../../redux/posts/posts-operations';

import styles from './Comment.module.scss'


const Comment = ({ id }) => {
    console.log(id);
    const { body } = fields


    const dispatch = useDispatch();

    const onSubmit = useCallback((data) => dispatch(addComment(data, id)), [dispatch]);
    

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

 

    return (
        <div>
            <form onSubmit={handleSubmit} className={ styles.form }>
                <Textarea {...body} value={data.body} onChange={handleChange} />
                <div className={styles.btnWrapper}>
                    <Button type="submit">Create</Button>
                </div>          
            </form>
        </div>
    )
};

export default Comment;
