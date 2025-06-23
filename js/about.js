// Mobile menu toggle functionality would go here
document.addEventListener('DOMContentLoaded', function() {
    // Simple animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Team member hover effect enhancement
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('.member-photo i').style.transform = 'scale(1.1)';
        });
        member.addEventListener('mouseleave', function() {
            this.querySelector('.member-photo i').style.transform = 'scale(1)';
        });
    });
});