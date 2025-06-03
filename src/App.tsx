import { useState } from 'react';
import { PostList } from './components/Post/PostList'
import { TaskList } from './components/Task/TaskList'
import { TodoList } from './components/Todo/TodoList';
import { SelectColor } from './components/SelectColor';

function App() {
  const [color, setColor] = useState("red")
  const [showPostList, setShowPostList] = useState(true);

  return (
    <>
      <SelectColor setColor={setColor} />
      <div className="container">

        <TodoList color={color} />

        <TaskList></TaskList>



        <button onClick={() => setShowPostList(!showPostList)}>toggle</button>
        {showPostList && <PostList></PostList>}
      </div>
    </>
  )
}

export default App
