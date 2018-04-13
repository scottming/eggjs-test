const Service = require('egg').Service

class Data extends Service {
  async create (reqBody) {
    try {
      // reqbody.data
      // {
      //   "data": [
      //     {
      //       "type": "user",
      //       "age": 26,
      //       "name": "scott"
      //     },
      //     {
      //       "type": "post",
      //       "title": "haha",
      //       "content": "a article"
      //     }
      //   ]
      // }
      const instances = await this.ctx.service.instance.build(reqBody.data)

      for (const i of instances) {
        await i.save()
      }
      return { 'msg': 'success', 'code': 0 }
      
    } catch (err) {
      this.logger.error(err);
      return {};
    }
  }
}

module.exports = Data
