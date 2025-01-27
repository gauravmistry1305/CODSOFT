const locationsData = {
    "Andhra Pradesh": [
        { name: "Visakhapatnam", description: "A port city and industrial center." },
        { name: "Tirupati", description: "Home to the famous Tirupati temple." }
    ],
    "Arunachal Pradesh": [
        { name: "Itanagar", description: "The capital city." },
        { name: "Tawang", description: "Known for its beautiful monasteries." }
    ],
    "Assam": [
        { name: "Guwahati", description: "The largest city of Assam." },
        { name: "Kaziranga", description: "Famous for the Kaziranga National Park." }
    ],
    "Bihar": [
        { name: "Patna", description: "The capital city of Bihar." },
        { name: "Bodh Gaya", description: "A religious site for Buddhists." }
    ],
    "Chhattisgarh": [
        { name: "Raipur", description: "The capital city." },
        { name: "Bilaspur", description: "Known for its historical significance." }
    ],
    "Goa": [
        { name: "Panaji", description: "The capital city." },
        { name: "Margao", description: "Known for its Portuguese heritage." }
    ],
    "Gujarat": [
        { name: "Ahmedabad", description: "A major city in Gujarat." },
        { name: "Surat", description: "Known for its diamond and textile industries." }
    ],
    "Haryana": [
        { name: "Gurugram", description: "A financial and technology hub." },
        { name: "Faridabad", description: "An industrial city." }
    ],
    "Himachal Pradesh": [
        { name: "Shimla", description: "The capital city." },
        { name: "Manali", description: "A popular tourist destination." }
    ],
    "Jharkhand": [
        { name: "Ranchi", description: "The capital city." },
        { name: "Jamshedpur", description: "An industrial city." }
    ],
    "Karnataka": [
        { name: "Bengaluru", description: "The Silicon Valley of India." },
        { name: "Mysore", description: "Known for its palaces and heritage." }
    ],
    "Kerala": [
        { name: "Thiruvananthapuram", description: "The capital city of Kerala." },
        { name: "Kochi", description: "A major port city." },
        { name: "Alleppey", description: "Known for its backwaters." },
        { name: "Munnar", description: "A hill station known for its tea gardens." }
    ],
    "Madhya Pradesh": [
        { name: "Bhopal", description: "The City of Lakes." },
        { name: "Indore", description: "A commercial hub." }
    ],
    "Maharashtra": [
        { name: "Mumbai", description: "The city of dreams." },
        { name: "Pune", description: "The cultural capital of Maharashtra." }
    ],
    "Manipur": [
        { name: "Imphal", description: "The capital city." },
        { name: "Ukhrul", description: "Known for its scenic beauty." }
    ],
    "Meghalaya": [
        { name: "Shillong", description: "The Scotland of the East." },
        { name: "Cherrapunji", description: "One of the wettest places on Earth." }
    ],
    "Mizoram": [
        { name: "Aizawl", description: "The capital city." },
        { name: "Lunglei", description: "Known for its scenic hills." }
    ],
    "Nagaland": [
        { name: "Kohima", description: "The capital city." },
        { name: "Dimapur", description: "The commercial hub." }
    ],
    "Odisha": [
        { name: "Bhubaneswar", description: "The Temple City of India." },
        { name: "Puri", description: "Famous for Jagannath Temple." }
    ],
    "Punjab": [
        { name: "Amritsar", description: "Home to the Golden Temple." },
        { name: "Chandigarh", description: "A well-planned city." }
    ],
    "Rajasthan": [
        { name: "Jaipur", description: "The Pink City." },
        { name: "Udaipur", description: "The city of lakes." }
    ],
    "Sikkim": [
        { name: "Gangtok", description: "The capital city." },
        { name: "Pelling", description: "Known for its monasteries." }
    ],
    "Tamil Nadu": [
        { name: "Chennai", description: "The capital city of Tamil Nadu." },
        { name: "Madurai", description: "The temple city." }
    ],
    "Telangana": [
        { name: "Hyderabad", description: "City of pearls." },
        { name: "Warangal", description: "Known for its historical significance." }
    ],
    "Tripura": [
        { name: "Agartala", description: "The capital city." },
        { name: "Udaipur", description: "Known for its temples." }
    ],
    "Uttar Pradesh": [
        { name: "Lucknow", description: "The city of Nawabs." },
        { name: "Varanasi", description: "One of the oldest living cities in the world." }
    ],
    "Uttarakhand": [
        { name: "Dehradun", description: "The capital city." },
        { name: "Nainital", description: "A popular hill station." }
    ],
    "West Bengal": [
        { name: "Kolkata", description: "The cultural capital of India." },
        { name: "Darjeeling", description: "Famous for its tea gardens." }
    ]
};

function filterLocations() {
    const state = document.getElementById('stateDropdown').value;
    const locationsContainer = document.getElementById('locations');
    locationsContainer.innerHTML = '';

    if (state && locationsData[state]) {
        locationsData[state].forEach(location => {
            const locationDiv = document.createElement('div');
            locationDiv.className = 'location';
            locationDiv.innerHTML = `<h3>${location.name}</h3><p>${location.description}</p>`;
            locationsContainer.appendChild(locationDiv);
        });
    }
}

function redirectToState() {
    const state = document.getElementById('stateDropdown').value;
    if (state) {
        window.location.href = state;
    }
}
