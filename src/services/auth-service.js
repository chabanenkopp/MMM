/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
class AuthService {
  _apiBase = 'http://34.65.172.206/api/user'

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

  checkUser = async (data) => await this.postData('/check_user', data)
}

export { AuthService }
