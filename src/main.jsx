import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import GameChooseDifficulty from './pages/game/GameChooseDifficulty';
import Game from './pages/game/Game';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
   },
   { path: '/game', element: <GameChooseDifficulty /> },
   {
      path: '/game/:difficulty',
      element: <Game />,
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
