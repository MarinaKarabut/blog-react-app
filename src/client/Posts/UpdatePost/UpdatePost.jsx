import { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import useForm from '../../../shared/hooks/useForm'
import { initialState } from './initialState'
import { fields } from './fields'
import FormInput from '../../../shared/components/FormInput'
import Textarea from '../../../shared/components/Textarea'
import Button from '../../../shared/components/Button'

import { updatePost } from '../../../redux/posts/posts-operations'

import styles from './UpdatePost.module.scss'


const UpdatePost = ({ id }) => {
    // console.log(id);
    const { title, body } = fields

    const dispatch = useDispatch();

    const onSubmit = useCallback((id, data ) => dispatch(updatePost(id, data)), [dispatch]);

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit});

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <FormInput {...title} value={ data.title} onChange={handleChange}/>
                <Textarea {...body} value={data.body} onChange={handleChange} />
                <div className={styles.btnWrapper}>
                    <Button type="submit">Update</Button>
                </div>     
            </form>
        </div>
    )
};

export default UpdatePost;
