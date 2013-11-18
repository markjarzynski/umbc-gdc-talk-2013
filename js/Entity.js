var Entity = GameObject ({
	
	initialize: function ( parameters ) {

		parameters = parameters || {};

		this.x = ( parameters.x ) ? parameters.x : 0;
		this.y = ( parameters.y ) ? parameters.y : 0;
		this.height = ( parameters.height ) ? parameters.height : 64;
		this.width = ( parameters.width ) ? parameters.width : 64;

		if ( parameters.image !== undefined ) {

			if ( typeof( parameters.image ) == "string" ) {

				this.image = new Image();
				this.image.src = parameters.image;	

			}	else {

				this.image = parameters.image;

			}

		} else {

			this.image = new Image();
			this.image.src = "images/magenta.png";

		}

		this.velocity = ( parameters.velocity ) ? parameters.velocity : { x: 0, y: 0 };
		this.acceleration = ( parameters.acceleration ) ? parameters.acceleration : { x: 0, y: 0 };

		this.timeSinceLastUpdate = Date.now();

	},

	update: function () {

		var now = Date.now();
		var delta = (now - this.timeSinceLastUpdate) / 60;
		this.timeSinceLastUpdate = now;
	
		this.previousX = this.x;
		this.previousY = this.y;	

		this.x += this.velocity.x * delta;
		this.y += this.velocity.y * delta;

		this.velocity.x += this.acceleration.x * delta;
		this.velocity.y += this.acceleration.y * delta;

	},

	draw: function () {

		context.drawImage(this.image, this.x, this.y, this.width, this.height);

	}

});
