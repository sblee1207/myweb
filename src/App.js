import React from 'react';
import {Button, Image, Divider, Header, Icon, Grid} from 'semantic-ui-react'

import Comments from './comment.js'

import 짱구 from "./짱구.jpeg"



function App() {
  return (
    <div>

<Image src = {짱구} centered />
<Divider horizontal>
  <Header as='h4'>
    <Icon name='comment outline' />
    댓글을 남겨조
  </Header>
</Divider>
<Comments />

</div>
  );
}

export default App;
