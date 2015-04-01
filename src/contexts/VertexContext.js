export default class VertexContext {
	constructor(modelName) {
		this.modelName = modelName;
	}

	string(field) {
		console.log('String field: ', field);
	}
	edge(model) {
		console.log('Edge field: ', model);
	}
}