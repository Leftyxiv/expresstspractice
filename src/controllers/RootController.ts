import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send('Not permitted');
  }
}

@controller('')
export class RootController {
  @get('/')
  geRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in!</div>
          <a href='/logout'>Logout</a>
        </div>
      `)
    } else {
      res.send(`<div>
      <div>You are NOT logged in!</div>
      <a href='/login'>Login</a>
    </div>`);
    }
  }
  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route, logged in user');
  }
}