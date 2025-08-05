const API_BASE_URL = 'https://aarogya-id-72ue.onrender.com/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Something went wrong');
  }
  return response.json();
};

// API service functions
export const api = {
  // Get all documents
  async getDocuments() {
    const response = await fetch(`${API_BASE_URL}/documents`);
    return handleResponse(response);
  },

  // Get single document by ID
  async getDocument(id) {
    const response = await fetch(`${API_BASE_URL}/documents/${id}`);
    return handleResponse(response);
  },

  // Create new document
  async createDocument(documentData) {
    const response = await fetch(`${API_BASE_URL}/documents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(documentData),
    });
    return handleResponse(response);
  },

  // Update document
  async updateDocument(id, documentData) {
    const response = await fetch(`${API_BASE_URL}/documents/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(documentData),
    });
    return handleResponse(response);
  },

  // Delete document
  async deleteDocument(id) {
    const response = await fetch(`${API_BASE_URL}/documents/${id}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },

  // Get documents by status
  async getDocumentsByStatus(status) {
    const response = await fetch(`${API_BASE_URL}/documents/status/${status}`);
    return handleResponse(response);
  },

  // Get documents by environment
  async getDocumentsByEnvironment(environment) {
    const response = await fetch(`${API_BASE_URL}/documents/environment/${environment}`);
    return handleResponse(response);
  },

  // Health check
  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/health`);
    return handleResponse(response);
  }
}; 