import { useState } from 'react';
import { PostList } from './components/Post/PostList'
import { TaskList } from './components/Task/TaskList'
import { TodoList } from './components/Todo/TodoList';
import { SelectColor } from './components/SelectColor';
import { AppContext } from './AppContext';

function App() {
  const [color, setColor] = useState("red")
  const [showPostList, setShowPostList] = useState(true);

  return (
    <>
      <AppContext.Provider value={{ color, setColor }}>
        <SelectColor />
        <div className="container">

          <TodoList />

          <TaskList></TaskList>



          <button onClick={() => setShowPostList(!showPostList)}>toggle</button>
          {showPostList && <PostList></PostList>}
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App
