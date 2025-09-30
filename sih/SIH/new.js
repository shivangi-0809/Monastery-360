// Toggle Sidebar Open/Close
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

// Close sidebar when a link is clicked (for mobile friendliness)
document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("sidebar").style.width = "0";
  });
});


// Scroll Animation for cards
const faders = document.querySelectorAll(".fade-in-up");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});





// Search and filter
document.getElementById("archiveSearch").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  document.querySelectorAll(".archive-item").forEach(item => {
    let text = item.innerText.toLowerCase();
    item.style.display = text.includes(value) ? "block" : "none";
  });
});

document.getElementById("archiveFilter").addEventListener("change", function() {
  let value = this.value;
  document.querySelectorAll(".archive-item").forEach(item => {
    item.style.display = (value === "all" || item.dataset.category === value) ? "block" : "none";
  });
});

// Modal
let archiveModal = document.getElementById("archiveModal");
let modalTitle = document.getElementById("modalArchiveTitle");
let modalImg = document.getElementById("modalArchiveImg");
let modalDesc = document.getElementById("modalArchiveDesc");
let modalDownload = document.getElementById("downloadArchive");

document.querySelectorAll(".view-archive").forEach(btn => {
  btn.addEventListener("click", function() {
    modalTitle.innerText = this.dataset.title;
    modalImg.src = this.dataset.img;
    modalDesc.innerText = this.dataset.desc;
    modalDownload.href = this.dataset.img;
    archiveModal.style.display = "block";
  });
});

function closeArchiveModal() {
  archiveModal.style.display = "none";
}


// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // lower is faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Trigger when section is visible
let impactShown = false;
window.addEventListener("scroll", () => {
  const section = document.querySelector(".impact-section");
  const rect = section.getBoundingClientRect();
  if (!impactShown && rect.top < window.innerHeight) {
    animateCounters();
    impactShown = true;
  }
});




function toggleChat() {
  let chatBox = document.getElementById("chat-box");
  if (chatBox.style.display === "flex") {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "flex";
  }
}

function sendChat() {
  let input = document.getElementById("chat-input");
  let msg = input.value.trim();
  if (msg === "") return;

  let chatMessages = document.getElementById("chat-messages");

  // Append user message
  let userMsg = document.createElement("p");
  userMsg.innerHTML = "<strong>You:</strong> " + msg;
  chatMessages.appendChild(userMsg);

  // AI reply (placeholder)
  let aiMsg = document.createElement("p");
  aiMsg.innerHTML = "<strong>AI:</strong> I’m here to assist you!";
  chatMessages.appendChild(aiMsg);

  chatMessages.scrollTop = chatMessages.scrollHeight;
  input.value = "";
}







function openVR(videoId) {
  const modal = document.getElementById("vrModal");
  const iframe = document.getElementById("vrIframe");

  // YouTube embed URL with autoplay, muted, VR mode
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&fs=1&rel=0&modestbranding=1`;

  modal.style.display = "flex";
}

function closeVRModal() {
  const modal = document.getElementById("vrModal");
  const iframe = document.getElementById("vrIframe");
  modal.style.display = "none";
  iframe.src = ""; // stop the video
}

