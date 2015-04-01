import VertexModel from './models/VertexModel'
import EdgeModel from './models/EdgeModel'
import Model from './models/Model'

export default {
	BaseModel: Model,
	Graph: {
		VertexModel: VertexModel,
		EdgeModel: EdgeModel
	}
}