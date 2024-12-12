import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import About from "./pages/About";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/people/:id',
                element: <People />,
                loader: () => {
                    if (localStorage.getItem('token')) {
                        return null
                    } else {
                        return redirect('/')
                    }
                }
            }
        ]
    }
]);

export default router
