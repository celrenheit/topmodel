import topmodel from '../'

describe("Configuration", () => {
	it("should get default config", () => {
		topmodel.configure((config) => {
			config.Riak.nodes.length.should.equal(1)
			config.Riak.nodes[0].should.equal("localhost:8098")

			config.GremlinServer.port.should.equal(8182)
			config.GremlinServer.host.should.equal("localhost")
			config.GremlinServer.options.should.have.keys()
		})
	})

	it("should overwrite its default configuration", () => {
		topmodel.configure((config) => {
			config.setRiakCluster("localhost:11098", "localhost:11099")
			config.Riak.nodes.length.should.equal(2)
			config.Riak.nodes.should.eql(["localhost:11098", "localhost:11099"])

			config.setGremlinClientConfig(1234, "remotehost.com", { session: true })
			config.GremlinServer.port.should.equal(1234)
			config.GremlinServer.host.should.equal("remotehost.com")
			config.GremlinServer.options.should.have.keys("session")
			config.GremlinServer.options.session.should.equal(true)
		})
	})
})