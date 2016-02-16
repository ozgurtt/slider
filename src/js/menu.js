/*global Game*/

var difficulty = 'normal';

Game.Menu = function(game){
  this.game = game;
};

Game.Menu.prototype =  {
    create: function() {

        this.game.stage.backgroundColor = '#2d2d2d';
        // this.game.stage.backgroundColor = '#dcdcdc';

        // this.title = this.game.add.sprite(Game.w/2,Game.h/2-100,'title');
        // this.title.anchor.setTo(0.5,0.5);
        this.titleText = this.game.add.bitmapText(Game.w/2, Game.h/2-100, 'minecraftia', "Slider", 64 );
        this.titleText.anchor.setTo(0.5);
        this.titleText.tint = 0xff00ff;

        this.difficultyButtons = this.game.add.group();

        this.easyButton = this.game.add.button(Game.w/2, Game.h/2+75,'easy', this.difficultySelect, this); 
        this.easyButton.anchor.setTo(0.5);
        this.difficultyButtons.add(this.easyButton);


        this.normalButton = this.game.add.button(Game.w/2, Game.h/2+110,'normal', this.difficultySelect, this); 
        this.normalButton.anchor.setTo(0.5);
        this.normalButton.tint = 0xff00ff;
        this.difficultyButtons.add(this.normalButton);

        this.hardButton = this.game.add.button(Game.w/2, Game.h/2+155,'hard', this.difficultySelect, this); 
        this.hardButton.anchor.setTo(0.5);

        this.difficultyButtons.add(this.hardButton);

        // Start Message
        this.startButton = this.game.add.button(Game.w/2, Game.h/2+220,'startbtn', this.begin, this,1); 
        this.startButton.anchor.setTo(0.5);

        // this.instructions = this.game.add.sprite(Game.w/2+200,200,'instructions');
        // this.instructions.scale.x = 0.5;
        // this.instructions.scale.y = 0.5;

        // Start Message

        // var clickText = this.game.add.bitmapText(Game.w/2, Game.h/2-50, 'minecraftia', '~click to start~', 24); 

    },
    begin: function() {
        this.game.state.start('Play');
    },
    difficultySelect: function(button) {
      this.difficultyButtons.forEach(function(btn) {
        btn.tint = 0xffffff;
      });
      button.tint = 0xff00ff;
      difficulty = button.key;
    }, 
    makeButton: function(x,y,text) {
      var bmd = this.game.add.bitmapData(x, y);
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, x, y);
      bmd.ctx.fillStyle = '#000';
      bmd.ctx.fill();
      return bmd;
    },

    // update: function() {
    //   //Click to Start
    //   if (this.game.input.activePointer.isDown){
    //     this.game.state.start('Play');
    //   }
    // }
};
