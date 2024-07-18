// Sample data for demonstration
const solarData = [
    { image: "asset 7.jpeg", heading: "Solar Panels", description: "We Are pioneers of solar & renewable <br> energy industry" },
    { image: "asset 6.jpeg", heading: "Solar Panels", description: "We Are pioneers of solar & renewable <br> energy industry" },
];

const windData = [
    { image: "asset 5.jpeg",heading: "Wind Turbines" , description: "We Are pioneers of solar & renewable <br> energy industry" },
    { image: "asset 4.jpeg", heading: "Wind Turbines" , description: "We Are pioneers of solar & renewable <br> energy industry" },
];

const hydropowerData = [
    { image: "asset 9.jpeg", heading: "Hydropower Plants", description: "We Are pioneers of solar & renewable <br> energy industry" },
    { image: "asset 8.jpeg",heading: "Hydropower Plants", description: "We Are pioneers of solar & renewable <br> energy industry" },
];

filter('all');

function filter(category) {
    let data;
    switch (category) {
        case 'all':
            data = solarData.concat(windData, hydropowerData);
            break;
        case 'solar':
            data = solarData;
            break;
        case 'wind':
            data = windData;
            break;
        case 'hydropower':
            data = hydropowerData;
            break;
        default:
            console.error("Invalid category");
            return;
    }

    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'col-lg-4', 'pioneers');

        card.innerHTML = `  <div class=" pioneers col-lg-4 col-md-6 mt-2" >
                            <div class="">
                                    <div class="">
                                        <img src="./img/${item.image}" alt="" class=" rounded-3" id="img-height">
                                    </div>
                                    <div class="solar-panel pt-3">
                                        <h5 class="mt-2" style="color: #32C36C;"> ${item.heading}</h5>
                                        <p>${item.description}</p>
                                    </div>
                                </div>
                            </div>`;

        dataContainer.appendChild(card);
    });
}

// client slider
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'June Cha',
        position: 'Sales Manager',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
            'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
            "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
]

let idx = 1;
function updateTestimonials() {
    const { name, position, photo, text } = testimonials[idx];
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;
    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}
setInterval(updateTestimonials, 10000);

