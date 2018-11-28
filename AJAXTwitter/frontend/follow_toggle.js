const APIUtil = require ('./api_util.js');


class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === 'unfollowed'){
      this.$el.text('Follow!');
    }
    else if (this.followState === 'followed'){
      this.$el.text('Unfollow!');
    }
  }

  handleClick() {
    this.$el.on('click', (event) => {
      event.preventDefault();
      let request;
      if (this.followState === 'unfollowed') {
        this.followState = 'followed';
        APIUtil.followUser(this.userId).then( () => {
          this.render();
        });
      } else {
        this.followState = 'unfollowed';
        APIUtil.unfollowUser(this.userId).then( () => {
          this.render();
        });
      }
    });
  }



}



module.exports = FollowToggle;
