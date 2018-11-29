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
      this.$el.prop('Disabled', false);

    }
    else if (this.followState === 'followed'){
      this.$el.text('Unfollow!');
      this.$el.prop('Disabled', false);
    }
    else if (this.followState === 'following'){
      this.$el.text('Following!');
      this.$el.prop('Disabled', true);
    }
    else if (this.followState === 'unfollowing'){
      this.$el.text('Unfollowing!');
      this.$el.prop('Disabled', true);
    }
  }

  handleClick() {
    this.$el.on('click', (event) => {
      event.preventDefault();
      let request;
      if (this.followState === 'unfollowed') {
        this.followState = 'following';
        this.render();
        APIUtil.followUser(this.userId).then( () => {
          this.followState = 'followed';
          this.render();
        });
      } else if(this.followState === 'followed') {
        this.followState = 'unfollowing';
        this.render();

        APIUtil.unfollowUser(this.userId).then( () => {
          this.followState = 'unfollowed';
          this.render();
        });
      }
    });
  }



}



module.exports = FollowToggle;
