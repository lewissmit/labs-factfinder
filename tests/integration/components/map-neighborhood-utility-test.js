import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('map-neighborhood-utility', 'Integration | Component | map neighborhood utility', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{map-neighborhood-utility}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#map-neighborhood-utility}}
      template block text
    {{/map-neighborhood-utility}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
