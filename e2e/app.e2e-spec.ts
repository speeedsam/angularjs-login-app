import { MyNewAppPage } from './app.po';

describe('my-new-app App', () => {
  let page: MyNewAppPage;

  beforeEach(() => {
    page = new MyNewAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
