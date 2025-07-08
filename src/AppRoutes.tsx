import { ErrorPage } from "./ErrorPage";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from './AppLayout'
// // import { TaskList } from "./components/Task/TaskList";
// import { TodoList } from "./components/Todo/TodoList";
// import { PostList } from "./components/Post/PostList";
import { AuthLayout } from "./AuthLayout";

const TaskList = lazy(() => import("./pages/Task/TaskList"))
const TaskListZ = lazy(() => import("./pages/TaskZ/TaskList"))
const TodoList = lazy(() => import("./pages/Todo/TodoList"))
const PostList = lazy(() => import("./pages/Post/PostList"))
const Counter = lazy(() => import("./components/Counter"))
const CounterZ = lazy(() => import("./components/counter-zustand/Counter"))
const Album = lazy(() => import("./pages/Album"))
const Photo = lazy(() => import("./pages/Photo"))
const Login = lazy(() => import("./pages/auth/login"))
const Register = lazy(() => import("./pages/auth/register"))
const Advie = lazy(() => import("./pages/Advie"))



export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <h1>Home</h1>
            },
            {
                path: 'advie',
                element: <Advie />
            },
            {
                path: 'task',
                element: <TaskList />
            },
            {
                path: 'task-z',
                element: <TaskListZ />
            },
            {
                path: 'todo',
                element: <TodoList />
            },
            {
                path: 'post',
                element: <PostList />
            },
            {
                path: 'counter',
                element: <Counter />
            },
            {
                path: 'counter-z',
                element: <CounterZ />
            },
            {
                path: 'album',
                element: <Album />
            },
            {
                path: 'album/:id/photos',
                element: <Photo />
            }

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])