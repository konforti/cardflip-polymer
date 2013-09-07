'use strict';
Polymer('card-flip-button', {
  onClick: function() {
    var flipCards = document.getElementsByTagName('card-flip'),
      key = null;
    
    if (this.hasAttribute('class-name')) {
      var attr = this.getAttribute('class-name');
      flipCards = document.getElementsByClassName(attr);
    }

    for (key in flipCards) {
      if (flipCards[key].hasAttribute('flipped')) {
        flipCards[key].removeAttribute('flipped');
      } else {
        flipCards[key].setAttribute('flipped', '');
      }
    }
  }
});
