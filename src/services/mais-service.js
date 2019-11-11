/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
class PostToServer {
  _apiBase = 'http://34.65.172.206/api'

  postData = async (url, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  }

  getTableData = async (data) => await this.postData('/scrap/', data)
}

export { PostToServer }
