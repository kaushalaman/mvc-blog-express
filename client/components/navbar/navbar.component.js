export class NavbarComponent {}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.jade'),
    controller: NavbarComponent
  })
  .name;
