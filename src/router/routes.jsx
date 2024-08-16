import {createBrowserRouter} from 'react-router-dom'
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Search from "../pages/Search";
import View from "../pages/View";
import AppLayout from '../layouts/AppLayout';

const routers = [
	{
		path: "/",
		name: 'home',
		element: <Home/>,
        layout: 'app'
	},
	{
		path: "about",
		name: 'about',
		element: <About/>
	},
    {
		path: "search",
		name: 'search',
		element: <Search/>,
        layout: 'app'
	},
    {
		path: "contact",
		name: 'contact',
		element: <Contact/>
	},
    {
		path: "view",
		name: 'view',
		element: <View/>,
        layout: 'app'
	},
]

const routerMap = (arr) => arr.map((router) => {
    if (router.layout) {
        if (router.layout === 'app') {
            router.element = <AppLayout>{router.element}</AppLayout>
        }
    }
    return router;
})

export default routerMap(routers)