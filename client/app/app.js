'use strict';

import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';


import {
  routeConfig
} from './app.config';

import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('amanApp', [
    // ngAnimate,
    ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap,
    // ngMessages,
    main, constants, util
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['amanApp'], {
      strictDi: true
    });
  });
