import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  few: Ember.computed(function(){
    return this.get('item.quantity') < 5;
  }),
  out: Ember.computed(function(){
    return this.get('item.quantity') <= 0;
  }),
  actions: {
    addToCart(item){
      this.get('shoppingCart').add(item);
      this.sendAction('addToCart')
    }
  }
});
