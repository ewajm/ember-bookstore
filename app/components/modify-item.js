import Ember from 'ember';

export default Ember.Component.extend({
  showModal: false,
  actions: {
    toggleModal(){
      this.toggleProperty('showModal');
    },
    deleteItem(item){
      if (confirm("Are you sure you want to delete this item?")) {
        this.sendAction('deleteItem', item);
      }
    },
    updateItem(item){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image'),
        price: parseInt(this.get('price')),
        quantity: parseInt(this.get('quantity'))
      };
      this.set('name', '');
      this.set('description', '');
      this.set('image', '');
      this.set('price', '');
      this.set('quantity', '');
      this.toggleProperty('showModal');
      this.sendAction('updateItem', item, params);
    }
  }
});
