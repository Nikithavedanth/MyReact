import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import App from './App';
// import {Login} from './class-example/class-example';
// import {Login} from './class-example/new-class'
// import { ComponentDM } from './component-didmount/component-didmount';
// import {ClassEvents} from './event-binding/event-binding'
// import { EventArguments } from './event-binding/event-arguments';
// import { ClassEvents } from './event-binding/class-events';
import reportWebVitals from './reportWebVitals';
// import { FormikValidation } from './formik-validation/formik-validation';
// import { YupLibrary } from './yup-library/yup-library';
// import { FormikDemo } from './formik-library/formik-library';
// import { FormikExample } from './formik-library/formik-demo';
// import { Shopping } from './shopping/shopping';
// import { ReactFormDemo } from './function/react-form-demo/react-form-demo';
import { TutorialApp } from './Routing/tutorial-app/tutorial-app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <Login/> */}
    {/* <ComponentDM/> */}
    {/* <ClassEvents/> */}
    {/* <EventArguments/> */}
    {/* <ClassEvents/> */}
    {/* <Shopping/> */}
    {/* <ReactFormDemo/> */}
    {/* <FormikDemo/> */}
    {/* <FormikExample/> */}
    {/* <YupLibrary/> */}
    {/* <FormikValidation/> */}
    <TutorialApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
