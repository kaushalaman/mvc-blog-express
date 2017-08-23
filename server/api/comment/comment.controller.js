import db from '../../sqldb';

export function index(req, res, next) {
  return db.User
    .find({ where: { id: req.user.id }})
    .then(user => res.json(user))
    .catch(next);
}
