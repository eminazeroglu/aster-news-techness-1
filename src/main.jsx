import './assets/css/index.css'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createHashRouter} from "react-router-dom";
import routes from './router/routes';


createRoot(document.getElementById('root')).render(
	<RouterProvider router={createHashRouter(routes)} />
)
