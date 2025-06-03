import { useState } from 'react';
import { PostList } from './components/Post/PostList'
import { TaskList } from './components/Task/TaskList'

function App() {

  const [showPostList, setShowPostList] = useState(true);

  return (
    <>
      <div className="container">
        <TaskList></TaskList>



        <button onClick={() => setShowPostList(!showPostList)}>toggle</button>
        {showPostList && <PostList></PostList>}
      </div>
    </>
  )
}

export default App
