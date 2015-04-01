import VertexContext from './contexts/VertexContext'

class ModelRegister {
	constructor() {
		this.models = {};
	}

	register(modelName, schemaFn) {
		console.log('Regsiteting', modelName, schemaFn);
		if(this.models.hasOwnProperty(modelName))
			return this.models[modelName];
		var vertexContest = new VertexContext(modelName);
		var modelDefinition = schemaFn.apply(vertexContest)

		this.models[modelName] = modelDefinition;
		return modelDefinition;
	}
}

export default new ModelRegister();