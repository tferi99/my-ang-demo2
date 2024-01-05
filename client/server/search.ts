import {Request, Response} from 'express';
import {COURSES, USERS} from './db-data';
import {User} from '../src/app/shared/model/user.model';

export function searchUsers(req: Request, res: Response) {
  const queryParams = req.query;
  const searchPattern = req.params['src'];
  const result = USERS.filter(u => u.email.indexOf(searchPattern) >= 0);

  setTimeout(() => {
    res.status(200).json({payload: result});
  }, 100);
}
