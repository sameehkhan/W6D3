class FollowToggle {
  constructor(el) {
    this.userId = userId;
    this.followState = followState;
    this.$el = $(el);
  }

  render() {
    if (this.followState === 'unfollowed'){
      this.$el.text('Follow!');
    }
    else if (this.followState === 'followed'){
      this.$el.text('Unfollow!'); 
    }
  }
}


module.exports = FollowToggle;
