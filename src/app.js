export class App {
  configureRouter(config, router) {
    config.title = 'Goals';
    config.map([
      { route: ['', 'goals'], name: 'goals',      moduleId: 'goals',      nav: true, title: 'Goals' },
      { route: 'resources',         name: 'resources',        moduleId: 'resources',        nav: true, title: 'Resources' },
      { route: 'about',  name: 'about', moduleId: 'about', nav: true, title: 'About' }
    ]);

    this.router = router;
  }
}
