'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('amanApp.util', [])
  .factory('Util', UtilService)
  .name;
