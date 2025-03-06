document.addEventListener('DOMContentLoaded', function() {
    // Testimonial data
    const testimonials = [
        {
            name: "Sarah Johnson",
            text: "The TechPulse X1 has completely transformed how I approach fitness. The health tracking is incredibly accurate!",
            image: "images/testimonial-1.jpg"
        },
        {
            name: "David Chen",
            text: "Battery life that actually lasts as advertised! I'm impressed with the build quality and responsive interface.",
            image: "images/testimonial-2.jpg"
        },
        {
            name: "Emily Rodriguez",
            text: "The customization options are endless. I love being able to match my watch face to my outfit every day.",
            image: "images/testimonial-3.jpg"
        }
    ];
    
    const testimonialSlider = document.querySelector('.testimonial-slider');
    let currentIndex = 0;
    
    // Function to create testimonial HTML
    function createTestimonialHTML(testimonial) {
        return `
            <div class="testimonial">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <p class="testimonial-author">- ${testimonial.name}</p>
            </div>
        `;
    }
    
    // Initial display
    testimonialSlider.innerHTML = createTestimonialHTML(testimonials[currentIndex]);
    
    // Automatically change testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonialSlider.innerHTML = createTestimonialHTML(testimonials[currentIndex]);
    }, 5000);
});