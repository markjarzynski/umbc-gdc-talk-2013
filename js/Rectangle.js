var Rectangle = function (x, y, width, height) {

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.intersects = function ( a ) {
	
		if ( Array.isArray( a ) ) {

			for ( var i = 0; i < a.length; i++ ) {

				if ( this.intersects( a[i] ) ) {

					return true;

				}

			}

		} else if ( this.x <= a.x + a.width &&
					a.x <= this.x + this.width &&
					this.y <= a.y + a.height &&
					a.y <= this.y + this.height ) {

			return true;

		}

		return false;
		

	};

};
