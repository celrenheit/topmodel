import topmodel from '../index'

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
		this.string('name');
		this.string('password');
		this.edge(FriendOf);
	}
}



var batman = new User({
	role: 'admin'
});
// batman.name = "Batman";
// batman.password = "secret";
batman.set('name', "Batman");
batman.set('password', "secret");