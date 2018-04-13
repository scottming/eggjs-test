'use strict'

const Service = require('egg').Service
const R = require('ramda')

class Instance extends Service {
  _buildUser (data) {
    const instance = this.ctx.model.User.build({
      name: data.name,
      age: data.age
    })

    return instance
  }

  _buildPost (data) {
    const instance = this.ctx.model.Post.build({
      title: data.title,
      content: data.content
    })

    return instance
  }

  build (dataArr) {

    // 底下的这段 switch case 非常恶心
    let result = []
    for (const d of dataArr) {
      switch (d.type) {
        case 'post':
          result.push(this._buildPost(d))
          break
        case 'user':
          result.push(this._buildUser(d))
          break
        default:
          break
      }
    }
    return result

    // 如何才能 改成 ramda
    // const switchBuild = R.cond([
    //   [R.propEq('type', 'post'), this._buildPost],
    //   [R.propEq('type', 'user'), this._buildUser],
    // ])

    // result = dataArr.map(switchBuild)
    // return result
  }
}

module.exports = Instance