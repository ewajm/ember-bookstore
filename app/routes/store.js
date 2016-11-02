import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      featured: this.store.query('item', {orderBy:'name', equalTo: 'The Book'}),
      items: this.store.findAll('item')
            .then(function(results){
              return results.filter(function(result){
                return result.get('name') !== 'The Book';
              });
            })
    });
  }
});
