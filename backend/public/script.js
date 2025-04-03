document.querySelectorAll('.contact-links img').forEach(img => {
    // Store the default and hover image paths
    const defaultSrc = img.getAttribute('src');
    const hoverSrc = defaultSrc.replace('-navy.png', '-pink.png');

    // Add event listeners for mouseenter and mouseleave
    img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverSrc); // Change to hover image
    });

    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', defaultSrc); // Revert to default image
    });
});

async function callBackend() {
    const res = await fetch('http://localhost:3000/api/message');
    const data = await res.json();
    alert(data.msg);
  }