import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('map-point-radius-utility', 'Integration | Component | map point radius utility', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{map-point-radius-utility}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#map-point-radius-utility}}
      template block text
    {{/map-point-radius-utility}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
