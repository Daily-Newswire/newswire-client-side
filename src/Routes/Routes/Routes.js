import Home from "../../Pages/Home/Home/Home";
import National from "../../Pages/National/National";
import International from '../../Pages/International/International';
import Entertainment from '../../Pages/Entertainment/Entertainment';
import Cultural from "../../Pages/Cultural/Cultural";
import Sports from "../../Pages/Sports/Sports";
import SubmitYourWritings from "../../Pages/SubmitYourWritings/SubmitYourWritings";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/national',
                element: <National></National>
            },
            {
                path: '/international',
                element: <International></International>
            },
            {
                path: '/entertainment',
                element: <Entertainment></Entertainment>
            },
            {
                path: '/cultural',
                element: <Cultural></Cultural>
            },
            {
                path:'/sports',
                element: <Sports></Sports>
            },
            {
                path: '/submityourwritings',
                element: <SubmitYourWritings></SubmitYourWritings>
            }
        ]
    }
])

export default router;