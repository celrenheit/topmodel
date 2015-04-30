import topmodel from '../'

let BaseModel = topmodel.BaseModel

describe("BaseModel", () => {
	it("should be a able to create a new instance with data passed to constructor", () => {
		let model = new BaseModel({
			name: "Batman"
		})
		model.get('name').should.equal("Batman")
		model.set('username', 'batbat')
		model.get('username').should.equal("batbat")
	})
})