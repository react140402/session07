import { useState } from 'react';
import { PostList } from './components/Post/PostList'
import { TaskList } from './components/Task/TaskList'
import { TodoList } from './components/Todo/TodoList';
import { SelectColor } from './components/SelectColor';
import { AppProvider } from './AppContext';

function App() {
  const [showPostList, setShowPostList] = useState(true);

  return (
    <>
      <AppProvider>
        <SelectColor />

        <div className="container">
          <TodoList />

          <TaskList></TaskList>

          <button onClick={() => setShowPostList(!showPostList)}>toggle</button>
          {showPostList && <PostList></PostList>}
        </div>
      </AppProvider>
    </>
  )
}

export default App
