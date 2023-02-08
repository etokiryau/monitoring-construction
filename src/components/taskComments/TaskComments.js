import { useState, useMemo, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';

import chat from './img/chat.svg';

import './taskComments.scss';

const TaskComment = () => {
    const [commentList, setCommentList] = useState([]);
    const windowRef = useRef(window);
    let windowHeight = windowRef.current.innerHeight;

    const updateCommentList = (data) => {
        const currentDate = new Date().toLocaleDateString();
        const newComment = {date: currentDate, text: data};
        setCommentList([...commentList, newComment]);
    }

    const renderCommentContent = (data) => {
        const commentContent = data.map((item, i) => {
            return (
                <div key={i} className="comments__list-piece">
                    <p name="text">{item.text}</p>
                    <p name="date">{item.date}</p>
                </div>
            )
        })

        return commentContent;
    }
    
    const commentContent = 
        renderCommentContent(commentList);
    

    return (
        <div className="comments">
            <div className="comments__list" style={{maxHeight: windowHeight - 250}}>
                {commentContent}
            </div>
            <div>
                <Formik
                    initialValues = {{
                        comment: ''
                    }}
                    onSubmit = { ({comment}, {resetForm}) => {
                        if (comment.length) updateCommentList(comment);
                        resetForm({comment: ''});
                    }}
                >
                    <Form>
                        <div className="comments__add">
                            <button 
                                type="submit">
                                <img src={chat} alt="chat" />
                            </button>
                            <Field 
                                id="comment" 
                                name="comment" 
                                type="text" 
                                placeholder="Comment"
                                autocomplete="off"/>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default TaskComment;

console.log(new Date().toLocaleDateString())