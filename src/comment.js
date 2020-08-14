import React from 'react';
import {Comment, Form, Button, Header} from 'semantic-ui-react'


import person from "./person.png"

class Comments extends React.Component{

  render(){
    return(<Comment.Group>
      <Header as='h3' dividing>
        Comments
      </Header>

      <Comment>
        <Comment.Avatar src={person} />
        <Comment.Content>
          <Comment.Author as='a'>맹구</Comment.Author>
          <Comment.Metadata>
            <div>Today at 9:53PM</div>
          </Comment.Metadata>
          <Comment.Text>끼얏호우</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>



      <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>)
 }
}

export default Comments
