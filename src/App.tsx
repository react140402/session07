import { PostList } from './components/Post/PostList'
import { TaskList } from './components/Task/TaskList'

function App() {

  return (
    <>
      <div className="container">
        <PostList></PostList>
        <TaskList></TaskList>
      </div>
    </>
  )
}

export default App
