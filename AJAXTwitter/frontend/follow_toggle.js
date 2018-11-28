class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
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

      $.ajax({

      });
    });
  }



}



module.exports = FollowToggle;
