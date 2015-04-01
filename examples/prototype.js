class Posts extends topmodel.Riak {
	schema() {
		this.string('title');
		this.string('body');
	}

	constructor() {
		super(this)
	}
}

class Item extends topmodel.Graph.VertexModel {

}

class FriendOf extends topmodel.Graph.EdgeModel {
	schema() {
		this.label("friend_of");
		this.string('timestamp');
		this.string('weight');
		this.comingFrom(User);
		this.goingTo(User);
	}

	constructor() {
		super(this)
	}
}

class User extends topmodel.Graph.VertexModel {
	
	schema() {
		this.string('name').required();
		this.string('password').required();
		this.edge(FriendOf)
	}

	constructor() {
		super(this)
	}
}

var batman = new User();
batman.name = "Batman";
batman.password = "secret";
batman.save().then(function() {
	var robin = new User();
	robin.name = "Robin";
	robin.password = "secret";
	robin.save().then(function() {
		
	})
})


function *() {
	var batman = new User();
	batman.name = "Batman";
	batman.password = "secret";
	yield batman.save()

	var robin = new User();
	robin.name = "Robin";
	robin.password = "secret";
	yield robin.save()

	yield robin.friendOf(batman);

}