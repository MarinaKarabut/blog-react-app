import {useCallback} from 'react';
import { useDispatch } from 'react-redux'

import Button from '../../../shared/components/Button';
import FormInput from '../../../shared/components/FormInput'
import Textarea from '../../../shared/components/Textarea'
import { fields } from './fields'
import { initialState } from './initialState'
import useForm from '../../../shared/hooks/useForm'
import { addPost } from '../../../redux/posts/posts-operations'

import styles from './NewPost.module.scss'

const NewPost = () => {
    const { title, body } = fields

    const dispatch = useDispatch();
    

    const onSubmit = useCallback((data) => dispatch(addPost(data)), [dispatch]);

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <FormInput {...title} value={ data.title} onChange={handleChange}/>
                <Textarea {...body} value={data.body} onChange={handleChange}></Textarea>
                <div className={styles.btnWrapper}>
                    <Button type="submit">Create</Button>
                </div>
                
            </form>
        </div>
    )
};

export default NewPost;
