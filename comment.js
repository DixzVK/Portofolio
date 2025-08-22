document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("comment-form");
    const status = document.getElementById("form-status");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const data = {
        nama: form.nama.value,
        pesan: form.pesan.value
      };
  
      try {
        const response = await fetch("https://formspree.io/f/mblknago", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          status.textContent = "Komentar berhasil dikirim!";
          status.style.color = "lightgreen";
          form.reset();
        } else {
          status.textContent = "Gagal mengirim, coba lagi.";
          status.style.color = "tomato";
        }
      } catch (error) {
        status.textContent = "Terjadi kesalahan!";
        status.style.color = "tomato";
      }
    });
  });
  