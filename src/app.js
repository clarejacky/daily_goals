export class App {
  configureRouter(config, router) {
    config.title = 'Goals';
    config.map([
      { route: ['', 'today'], name: 'today',      moduleId: 'today',      nav: true, title: 'T' },
      { route: 'monthly',         name: 'monthly',        moduleId: 'monthly',        nav: true, title: 'M' },
      { route: 'yearly',  name: 'yearly', moduleId: 'yearly', nav: true, title: 'Y' }
    ]);

    this.router = router;
  }
}
