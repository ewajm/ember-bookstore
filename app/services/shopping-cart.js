import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  add(item, quant) {
    var found = false;
    var amtOk = true;
    for(var i = 0; i < this.get('items').length; i++){
      if(this.get('items')[i].item.get('name') === item.get('name')){
        found = true;
        var curItem = this.get('items')[i];
        if(curItem.quantity+quant > item.get('quantity')){
          amtOk = false;
        } else {
          curItem.quantity += quant;
        }
      }
    }
    if(item.get('quantity') > quant && amtOk){
      if(!found){
        console.log("hello");
        var itemObj = {
          item: item,
          quantity: quant
        };
        this.get('items').pushObject(itemObj);
      }
      this.set('totalItems', this.get('totalItems')+quant);
      this.set('totalPrice', this.get('totalPrice')+(item.get('price')*quant));
    } else {
      alert('sorry, we do not have enough stock!')
    }
  }
});
