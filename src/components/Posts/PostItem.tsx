import React from 'react'
//styles
import { Wrapper } from './PostItem.styles'

//types
import { PostType } from '../../api/API';


interface Props {
    item: PostType
}

const PostItem: React.FC<Props> = ({ item }) => {
    return (
        <>
            <Wrapper>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            </Wrapper>
        </>
    )
}

export default PostItem