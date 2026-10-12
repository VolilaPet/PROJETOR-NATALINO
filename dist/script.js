// Substitua #oferta pelo endereço real quando a oferta/checkout estiver pronta.
const CHECKOUT_URL = "#oferta";
document.querySelectorAll("[data-checkout]").forEach((link) => {
  link.setAttribute("href", CHECKOUT_URL);
});

// O player mantém os controles nativos e a reprodução por interação do usuário.
const productVideo = document.querySelector("#product-video");
const videoPlayButton = document.querySelector(".product-demo__play");
const videoStatus = document.querySelector(".product-demo__status");

if (productVideo && videoPlayButton) {
  videoPlayButton.hidden = false;
  videoPlayButton.addEventListener("click", async () => {
    videoPlayButton.disabled = true;
    videoStatus.hidden = true;
    try {
      await productVideo.play();
    } catch {
      videoStatus.textContent = "Não foi possível iniciar o vídeo. Tente novamente pelos controles do player.";
      videoStatus.hidden = false;
    } finally {
      videoPlayButton.disabled = false;
    }
  });
  productVideo.addEventListener("play", () => { videoPlayButton.hidden = true; });
  productVideo.addEventListener("pause", () => { videoPlayButton.hidden = false; });
  productVideo.addEventListener("ended", () => { videoPlayButton.hidden = false; });
  productVideo.addEventListener("error", () => {
    videoPlayButton.hidden = true;
    videoStatus.textContent = "Não foi possível carregar o vídeo. Recarregue a página para tentar novamente.";
    videoStatus.hidden = false;
  });
}

// FAQ: cinco perguntas fechadas inicialmente e apenas uma resposta aberta por vez.
const projectorFaqItems = [...document.querySelectorAll(".projector-faq .faq-item")];
function setProjectorFaqState(item, isOpen) {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  item.classList.toggle("is-open", isOpen);
  question.setAttribute("aria-expanded", String(isOpen));
  answer.setAttribute("aria-hidden", String(!isOpen));
  answer.inert = !isOpen;
}
projectorFaqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  setProjectorFaqState(item, false);
  question.addEventListener("click", () => {
    const shouldOpen = question.getAttribute("aria-expanded") !== "true";
    projectorFaqItems.forEach((faqItem) => setProjectorFaqState(faqItem, false));
    if (shouldOpen) setProjectorFaqState(item, true);
  });
});

// Informe o checkout real abaixo. O botão do topo continua levando à seção #oferta.
const OFFER_CHECKOUT_URL = "https://gwx-industria-e-comercio-ltda.pay.yampi.com.br/r/5M9NWZZ2MS";
document.querySelectorAll("[data-offer-checkout]").forEach((link) => {
  link.href = OFFER_CHECKOUT_URL || "#oferta";
});

