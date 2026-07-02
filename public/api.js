const API_URL = "/api/users";

const totalUsers = document.getElementById("totalUsers");
const avgAge = document.getElementById("avgAge");
const addUserForm = document.getElementById("addUserForm");
const usersGrid = document.getElementById("usersGrid");

async function loadUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error(error, "Error loading users");
    usersGrid.innerHTML = `<p>Failed to load users.</p>`;
  }
}

function updateStats(users) {
  totalUsers.textContent = users.length;
  const average = users.length
    ? (users.reduce((sum, user) => sum + user.age, 0) / users.length).toFixed(1)
    : 0;
  avgAge.textContent = average;
}

function renderUsers(users) {
  updateStats(users);

  if (users.length === 0) {
    usersGrid.innerHTML = `<p>No users yet, please add one.</p>`;
    return;
  }

  usersGrid.innerHTML = users
    .map(
      (user) => `
        <div class="card">
           <button class="deleteBtn" onclick="deleteUser('${user._id}')">🗑️</button>
           <div>${user.name}</div>
           <div>${user.email}</div>
           <div>${user.age}</div>
        </div>
    `,
    )
    .join("");
}

async function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) return;

  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadUsers();
  } catch (error) {
    console.error(error, "Error deleting user.");
  }
}

addUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = Number(document.getElementById("age").value);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, age }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    addUserForm.reset();
    loadUsers();
  } catch (error) {
    console.error(error, "Error adding user.");
  }
});

loadUsers();
