const FollowToggle = require ('./follow_toggle.js');
const APIUtil = require ('./api_util.js');


$( ()=> {
  let $el = $('.follow-toggle');
  $el.each((idx, el) => {
    new FollowToggle(el);
  });
});
