import React from "react";
import { Button, Image, Divider, Header, Icon, Grid } from "semantic-ui-react";

import Comments from "./comment.js";

import 짱구 from "./짱구.jpeg";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={짱구} centered />
        </Grid.Row>

        <Grid.Row>
          <Button
            color="red"
            content="좋네오^^"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "1720",
            }}
          />
          <Button
            color="blue"
            content="퍼가요^*^"
            icon="share alternate"
            label={{
              as: "a",
              basic: true,
              color: "blue",
              pointing: "left",
              content: "1724",
            }}
          />
        </Grid.Row>
      </Grid>
      <br />

      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment outline" />
          댓글을 남겨조
        </Header>
      </Divider>

      <Comments />
      <br />
      <Divider horizontal>
        <Header as="h4">연락줘</Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button circular color="call" icon="call" />
          <Button circular color="twitter" icon="envelope" />
          <Button circular color="facebook" icon="facebook messenger" />
          <Button circular color="instagram" icon="instagram" />
        </Grid>
      </div>
    </div>
  );
}

export default App;
