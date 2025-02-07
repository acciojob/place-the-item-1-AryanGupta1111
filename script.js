//your code here
document.addEventListener("DOMContentLoaded", function() {
    const holder = document.querySelector(".holder");

    // Example: Adding more items dynamically
    for (let i = 8; i <= 10; i++) {
        let newItem = document.createElement("div");
        newItem.classList.add("item", "green");
        newItem.textContent = i;
        holder.appendChild(newItem);
    }
});
