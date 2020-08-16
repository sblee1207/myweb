import React from "react";
import { Comment, Form, Button, Header, Icon, Grid } from "semantic-ui-react";

import person from "./person.png";

class Comments extends React.Component {
  render() {
    return (
      <Comment.Group style={{ marginLeft: "180px" }}>
        <Header as="h3" dividing>
          댓글 달기
        </Header>

        <Comment>
          <Comment.Avatar src={person} />
          <Comment.Content>
            <Comment.Author as="a">맹구</Comment.Author>
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
          <Button content="작성" labelPosition="left" icon="edit" primary />
        </Form>
        <br />
      </Comment.Group>
    );
  }
}

export default Comments;
