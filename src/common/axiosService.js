import axios from 'axios';

class AxiosServer {
  constructor() {
    this.instance = axios.create();
    this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new AxiosServer();
