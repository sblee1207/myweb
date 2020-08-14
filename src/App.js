import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import 짱구 from "./짱구.jpeg"



function App() {
  return (
    <div>
<Image src = {짱구} centered />
<Comments />

</div>
  );
}

export default App;
