document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");

    if (!userId) {
        document.getElementById("user-detail").innerHTML = "<p>ไม่พบข้อมูลผู้ใช้</p>";
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById("user-detail").innerHTML = `
                <h2>${user.name} (@${user.username})</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;

            document.getElementById("view-posts").onclick = () => {
                window.location.href = `user-posts.html?id=${user.id}`;
            };
        })
        .catch(error => console.error("Error fetching user details:", error));
});
