const Controller = require('egg').Controller

class DataController extends Controller {
  async create () {
    const ctx = this.ctx
    const reqBody = ctx.request.body
    const created = await ctx.service.data.create(reqBody)
    ctx.status = 201
    ctx.body = created
  }
}

module.exports = DataController