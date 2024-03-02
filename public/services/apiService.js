class ApiService {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    // Методы для работы с пользователями
    async getUsers() {
      try {
        const response = await fetch(`${this.baseURL}/api/users`);
        return response.json();
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    }
  
    async createUser(user) {
      try {
        const response = await fetch(`${this.baseURL}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create user');
        }
      } catch (error) {
        console.error('Error creating user:', error.message);
      }
    }
  
    // Методы для работы с ролями
    async getRoles() {
      try {
        const response = await fetch(`${this.baseURL}/api/roles`);
        return response.json();
      } catch (error) {
        console.error('Error fetching roles:', error.message);
      }
    }
  
    async createRole(role) {
      try {
        const response = await fetch(`${this.baseURL}/api/roles`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(role),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create role');
        }
      } catch (error) {
        console.error('Error creating role:', error.message);
      }
    }
  
    // Методы для работы с разрешениями
    async getPermissions() {
      try {
        const response = await fetch(`${this.baseURL}/api/permissions`);
        return response.json();
      } catch (error) {
        console.error('Error fetching permissions:', error.message);
      }
    }
  
    async createPermission(permission) {
      try {
        const response = await fetch(`${this.baseURL}/api/permissions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(permission),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create permission');
        }
      } catch (error) {
        console.error('Error creating permission:', error.message);
      }
    }
  
    // Методы для работы со статьями
    async getArticles() {
      try {
        const response = await fetch(`${this.baseURL}/api/articles`);
        return response.json();
      } catch (error) {
        console.error('Error fetching articles:', error.message);
      }
    }
  
    async createArticle(article) {
      try {
        const response = await fetch(`${this.baseURL}/api/articles`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(article),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create article');
        }
      } catch (error) {
        console.error('Error creating article:', error.message);
      }
    }
  
    // Методы для работы с комментариями
    async getComments() {
      try {
        const response = await fetch(`${this.baseURL}/api/comments`);
        return response.json();
      } catch (error) {
        console.error('Error fetching comments:', error.message);
      }
    }
  
    async createComment(comment) {
      try {
        const response = await fetch(`${this.baseURL}/api/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(comment),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create comment');
        }
      } catch (error) {
        console.error('Error creating comment:', error.message);
      }
    }
  }
  
  export const apiService = new ApiService('http://localhost:3000');
  