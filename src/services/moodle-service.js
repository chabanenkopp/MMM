/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
class MoodleService {
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

  getStudyList = async () => await this.getData('/lessons/')
}

export { MoodleService }
