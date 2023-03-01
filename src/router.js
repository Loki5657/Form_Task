import { createBrowserRouter } from 'react-router-dom';
import FormComponent, { Form } from './components/form';
import StepperComponent from './components/shared/stepper';
import UserInfo from './components/shared/userInfo';



export const router = createBrowserRouter([
    {
        path: '/stapper',
        element: <StepperComponent />,

    },
    {
        path: '/form',
        element: <FormComponent />,

    },
    {
        path: '/userInfo',
        element: <UserInfo />,

    },



]);
