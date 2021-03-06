import React, { useState } from 'react'
import axios from 'axios'

function CommentCreate({ postId }) {
    const [content, setContent] = useState('');

    const onSumbit = async (event) => {
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
        });
        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSumbit}>
                <div className="form-group">
                    <label>New comment</label>
                    <input
                        className="form-control"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate
