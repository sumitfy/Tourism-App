
const apiKey = "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";

const monuments = ["Hauz Khas Fort - a medieval fort and popular tourist spot in New Delhi",
    "Jantar Mantar - an astronomical observatory with unique architectural instruments",
    "Firoz Shah Kotla - a 14th-century fortress ruins with a historical significance",
    "India Gate - a war memorial monument located in the heart of New Delhi",
    "Hauz Khas Village - a popular urban village with a blend of modern and traditional elements",
    "Kingdom of Dreams - a live entertainment and cultural destination with Bollywood-style shows",
    "Worlds of Wonder - an amusement park with water rides and other attractions",
    "Waste of Wonder - this theme park boasts stunning replicas of the Seven Wonders of the World",
    "Ambience Mall - a premium shopping mall with international brands and restaurants",
    "Dilli Haat - an open-air food and crafts market showcasing Indian culture",
    "Fun and Food Village - a water park with rides and slides for all ages",
    "The Garden of Senses - a park designed to engage all five senses and offer a unique experience",
    "Shootout Zone - a recreational shooting range with various firearms and targets",
    "Lodhi Gardens - a 15th-century park with tombs of Lodhi dynasty rulers and lush greenery",
    "Qutub Minar - a UNESCO World Heritage Site and the tallest minaret in India",
    "Sky Lounge - a rooftop bar and lounge with stunning views of the city",
    "Connaught Place - a bustling commercial and business hub with shops, eateries, and historical buildings",
    "Delhi Eye - a giant observation wheel offering panoramic views of Delhi",
    "Champa Gali - a charming lane in the midst of the city with cafes, boutiques, and art galleries",
    "Adventure Island - an amusement park with thrilling rides and attractions",
    "Nehru Planetarium - a space museum and planetarium that offers shows and exhibits on astronomy",
    "Deer Park - a peaceful park with various species of deer and other animals",
    "Indian Mountaineering Foundation - a center for mountaineering and adventure sports activities",
    "Lotus Temple - a Bahá'í House of Worship with a distinctive lotus-shaped architecture",
    "Akshardham Temple - a Hindu temple with stunning architecture and exhibits on Indian culture",
    "National Gallery of Modern Art - a museum showcasing modern and contemporary Indian art",
    "Appu Ghar - a popular amusement park with water and adventure rides",
    "Red Fort - a UNESCO World Heritage Site and a historical fort with significant political importance",
    "Moti Bagh - a residential area with lush greenery and modern amenities",
    "Nehru Planetarium - a space museum and planetarium that offers shows and exhibits on astronomy",
    "Shahpur Jat - a trendy neighborhood with designer boutiques, cafes, and art studios",
    "Pragati Maidan - a large exhibition center and venue for trade shows and events",
    "Kitty Su - a popular nightclub with international DJs and live music performances",
    "Mystery Rooms - a live escape game where players solve puzzles and clues to escape a room",
    "Privee - a nightclub and lounge with VIP sections and luxury amenities",
    "Rashtrapati Bhavan - the official residence of the President of India with beautiful gardens and architecture",
    "Jama Masjid - a 17th-century mosque and a significant Islamic monument in Delhi",
    "National Rail Museum - a museum showcasing the history and evolution of Indian railways"];
//Malls
const malls = ["Select City Walk Mall - A high-end mall in Saket, Delhi, offering luxury shopping, dining and entertainment options",
    "DLF Promenade Mall - A premium mall in Vasant Kunj, Delhi, featuring a mix of national and international brands, along with dining and entertainment options",
    "DLF Emporio Mall - A luxury mall in Vasant Kunj, Delhi, housing top designer brands and gourmet food options",
    "Ansal Plaza Mall - A popular mall in South Delhi, offering a variety of retail outlets, restaurants and a multiplex cinema",
    "Ambience Mall - A sprawling mall in Gurgaon, featuring high-end stores, restaurants, a cinema and an indoor snow park",
    "DLF Place Mall - A shopping destination in Saket, Delhi, with a mix of fashion brands, restaurants and entertainment options",
    "Pacific Mall - A popular shopping and entertainment center in Tagore Garden, Delhi, featuring a wide range of retail outlets, restaurants and a multiplex cinema",
    "TDI Mall - A mall located in Rajouri Garden, Delhi, featuring a range of stores, food outlets and a cinema",
    "City Square Mall - A mall in Rajouri Garden, Delhi, featuring a mix of local and international brands, food outlets and a cinema",
    "Metro Walk Mall - A mall in Rohini, Delhi, featuring a range of shopping and entertainment options including an amusement park and a water park",
    "DLF City Center Mall - A shopping center located in Gurgaon, featuring a mix of local and international brands, food outlets and a cinema",
    "V3S Mall - A mall in East Delhi, offering a variety of shopping, dining and entertainment options",
    "Cross River Mall - A shopping center in East Delhi, featuring a mix of retail outlets, restaurants and a cinema",
    "The Chanakya Mall - A luxury mall in Chanakyapuri, Delhi, featuring high-end designer brands and gourmet food options"];
//Markets
const markets = ["Sarojini Nagar Market - A popular street market in South Delhi, known for its affordable fashion and accessory options",
    "Janpath Market - A vibrant flea market in Connaught Place, Delhi, offering a variety of clothing, accessories and home decor items",
    "Chandni Chowk - One of the oldest and busiest markets in Old Delhi, known for its wholesale and retail shops selling textiles, spices, jewelry, and more",
    "Paharganj - A bustling market area in Central Delhi, popular among budget travelers for its cheap accommodations, restaurants and shops",
    "Karol Bagh - A commercial hub in Central Delhi, known for its diverse shopping options, including clothing, jewelry and electronics",
    "Palika Bazaar - An underground air-conditioned market in Connaught Place, Delhi, featuring a range of electronic goods and accessories",
    "Lajpat Nagar - A shopping area in South Delhi, known for its affordable clothing and accessory options, as well as a variety of street food stalls",
    "Greater Kailash - A posh residential area in South Delhi, featuring high-end fashion boutiques, restaurants and cafes",
    "Khan Market - An upscale market in Central Delhi, known for its exclusive fashion boutiques, bookshops and gourmet food stores",
    "Chawri Bazaar - A market in Old Delhi, known for its wholesale trading of paper products, stationery and wedding invitations",
    "Kamla Nagar - A shopping district in North Delhi, featuring a range of clothing, footwear, and accessory stores",
    "Daryaganj Book Market - A Sunday book bazaar in Old Delhi, offering a wide range of new and used books at affordable prices",
    "Sadar Bazaar - A wholesale market in Old Delhi, known for its textiles, handicrafts, and home decor items",
    "Banjara Market - A market in Gurgaon, featuring a range of clothing, accessories and home decor items inspired by Indian ethnic designs",
    "Shankar Market - A market in Connaught Place, Delhi, known for its shops selling fabrics, stationery and sports equipment",
    "Kinari Bazaar - A wholesale market in Old Delhi, specializing in wedding accessories such as ribbons, laces, trims and embroidery work",
    "Chor Bazar - A flea market in Old Delhi, known for its second-hand goods, antiques and vintage items",
    "Sunder Nagar - A residential area in Central Delhi, featuring art galleries, boutique stores and upscale restaurants",
    "Gazipur Phool Mandi - A wholesale flower market on the outskirts of Delhi, known for its variety of fresh flowers and decorative plants",
    "Meena Bazaar - A market in Old Delhi, known for its traditional Indian clothing, jewelry and footwear",
    "Panchkuian Marg - A market in Central Delhi, featuring a range of clothing and shoe stores, as well as handicraft shops",
    "Jwala Heri - A market in West Delhi, known for its affordable clothing and accessory options",
    "Gaffar Market - A market in Karol Bagh, Delhi, specializing in electronics and accessories",
    "Matka Market - A wholesale market in South Delhi, known for its terracotta and ceramic products",
    "Nehru Place Market - A commercial hub in South Delhi, known for its wide range of electronics and computer shops",
    "Monastery Market - A market in Majnu ka Tila, Delhi, known for its Tibetan handicrafts, clothing and jewelry",
    "Dariba Khan - A market in Chandni Chowk, Delhi, known for its jewelry shops and traditional silverware",
    "Bagirath Place - A market in Chandni Chowk, Delhi"];
//Temples
const temples = ["Akshardham Temple - A magnificent Hindu temple with stunning architecture and a variety of exhibits depicting Indian culture, history, and spirituality: Located at Noida Mor, Pandav Nagar, New Delhi",
    "Bhairon Mandir or Sri Kilkari Bhairav Temple - A revered temple dedicated to Lord Bhairon, a fierce manifestation of Lord Shiva: Located at Pragati Maidan, New Delhi",
    "Gauri Shankar Temple - A popular Hindu temple dedicated to Lord Shiva and his consort, Goddess Parvati, in the form of Gauri Shankar: Located at Chandni Chowk, New Delhi",
    "Hanuman Mandir - A prominent Hindu temple dedicated to Lord Hanuman, a symbol of strength and devotion: Located at Baba Kharak Singh Rd, Connaught Place, New Delhi",
    "Birla Mandir or Lakshmi Narayan Temple - A beautiful temple dedicated to Lord Vishnu and his consort, Goddess Lakshmi, with stunning architecture and intricate carvings: Located at Mandir Marg, Lajpat Nagar, New Delhi",
    "Mahabodhi Temple - A Buddhist temple built in the traditional Indian style, housing a large statue of Lord Buddha and other important Buddhist relics: Located at Terahtal, Gole Market, New Delhi",
    "Ladakh Buddhist Vihara - A Buddhist temple and cultural center dedicated to preserving the rich heritage of Ladakh: Located at Mathura Rd, New Delhi",
    "Shri Digambar Jain Lal Mandir - A prominent Jain temple known for its stunning architecture and intricate carvings: Located at Chandni Chowk, New Delhi",
    "Svetambara Jain Temple - A beautiful temple dedicated to Lord Mahavira, the founder of Jainism, with stunning architecture and intricate carvings: Located at 17, Netaji Subhash Marg, Daryaganj, New Delhi",
    "Arya Samaj Mandir - A temple dedicated to the teachings of the Arya Samaj movement, promoting Vedic knowledge and Hindu values: Located at Karol Bagh, New Delhi",
    "ISKCON Temple - A popular temple dedicated to Lord Krishna and his teachings, with stunning architecture and regular devotional ceremonies: Located at Hare Krishna Hill, East of Kailash, New Delhi",
    "Shri Jagannath Mandir - A Hindu temple dedicated to Lord Jagannath, Balabhadra, and Subhadra, with stunning architecture and traditional rituals: Located at Hauz Khas, New Delhi",
    "Chhatarpur Mandir - A Hindu temple complex dedicated to Goddess Katyayani, with stunning architecture and a serene atmosphere: Located at Chhatarpur, New Delhi",
    "Lotus Temple - A Bahá'í House of Worship with a unique lotus-shaped architecture, promoting peace, unity, and spiritual harmony : Located at Lotus Temple Rd, Bahapur, Shambhu Dayal Bagh, Kalkaji, New Delhi",
    "Jhandewalan Mandir - A revered Hindu temple dedicated to Goddess Durga, with stunning architecture and traditional rituals : Located at Jhandewalan, New Delhi",
    "Kalkaji Mandir - A popular Hindu temple dedicated to Goddess Kali, with stunning architecture and a vibrant atmosphere : Located at Kalkaji, New Delhi",
    "Sai Baba Mandir lodhi road - A temple dedicated to the teachings and miracles of Sai Baba, a popular saint and spiritual leader : Located at Lodhi Rd, Pragati Vihar, New Delhi",
    "Kali Mandir - A Hindu temple dedicated to Goddess Kali, with stunning architecture and traditional rituals : Located at CR Park"];

function getValues() {
    var days = document.getElementById("days").value;
    var place = document.getElementById("place").value;
    var purpose = document.getElementById("purpose").value;
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
function arrDisplay(array, n, purpose) {
    var container = document.getElementById("container");
    var heading = document.createElement("h1");
    heading.style.fontSize = "60px";
    heading.style.textAlign = "center";
    heading.style.color = "#ffffff"
    heading.innerHTML = purpose;
    container.appendChild(heading);
    for (var i = 0; i < n; i++) {
        var div = document.createElement("div");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = array[i];
        div.appendChild(checkbox);
        var label = document.createElement("label");
        label.innerHTML = array[i];
        div.appendChild(label);
        container.appendChild(div);
    }
}

function displayArray(array1, array2, array3, array4, purpose, main, semi) {
    shuffle(array1);
    shuffle(array2);
    shuffle(array3);
    shuffle(array4);
    switch (purpose) {
        case "tourism":
            arrDisplay(array1, main, "Tourist Attraction");
            arrDisplay(array2, semi, "Malls");
            arrDisplay(array3, semi, "Markets");
            arrDisplay(array4, semi, "Temples");
            break;
        case "religious":
            arrDisplay(array4, main, "Temples");
            arrDisplay(array1, semi, "Tourist Attraction");
            arrDisplay(array2, semi, "Malls");
            arrDisplay(array3, semi, "Markets");
            break;
        case "shopping":
            arrDisplay(array2, main, "Malls");
            arrDisplay(array3, main, "Markets");
            arrDisplay(array1, semi, "Tourist Attraction");
            arrDisplay(array4, semi, "Temples");
    }
}

async function submitValues() {

    var days = document.getElementById("days").value;
    var place = document.getElementById("place").value;
    var purpose = document.getElementById("purpose").value;
    var selectedPlaces = [];
    var checkboxes = document.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedPlaces.push(checkboxes[i].value);
        }
    }
    var data = {
        days: days,
        place: place,
        purpose: purpose,
        selectedPlaces: selectedPlaces
    };

    const jsonData = { "str": `Hello ChatGPT, Please help me generate a ${data.days} day itinerary on [${data.selectedPlaces}] with time and activity.` };
    var nikal = null;

    try {
        const response = await fetch('/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData),

        });
        const data = await response.text();
        nikal = data;
    } catch (error) {
        console.error(error);
    }

    const itineraryArray = nikal.split('\n\n');
    itineraryArray.forEach((dayItinerary, index) => {
        const activityArray = dayItinerary.split('\n');

        const dayHeader = document.createElement('test');
        activityArray.forEach((activity, activityIndex) => {
            if (activityIndex === 0) {
                const locationParagraph = document.createElement('p');
                locationParagraph.innerHTML = `${activity} <br><br>`;
                document.getElementById('p1').appendChild(locationParagraph);
            } else {
                const activityParagraph = document.createElement('p');
                activityParagraph.innerHTML = `${activity} <br><br>`;
                document.getElementById('p1').appendChild(activityParagraph);
            }
        });
    });
}

function generateLists() {
    var days = document.getElementById("days").value;
    var place = document.getElementById("place").value;
    var purpose = document.getElementById("purpose").value;
    var main = days * 3;
    var semi = days * 2;
    displayArray(monuments, malls, markets, temples, purpose, main, semi);
}
