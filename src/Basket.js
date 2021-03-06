
var speed = 7.4;

var Basket = cc.Sprite.extend({
	
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/Basket.png' );
		this.direction = Basket.DIR.UP;
	},

	update: function(){
		var pos = this.getPosition();
		if( this.direction == Basket.DIR.UP ){			
			if ( pos.y < screenHeight-200 ) {
				this.setPosition( new cc.Point( pos.x, pos.y + speed ) );
			}
		}
		else if( this.direction == Basket.DIR.DOWN ){
			if ( pos.y > 100 ) {
				this.setPosition( new cc.Point( pos.x, pos.y - speed ) );
			}
		}
	},

	setDirection: function(keyCode){
		if ( keyCode == cc.KEY.up ) {
            this.direction = Basket.DIR.UP;
        }
        else if ( keyCode == cc.KEY.down ) {
            this.direction = Basket.DIR.DOWN;
        }
	},

	setSpeed: function() {
		speed+=1;
	}

});

Basket.DIR = {
	UP: 1,
	DOWN: 2
};