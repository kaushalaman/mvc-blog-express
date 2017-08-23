import rp from 'request-promise';
import db from '../../sqldb';

export function index(req, res, next) {
  return db.User
    .find({ where: { id: req.user.id }})
    .then(user => res.json(user))
    .catch(next);
}

export function contacts(req, res, next) {
  return rp({
    method: 'GET',
    uri: `https://www.google.com/m8/feeds/contacts/${req.user.email}/full`,
    headers: {
      'Authorization': req.get('authorization') || `Bearer ${req.query.access_token}`,
      'GData-Version': '3.0',
    },
    json: false,
  })
    .then(data => res.json(data))
    .catch(next);
}
