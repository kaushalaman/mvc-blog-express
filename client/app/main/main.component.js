import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
const template = require('./main.jade');


export class MainController {

  /*@ngInject*/
  constructor() {
  }

}

export default angular.module('amanApp.main', [uiRouter])
  .config(routing)
  .component('main', { template, controller: MainController })
  .name;
