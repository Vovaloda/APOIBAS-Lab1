import {apiService} from './services/apiService.js';

document.addEventListener('DOMContentLoaded', async () => {
    const userListContainer = document.getElementById('user-list');
    const userForm = document.getElementById('user-form');

    const roleListContainer = document.getElementById('role-list');
    const roleForm = document.getElementById('role-form');

    const permissionListContainer = document.getElementById('permission-list');
    const permissionForm = document.getElementById('permission-form');

    const articleListContainer = document.getElementById('article-list');
    const articleForm = document.getElementById('article-form');

    const commentListContainer = document.getElementById('comment-list');
    const commentForm = document.getElementById('comment-form');

    await fetchAndDisplayUsers();
    await fetchAndDisplayRoles();
    await fetchAndDisplayPermissions();
    await fetchAndDisplayArticles();
    await fetchAndDisplayComments();

    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const roleInput = document.getElementById('role-id');
        const permissionInput = document.getElementById('permission-id');

        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            permissions: permissionInput.value === '' ? undefined : permissionInput.value,
            roles: roleInput.value === '' ? undefined : roleInput.value
        };

        await apiService.createUser(newUser);

        nameInput.value = '';
        emailInput.value = '';
        roleInput.value = '';
        permissionInput.value = '';

        await fetchAndDisplayUsers();
    });

    roleForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const roleNameInput = document.getElementById('role-name');

        const newRole = {
            name: roleNameInput.value,
        };

        await apiService.createRole(newRole);

        roleNameInput.value = '';

        await fetchAndDisplayRoles();
    });

    permissionForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const permissionNameInput = document.getElementById('permission-name');

        const newPermission = {
            name: permissionNameInput.value,
        };


        await apiService.createPermission(newPermission);

        permissionNameInput.value = '';


        await fetchAndDisplayPermissions();
    });


    async function fetchAndDisplayUsers() {
        const users = await apiService.getUsers();

        userListContainer.innerHTML = '';
        users.forEach(user => {
            const isRole = user.roles[0];
            const isPermission = user.permissions[0];
            const userItem = document.createElement('div');
            userItem.className = 'user-item';
            userItem.innerHTML = `id: ${user._id}, Name: <strong>${user.name}</strong>, email:${user.email}, role: ${isRole? isRole.name : 'no role'}, permissions: ${isPermission? isPermission.name : 'no permission'}`;
            userListContainer.appendChild(userItem);
        });
    }

    async function fetchAndDisplayRoles() {
        const roles = await apiService.getRoles();


        roleListContainer.innerHTML = '';
        roles.forEach(role => {
            const roleItem = document.createElement('div');
            roleItem.className = 'role-item';
            roleItem.innerHTML = `<strong>${role.name}</strong>, id: ${role._id}`;
            roleListContainer.appendChild(roleItem);
        });
    }


    async function fetchAndDisplayPermissions() {
        const permissions = await apiService.getPermissions();


        permissionListContainer.innerHTML = '';
        permissions.forEach(permission => {
            const permissionItem = document.createElement('div');
            permissionItem.className = 'permission-item';
            permissionItem.innerHTML = `<strong>${permission.name}</strong>, id: ${permission._id}`;
            permissionListContainer.appendChild(permissionItem);
        });
    }

articleForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const articleTitleInput = document.getElementById('article-title');
    const articleContentInput = document.getElementById('article-content');
    const authorIdInput = document.getElementById('user-id');

    const newArticle = {
        title: articleTitleInput.value,
        content: articleContentInput.value,
        author: authorIdInput.value,
    };

    await apiService.createArticle(newArticle);

    articleTitleInput.value = '';
    articleContentInput.value = '';
    authorIdInput.value = '';

    await fetchAndDisplayArticles();
});

commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const commentContentInput = document.getElementById('comment-content');
    const articleIdInput = document.getElementById('article-id'); 
    const articleUserIdInput = document.getElementById('article-user-id');

    const newComment = {
        content: commentContentInput.value,
        article: articleIdInput.value, 
        user: articleUserIdInput.value,
    };

    await apiService.createComment(newComment);

    commentContentInput.value = '';
    articleIdInput.value = '';
    articleUserIdInput.value = '';

    await fetchAndDisplayComments();
});

async function fetchAndDisplayArticles() {
    const articles = await apiService.getArticles();

    articleListContainer.innerHTML = '';
    articles.forEach(article => {
        const articleItem = document.createElement('div');
        articleItem.className = 'article-item';
        articleItem.innerHTML = `articleId: ${article._id}, Title: <strong>${article.title}</strong>, Content: ${article.content}`;
        articleListContainer.appendChild(articleItem);
    });
}

async function fetchAndDisplayComments() {
    const comments = await apiService.getComments();

    commentListContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `Content: <strong>${comment.content}</strong> - Article ID: ${comment.article._id}, User ID: ${comment.user._id}`;
        commentListContainer.appendChild(commentItem);
    });
}

});
