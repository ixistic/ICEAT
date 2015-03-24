var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
 
        this.setBackground = new cc.Sprite.create( "res/images/PlayScene.png" );
        this.setBackground.setPosition(new cc.Point( screenWidth/2 , screenHeight/2 ));
        this.addChild( this.setBackground );

        return true;
    }   
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});