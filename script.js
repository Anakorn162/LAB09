document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById("user-list");
            users.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user-item");
                div.textContent = user.name;
                div.onclick = () => {
                    window.location.href = `user-detail.html?id=${user.id}`;
                };
                userList.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});
