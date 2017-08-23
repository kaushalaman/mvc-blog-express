import db from '../../sqldb';

export default function (req, res, next) {
  let accessToken = req.query.access_token;
  if (!accessToken && req.get('authorization')) {
    accessToken = req.get('authorization').split(' ')[1];
  }
  if (!accessToken) return res.status(404).json({ message: 'Invalid Credentials '});
  return db.AccessToken
    .find({ where: { accessToken }, include: [db.User] })
    .then(token => {
      if (!token) return res.status(404).json({ message: 'Invalid Token'});
      req.user = token.User;
      return next();
    })
    .catch(next);
}
