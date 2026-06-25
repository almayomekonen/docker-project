const API_URL = "http://localhost:3000/api/users";

const totalUsers = document.getElementById('totalUsers');
const avgAge = document.getElementById('avgAge');
const addUserForm = document.getElementById('addUserForm');
const usersGrid = document.getElementById('usersGrid');

async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        console.log(users);
        renderUsers(users)
    } catch (error) {
        console.error(error, "Error loading users");
    }
}

function renderUsers(users) {
    console.log(users.length);
    
    if(users.length === 0) {
        usersGrid.innerHTML = `
          <p>No users yet, please add one.</p>
        `
        return;
    }
       
    usersGrid.innerHTML = users.map((user) => `
        <div class="card">
           <button class="deleteBtn" onclick="deleteUser('${user._id}')">🗑️</button>
           <div>${user.name}</div>
           <div>${user.email}</div>
           <div>${user.age}</div>
        </div>
    `).join("")
}

async function deleteUser(id) {
    if(!confirm("Are you sure you want to delete this user?")) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })
        loadUsers();
    } catch (error) {
        console.error(error, "Error deleting user.");
    }
} 

loadUsers();

