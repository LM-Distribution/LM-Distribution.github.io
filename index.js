document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const description = document.querySelectorAll('.distrib-description');
    const totalSlides = slides.length;
    const indicatorsContainer = document.getElementById('indicators');
    const distribTitle1 = document.getElementById('distrib-title-1');
    const distribTitle2 = document.getElementById('distrib-title-2');
    const distribContainer = document.getElementById('distrib-content');
    const otherDistribContainer = document.getElementById('other-distrib-content');

    distribTitle1.addEventListener('click', () => {
        distribTitle1.classList.add('active');
        distribTitle2.classList.remove('active');

        otherDistribContainer.style.display = 'none';
        distribContainer.style.display = 'flex';
        indicatorsContainer.style.display = 'flex';
    });

    distribTitle2.addEventListener('click', () => {
        distribTitle2.classList.add('active');
        distribTitle1.classList.remove('active');

        distribContainer.style.display = 'none';
        indicatorsContainer.style.display = 'none';
        otherDistribContainer.style.display = 'flex';
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });

        description.forEach((desc, i) => {
            if (i === index) {
                desc.style.display = 'flex';
            } else {
                desc.style.display = 'none';
            }
        });
    }

    function createIndicators() {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicatorsContainer.appendChild(indicator);

            indicator.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
                updateIndicators();
            });
        }
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => {
            if (i === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
        updateIndicators();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
        updateIndicators();
    }

    createIndicators();
    document.getElementById('nextButton').addEventListener('click', nextSlide);
    document.getElementById('prevButton').addEventListener('click', prevSlide);

    showSlide(currentSlide);
    updateIndicators();
});
