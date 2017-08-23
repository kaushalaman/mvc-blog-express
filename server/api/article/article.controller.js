import db from '../../sqldb';

export function index(req, res, next) {
  return db.Article
    .findAll({ where: { userId: req.user.id } })
    .then(articles => res.json(articles))
    .catch(next);
}

export function create(req, res, next) {
  const { title, content } = req.body;
  if (!title || !content) return res.status(500).json({ message: 'Invalid Request:' });
  return db.Article
    .create({ userId: req.user.id, title, content })
    .then(article => res.json(article))
    .catch(next);
}

export function indexComment(req, res, next) {
  return db.Comment
    .findAll({ where: { userId: req.user.id, articleId: req.params.id } })
    .then(articles => res.json(articles))
    .catch(next);
}

export function createComment(req, res, next) {
  const { text } = req.body;
  if (!text) return res.status(500).json({ message: 'Invalid Request:' });
  return db.Comment
    .create({ userId: req.user.id, text, articleId: req.params.id })
    .then(comment => res.json(comment))
    .catch(next);
}
