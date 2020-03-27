import React from 'react';

import Topic from './Topic';

const CombinedTopics = (props) => {
    const TotalTopics = props.posts.map((e)=><Topic posts = {e} />)
  return (
          <div>
              {TotalTopics}
          </div>
      )};

export default CombinedTopics;