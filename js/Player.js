var Player = GameObject ({

	initialize: function ( ) {
		
		this.x = 480;
		this.y = 400;

		this.height = 100;
		this.width = 60;

		this.speed = 32;
		this.jumpForce = -50;
	
		this.velocity = { x: 0, y: 0 };
		this.acceleration = { x: 0, y: GRAVITY };
		
		this.image = new Image();
		this.image.src = "images/tomato.png";

		this.previousX = this.x;
		this.previousY = this.y;

		this.timeSinceLastUpdate = Date.now();

		this.isOnGround = false;

		this.body = new Rectangle( this.x, this.y + 1, this.width, this.height - 2 );
		this.feet = new Rectangle( this.x + 1, this.y + 90, this.width - 2, this.height - 90);  
		this.head = new Rectangle( this.x + 1, this.y, this.width - 2, this.height - 90);

		document.addEventListener( 'keydown', onKeyDown, false );

	},

	update: function () {

		var now = Date.now();
		var delta = (now - this.timeSinceLastUpdate) / 60;
		this.timeSinceLastUpdate = now;

		if ( !!keyspressed[65] ) { // a
			this.moveLeft();
		} else if ( !!keyspressed[68] ) { // d
			this.moveRight();
		} else {
			this.velocity.x = 0;
		}

		if ( !!keyspressed[32] ) { // spacebar
			this.jump();
		}

		this.previousX = this.x;
		this.previousY = this.y;

		this.x += this.velocity.x * delta;
		this.y += this.velocity.y * delta;

		this.velocity.x += this.acceleration.x * delta;
		this.velocity.y += this.acceleration.y * delta;

		this.body.x = this.x;
		this.body.y = this.y;
		

		if ( this.body.intersects( walls ) ) {

			this.velocity.x = 0;
			this.x = this.previousX;

		}
		
		this.feet.x = this.x + 1;
		this.feet.y = this.y + 90;

		if ( this.feet.intersects( walls ) ) { 
	
			this.velocity.y = 0;	
			this.y = this.previousY;
			this.isOnGround = true;	
		}

		this.head.x = this.x + 1;
		this.head.y = this.y;

		if ( this.head.intersects( walls ) ) {

			this.velocity.y = 0;
			this.y = this.previousY;

		}

		if ( this.body.intersects( enemy ) ) {

			alert( "You win!" );

		}

	},

	draw: function () {

		context.drawImage(this.image, this.x, this.y, this.width, this.height);

	},

	moveLeft: function () {
		this.velocity.x = -this.speed;
	},

	moveRight: function () {
		this.velocity.x = this.speed;
	},

	jump: function () {
		if ( this.isOnGround ) {
			this.velocity.y = this.jumpForce;
			this.isOnGround = false;
		}
	}

});
