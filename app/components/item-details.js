import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  few: Ember.computed(function(){
    return this.get('item.quantity') < 5 && this.get('item.quantity') > 0;
  }),
  out: Ember.computed(function(){
    return this.get('item.quantity') <= 0;
  }),
  actions: {
    addToCart(item){
      var quant = this.get('quantity') ? parseInt(this.get('quantity')):1;
      this.get('shoppingCart').add(item, quant);
      this.sendAction('addToCart');
    }
  }
});
