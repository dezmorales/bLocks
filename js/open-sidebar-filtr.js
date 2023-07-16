export function openFiltrSidebar() {
    const sidebarFiltr = document.querySelector(".sidebar-filtr")
    const sidebarFiltrTitle = document.querySelector(".sidebar-filtr__title")
    const sidebarFiltrArray = document.querySelectorAll(".sidebar-filtr__list li")
    
    // Открытие и закрытие .sidebar-filtr

    sidebarFiltrTitle.addEventListener("click", openSidebarFiltr)
    
    function openSidebarFiltr() {
        sidebarFiltr.classList.toggle("open")
    }

    // Добавление и удаление текущего класса на фильтр

    sidebarFiltrArray.forEach(li => {
        li.addEventListener("click", currentFiltr)

        function currentFiltr(event) {
            sidebarFiltrArray.forEach(li => {
                li.classList.remove("sidebar-filtr__current")
            })
            event.target.classList.add("sidebar-filtr__current")
        }
    });
}
