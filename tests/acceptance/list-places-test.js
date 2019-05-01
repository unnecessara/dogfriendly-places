import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

import {
  click,
  currentURL,
  visit,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers';

module('Acceptance | list places', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to places route', async function(assert) {
    await visit('/');
    assert.equal(
      currentURL(),
      '/places',
      'should redirect automatically'
    );
  });

  test('should link to information about the company (Me)', async function(assert) {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert) {
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list dog-friendly places', async function(assert) {
    await visit('/');
    assert.equal(
      this.element.querySelectorAll('q.listing').length,
      3,
      'should display 3 listings'
    );
  });

  test('should filter the list of dog-friendly places by city.', function(assert) {});

  test('should show details for a selected dog-friendly place', function(assert) {});
});
