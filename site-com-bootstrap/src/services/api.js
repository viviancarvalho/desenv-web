// Configuração da API
const API_URL = 'http://localhost:3000';

// Função auxiliar para fazer requisições
async function request(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
}

// API de Posts
export const api = {
  // Criar post
  createPost: async (data) => {
    return request('/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Buscar todos os posts
  getPosts: async () => {
    return request('/buscar');
  },

  // Atualizar post
  updatePost: async (id, data) => {
    return request(`/put/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Deletar post
  deletePost: async (id) => {
    return request(`/delete/${id}`, {
      method: 'DELETE',
    });
  },
};

export default api;
