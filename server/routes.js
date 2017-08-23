/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
import auth from './components/auth';
import user from './api/user';
import article from './api/article';
import comment from './api/comment';

export default function(app) {
  // Insert routes below
  app.use('/api/auth', auth);
  app.use('/api/users', user);
  app.use('/api/articles', article);
  app.use('/api/comments', comment);
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
