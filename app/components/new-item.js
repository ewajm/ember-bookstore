import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveItem(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        price: parseInt(this.get('price')),
        quantity: parseInt(this.get('quantity'))
      }
      this.set('name', '');
      this.set('description', '');
      this.set('image', '');
      this.set('price', '');
      this.set('quantity', '');
      this.sendAction('saveItem', params)
    }
  }
});
