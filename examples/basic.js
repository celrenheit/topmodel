import topmodel from '../index'

topmodel.configure((config) => {
	config.setRiakCluster(["localhost:8087", "localhost:8089"])
	config.setGremlinClientConfig(8183, "gremlin-server.dev", {session:true})
})

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

}

class User extends topmodel.Graph.VertexModel {
	
	schema() {
		this.string('name');
		this.string('password');
		this.edge(FriendOf);
	}

	initialize(props = {}, options = {}) {
		console.log('Initialization');
	}

	set(key, value) {
		console.log('user set', key, value);
		super.set(...arguments)
	}
}



var batman = new User({
	role: 'admin'
});
// batman.name = "Batman";
// batman.password = "secret";
batman.set('name', "Batman");
batman.set('password', "secret");