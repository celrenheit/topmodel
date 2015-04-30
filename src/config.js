import _ from 'lodash'
import mergeDefaults from 'merge-defaults'
_.mergeDefaults = mergeDefaults

class ConfigManager {
	constructor() {
		this.Riak = {
			nodes: ["localhost:8098"]
		}

		this.GremlinServer = {
			port: 8182,
			host: "localhost",
			options: {}
		}
	}

	setRiakCluster(nodes) {
		if(arguments.length === 1 && nodes instanceof Array)
			this.Riak.nodes = nodes
		else
			this.Riak.nodes = [].slice.call(arguments)
	}
	setGremlinClientConfig(port, host, options) {
		this.GremlinServer = _.mergeDefaults({
			port: port,
			host: host,
			options: options
		} || {}, this.GremlinServer)
	}
}
export default new ConfigManager()