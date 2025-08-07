// Acessibilidade

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnAcessibilidade");
  const modal = document.getElementById("meuModal");
  if (btn && modal) {
    btn.addEventListener("click", function () {
      modal.showModal();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnAcessibilidade");
  const modal = document.getElementById("meuModal");
  const btnClose = document.getElementById("btnclose-popup");

  if (btn && modal) {
    btn.addEventListener("click", function () {
      modal.showModal();
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener("click", function () {
      modal.close();
    });
  }
});

// likes
document.addEventListener("DOMContentLoaded", function () {
  const reactBtn = document.querySelector(".reaction");
  let liked = false;
  reactBtn.addEventListener("click", () => {
    if (!liked) {
      reactBtn.innerHTML = `<span class="like">❤️</span>`;
      liked = true;
    } else {
      reactBtn.innerHTML = `<span class="unlike">🤍</span>`;
      liked = false;
    }
  });
});
