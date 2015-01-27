describe('angularjs homepage', function() {
  'use strict';

  var home_button = element(by.id('home_btn')),
    social_button = element(by.id('social_btn')),
    title = element(by.id('main_title'));


  browser.driver.get('http://localhost:9000/');


  it('should have a title', function() {
    browser.driver.sleep(5000);
    expect(browser.getTitle()).toEqual('Optimize web application');
  });

  it('test next button', function() {
    social_button.click();
    browser.driver.sleep(3000);
    expect(title.getText()).toEqual('Twitter timeline.');
  });


  it('change page and current url', function() {
    home_button.click();
    browser.driver.sleep(2000);
    expect(title.getText()).toEqual('Simple Angular Application with');
  });


  browser.driver.sleep(1000);
});