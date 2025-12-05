document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }

     // Time Table Tabs
    const tabLinks = document.querySelectorAll('.nav-tabs .nav-link');
    const tabPanes = document.querySelectorAll('.tab-content .tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const targetId = event.currentTarget.getAttribute('href');
            const targetPane = document.querySelector(targetId);

            if (!targetPane) return;
            tabPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
            });
            tabLinks.forEach(l => {
                l.classList.remove('active');
            });
            targetPane.classList.add('show', 'active');

            event.currentTarget.classList.add('active');
        });
    });
    


    //campus map
    const campusMapImage = document.getElementById('campusMapImage');
    const mapInfoCards = document.querySelectorAll('.map-info-card');
    
    const mapImages = {
        'overview': 'Public/campus.jpg', 
        'Administration-block': 'Public/admission.jpeg', 
        'library': 'Public/library.jpeg', 
        'classroom': 'Public/class.jpeg', 
        'chill-zone': 'Public/chillzone.jpeg', 
        'recreation': 'Public/recreation.jpeg',
        'labs': 'Public/lab.jpeg',
    };

    

    function updateMap(locationId) {
       
        const newSrc = mapImages[locationId] || mapImages['overview'];
        campusMapImage.src = newSrc;

        
       

        
        mapInfoCards.forEach(card => {
            card.classList.remove('active-map-info');
            if (card.getAttribute('data-location-id') === locationId) {
                card.classList.add('active-map-info');
            }
        });
    }
    mapInfoCards.forEach(card => {
        card.addEventListener('click', () => {
            const locationId = card.getAttribute('data-location-id');
            updateMap(locationId);
        });
    });
});