import { Angular2SpringBootRestSeedPage } from './app.po';

describe('angular2-spring-boot-rest-seed App', () => {
  let page: Angular2SpringBootRestSeedPage;

  beforeEach(() => {
    page = new Angular2SpringBootRestSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
