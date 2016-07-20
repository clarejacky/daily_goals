export class App {
  configureRouter(config, router) {
    config.title = 'Goals';
    config.map([
      { route: ['', 'today'], name: 'today',      moduleId: 'today',      nav: true, title: 'Today' },
      { route: 'monthly',         name: 'monthly',        moduleId: 'monthly',        nav: true, title: 'This Month' },
      { route: 'yearly',  name: 'yearly', moduleId: 'yearly', nav: true, title: 'This Year' }
    ]);

    this.router = router;
  }
}
