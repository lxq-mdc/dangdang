import React from 'react';
import {createRoot} from 'react-dom/client'
// import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const queryConfig: ReactQueryProviderConfig = {
//     /**
//      * refetchOnWindowFocus 窗口获得焦点时重新获取数据
//      * staleTime 过多久重新获取服务端数据
//      * cacheTime 数据缓存时间 默认是 5 * 60 * 1000 5分钟
//      */
//     queries: {
//         refetchOnWindowFocus: true,
//         staleTime: 5 * 60 * 1000,
//         retry: 0
//     },
// };
const queryClient = new QueryClient()
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  // 通过在应用入口添加 BrowserRouter 组件开启 React Router 功能
    <QueryClientProvider client={queryClient}>
        {/* ↓ 主应用节点 */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* ↓ 可视化开发工具 */}
        <ReactQueryDevtools />
    </QueryClientProvider>
        // <ReactQueryConfigProvider config={queryConfig}>
        //
        // </ReactQueryConfigProvider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
