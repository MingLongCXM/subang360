var tplChance = require('../tpl/chance.string');

SPA.defineView('chance', {
  html: tplChance,
  bindEvents: {
    'beforeShow': function () {
      // var myScroll = new IScroll('#index-scroll');
    }
  }
});
