import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080',
    });
  }

  // Get Method
  async get(endpoint) {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Post Method
  async post(endpoint, body) {
    try {
      const response = await this.api.post(endpoint, body);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error('API call failed. Error:', error);
    throw error;
  }
}

export default ApiService;
