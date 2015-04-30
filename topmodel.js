import VertexModel from './models/VertexModel'
import EdgeModel from './models/EdgeModel'
import Model from './models/Model'
import config from './src/config'

export default {
	BaseModel: Model,
	Graph: {
		VertexModel: VertexModel,
		EdgeModel: EdgeModel
	},
	configure(fn) {
		fn.call(null, config)
	}
}