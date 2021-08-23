import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}


const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in!</div>
        <a href='/logout'>Logout</a>
      </div>
    `)
  } else {
    res.redirect('/login');
  }
});

router.get('/login', (req: RequestWithBody, res: Response) => {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
    `);
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'manny' && password === '123') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

export { router };