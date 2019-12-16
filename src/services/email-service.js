/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
class EmailListService {
  _apiBase = 'http://34.65.172.206/api'

  getData = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return await res.json()
  }

  getEmailList = async () => await this.getData('/messages/')
}

export { EmailListService }
