import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('item');
  },
  actions: {
    saveItem(params){
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('admin');
    },
    updateItem(item, params){
      Object.keys(params).forEach(function(key){
        if(params[key]){
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('admin');
    },
    deleteItem(item){
      item.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
