var GameObject = function ( methods ) {

	var gameObject = function () {

		this.initialize.apply( this, arguments );

	};

	for ( var property in methods ) {

		gameObject.prototype[ property ] = methods[ property ];

	}

	if (!gameObject.prototype.initialize) gameObject.prototype.initialize = function(){};
	if (!gameObject.prototype.draw) gameObject.prototype.draw = function(){};
	if (!gameObject.prototype.update) gameObject.prototype.update = function(){};
	
	return gameObject;

}
