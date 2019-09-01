import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


const CommentCard = (props) => (
  <Comment.Group>
    <Header as='h3' dividing>
    {props.review.cat_id}
    </Header>

    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{}</Comment.Author>
        <Comment.Text>{props.review.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentCard
