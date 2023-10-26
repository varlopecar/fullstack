const readMore = (btn, content) => {
    const readMoreBtn = document.getElementById(btn);
    const additionalContent = document.getElementById(content);

    readMoreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        additionalContent.classList.toggle("show");
        readMoreBtn.innerText === "Voir plus" ? readMoreBtn.innerText = "Voir moins" : readMoreBtn.innerText = "Voir plus";
    });
}

readMore("read-more-btn-concepts", "additional-content-concepts");
readMore("read-more-btn-infra", "additional-content-infra");
readMore("read-more-btn-html", "additional-content-html");