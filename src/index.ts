import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/LoginController';


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdf'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('app running...')
});

