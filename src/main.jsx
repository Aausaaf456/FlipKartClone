import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const root=ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)