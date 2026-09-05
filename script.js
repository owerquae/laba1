console.log('Hello World');
(function() {
    const langData = {
        ru: {
            brand: "Grand Luxury", navHome: "Главная", navRooms: "Номера", navServices: "Услуги", navRestaurant: "Ресторан", navContact: "Контакты",
            heroTitle: "Grand Luxury", heroText: "Изысканность и комфорт в самом сердце города", heroBtn: "Забронировать столик",
            whyUs: "Почему выбирают нас", f1t: "Президентский люкс", f1d: "Просторные апартаменты с панорамным видом", f2t: "Ресторан высокой кухни", f2d: "Авторская кухня от шеф-повара",
            f3t: "Спа-комплекс", f3d: "Хаммам, массаж, процедуры", f4t: "Панорамный бассейн", f4d: "С подогревом и видом на город",
            roomsT: "Наши номера", r1t: "Стандарт", r1d: "Уютный номер для двоих", r2t: "Люкс", r2d: "Гостиная и спальня, вид на море", r3t: "Президентский", r3d: "200 м², терраса, джакузи",
            servicesT: "Услуги и удобства", s1t: "Трансфер и консьерж", s1d: "Встреча в аэропорту на автомобилях премиум-класса. Индивидуальные экскурсии.",
            s2t: "Рестораны и бары", s2d: "Три ресторана: итальянская кухня, японский гастро-бар, лобби-бар с авторскими коктейлями.",
            s3t: "Спа и wellness", s3d: "Хаммам, сауна, массажный кабинет, стоун-терапия.",
            restT: "Заказ столика в ресторане", mapHint: "Нажмите на свободный столик (зеленый) для выбора", bookBtn: "Забронировать столик",
            contactT: "Контакты", sendBtn: "Отправить запрос", footerAddr: "ул. Пальмовая, д. 1", rights: "Все права защищены",
            namePlace: "ФИО гостя", roomPlace: "Номер комнаты проживания", selectedTablePlaceholder: "Выбранный столик", selectedPrefix: "Выбранный столик: ", successMsg: "Столик забронирован!", alreadyBooked: "Этот столик уже забронирован", fillError: "Заполните все поля и выберите столик", emailPlace: "Email", yourName: "Ваше имя",
            tableTitle: "Сравнение категорий номеров", th1: "Категория", th2: "Площадь", th3: "Вид", th4: "Консьерж",
            row1: "Президентский", row2: "Люкс", row3: "Полулюкс", row4: "Стандарт",
            view1: "Панорамный", view2: "Море/город", view3: "Городской", view4: "Внутренний двор",
            yes: "Да", no: "Нет", mapTitle: "GRAND LUXURY RESTAURANT"
        },
        en: {
            brand: "Grand Luxury", navHome: "Home", navRooms: "Rooms", navServices: "Services", navRestaurant: "Restaurant", navContact: "Contact",
            heroTitle: "Grand Luxury", heroText: "Elegance and comfort in the heart of the city", heroBtn: "Book a Table",
            whyUs: "Why choose us", f1t: "Presidential Suite", f1d: "Spacious apartments with panoramic view", f2t: "Fine Dining", f2d: "Chef's signature cuisine",
            f3t: "Spa and Wellness", f3d: "Hammam, massage, treatments", f4t: "Panoramic Pool", f4d: "Heated pool with city view",
            roomsT: "Our Rooms", r1t: "Standard", r1d: "Cozy room for two", r2t: "Luxury", r2d: "Living room and bedroom, sea view", r3t: "Presidential", r3d: "200 m², terrace, jacuzzi",
            servicesT: "Services", s1t: "Transfer and Concierge", s1d: "Airport pickup in premium cars. Private excursions.",
            s2t: "Restaurants and Bars", s2d: "Three restaurants: Italian, Japanese gastro-bar, lobby bar with signature cocktails.",
            s3t: "Spa and Wellness", s3d: "Hammam, sauna, massage room, stone therapy.",
            restT: "Restaurant Table Booking", mapHint: "Click on a free table (green) to select", bookBtn: "Book Table",
            contactT: "Contacts", sendBtn: "Send request", footerAddr: "Palmovaya str, 1", rights: "All rights reserved",
            namePlace: "Guest full name", roomPlace: "Room number", selectedTablePlaceholder: "Selected table", selectedPrefix: "Selected table: ", successMsg: "Table booked!", alreadyBooked: "This table is already booked", fillError: "Please fill all fields and select a table", emailPlace: "Email", yourName: "Your name",
            tableTitle: "Room categories comparison", th1: "Category", th2: "Area", th3: "View", th4: "Concierge",
            row1: "Presidential", row2: "Luxury", row3: "Junior Suite", row4: "Standard",
            view1: "Panoramic", view2: "Sea/City", view3: "City", view4: "Inner yard",
            yes: "Yes", no: "No", mapTitle: "GRAND LUXURY RESTAURANT"
        },
        tr: {
            brand: "Grand Luxury", navHome: "Ana Sayfa", navRooms: "Odalar", navServices: "Hizmetler", navRestaurant: "Restoran", navContact: "İletişim",
            heroTitle: "Grand Luxury", heroText: "Şehir merkezinde zarafet ve konfor", heroBtn: "Masa Rezervasyonu",
            whyUs: "Neden bizi seçmelisiniz", f1t: "Başkanlık Süiti", f1d: "Panoramik manzaralı geniş daireler", f2t: "Gurme Restoran", f2d: "Şefin özel mutfağı",
            f3t: "Spa ve Wellness", f3d: "Hamam, masaj, bakımlar", f4t: "Panoramik Havuz", f4d: "Isıtmalı havuz ve şehir manzarası",
            roomsT: "Odalarımız", r1t: "Standart", r1d: "İki kişilik konforlu oda", r2t: "Lüks", r2d: "Oturma odası ve yatak odası, deniz manzaralı", r3t: "Başkanlık", r3d: "200 m², teras, jakuzi",
            servicesT: "Hizmetler", s1t: "Transfer ve Konciyerj", s1d: "Premium araçlarla havalimanı karşılama. Özel turlar.",
            s2t: "Restoran ve Barlar", s2d: "Üç restoran: İtalyan, Japon gastro-bar, özel kokteyller.",
            s3t: "Spa ve wellness", s3d: "Hamam, sauna, masaj odası, taş terapisi.",
            restT: "Restoran Masa Rezervasyonu", mapHint: "Boş masayı (yeşil) seçmek için tıklayın", bookBtn: "Masayı Rezerve Et",
            contactT: "İletişim", sendBtn: "Gönder", footerAddr: "Palmovaya cad. 1", rights: "Tüm hakları saklıdır",
            namePlace: "Misafir adı soyadı", roomPlace: "Oda numarası", selectedTablePlaceholder: "Seçilen masa", selectedPrefix: "Seçilen masa: ", successMsg: "Masa rezerve edildi!", alreadyBooked: "Bu masa zaten rezerve edilmiş", fillError: "Lütfen tüm alanları doldurun ve masa seçin", emailPlace: "E-posta", yourName: "Adınız",
            tableTitle: "Oda kategorileri karşılaştırması", th1: "Kategori", th2: "Alan", th3: "Manzara", th4: "Konciyerj",
            row1: "Başkanlık", row2: "Lüks", row3: "Junior Süit", row4: "Standart",
            view1: "Panoramik", view2: "Deniz/Şehir", view3: "Şehir", view4: "İç avlu",
            yes: "Evet", no: "Hayır", mapTitle: "GRAND LUXURY RESTORAN"
        }
    };

    let currentLang = 'ru';
    let selectedTableId = null;

    function updateLanguage(lang) {
        const d = langData[lang];
        if (!d) return;
        
        document.getElementById('brandText').innerText = d.brand;
        document.getElementById('navHome').innerText = d.navHome;
        document.getElementById('navRooms').innerText = d.navRooms;
        document.getElementById('navServices').innerText = d.navServices;
        document.getElementById('navRestaurant').innerText = d.navRestaurant;
        document.getElementById('navContact').innerText = d.navContact;
        document.getElementById('heroTitle').innerText = d.heroTitle;
        document.getElementById('heroText').innerText = d.heroText;
        document.getElementById('heroBtn').innerHTML = '<i class="bi bi-calendar-check"></i> ' + d.heroBtn;
        document.getElementById('whyUsTitle').innerText = d.whyUs;
        document.getElementById('feature1Title').innerText = d.f1t;
        document.getElementById('feature1Text').innerText = d.f1d;
        document.getElementById('feature2Title').innerText = d.f2t;
        document.getElementById('feature2Text').innerText = d.f2d;
        document.getElementById('feature3Title').innerText = d.f3t;
        document.getElementById('feature3Text').innerText = d.f3d;
        document.getElementById('feature4Title').innerText = d.f4t;
        document.getElementById('feature4Text').innerText = d.f4d;
        document.getElementById('roomsTitle').innerText = d.roomsT;
        document.getElementById('room1Title').innerText = d.r1t;
        document.getElementById('room1Desc').innerText = d.r1d;
        document.getElementById('room2Title').innerText = d.r2t;
        document.getElementById('room2Desc').innerText = d.r2d;
        document.getElementById('room3Title').innerText = d.r3t;
        document.getElementById('room3Desc').innerText = d.r3d;
        document.getElementById('servicesTitle').innerText = d.servicesT;
        document.getElementById('serv1Title').innerText = d.s1t;
        document.getElementById('serv1Text').innerText = d.s1d;
        document.getElementById('serv2Title').innerText = d.s2t;
        document.getElementById('serv2Text').innerText = d.s2d;
        document.getElementById('serv3Title').innerText = d.s3t;
        document.getElementById('serv3Text').innerText = d.s3d;
        document.getElementById('restTitle').innerText = d.restT;
        document.getElementById('mapHint').innerHTML = '<i class="bi bi-info-circle"></i> ' + d.mapHint;
        document.getElementById('bookTableBtn').innerHTML = '<i class="bi bi-check2-circle"></i> ' + d.bookBtn;
        document.getElementById('contactTitle').innerText = d.contactT;
        document.getElementById('sendBtn').innerHTML = d.sendBtn;
        document.getElementById('footerAddress').innerText = d.footerAddr;
        document.getElementById('footerAddress2').innerText = d.footerAddr;
        document.getElementById('rightsText').innerText = d.rights;
        document.getElementById('mapTitle').innerText = d.mapTitle;
        document.getElementById('guestName').placeholder = d.namePlace;
        document.getElementById('roomNumber').placeholder = d.roomPlace;
        document.getElementById('contactName').placeholder = d.yourName;
        document.getElementById('contactEmail').placeholder = d.emailPlace;
        
        const selectedTableInput = document.getElementById('selectedTableDisplay');
        if (selectedTableInput) {
            selectedTableInput.placeholder = d.selectedTablePlaceholder;
            if (selectedTableId) {
                selectedTableInput.value = d.selectedPrefix + selectedTableId.slice(1);
            } else {
                selectedTableInput.value = '';
            }
        }
        
        const tableTitle = document.querySelector('.table-title');
        if (tableTitle) tableTitle.innerHTML = '<i class="bi bi-table"></i> ' + d.tableTitle;
        
        const ths = document.querySelectorAll('.custom-table thead tr th');
        if (ths.length >= 4) {
            ths[0].innerHTML = '<i class="bi bi-crown"></i> ' + d.th1;
            ths[1].innerHTML = '<i class="bi bi-rulers"></i> ' + d.th2;
            ths[2].innerHTML = '<i class="bi bi-eye"></i> ' + d.th3;
            ths[3].innerHTML = '<i class="bi bi-person-check"></i> ' + d.th4;
        }
        
        const rows = document.querySelectorAll('.custom-table tbody tr');
        if (rows.length >= 4) {
            const cells1 = rows[0].querySelectorAll('td');
            if (cells1.length >= 4) {
                cells1[0].innerHTML = '<strong>' + d.row1 + '</strong>';
                cells1[1].innerHTML = '200 м²';
                cells1[2].innerHTML = d.view1;
                cells1[3].innerHTML = '<i class="bi bi-check-lg text-success"></i> ' + d.yes;
            }
            const cells2 = rows[1].querySelectorAll('td');
            if (cells2.length >= 4) {
                cells2[0].innerHTML = '<strong>' + d.row2 + '</strong>';
                cells2[1].innerHTML = '85 м²';
                cells2[2].innerHTML = d.view2;
                cells2[3].innerHTML = '<i class="bi bi-check-lg text-success"></i> ' + d.yes;
            }
            const cells3 = rows[2].querySelectorAll('td');
            if (cells3.length >= 4) {
                cells3[0].innerHTML = '<strong>' + d.row3 + '</strong>';
                cells3[1].innerHTML = '60 м²';
                cells3[2].innerHTML = d.view3;
                cells3[3].innerHTML = '<i class="bi bi-x-lg text-danger"></i> ' + d.no;
            }
            const cells4 = rows[3].querySelectorAll('td');
            if (cells4.length >= 4) {
                cells4[0].innerHTML = '<strong>' + d.row4 + '</strong>';
                cells4[1].innerHTML = '45 м²';
                cells4[2].innerHTML = d.view4;
                cells4[3].innerHTML = '<i class="bi bi-x-lg text-danger"></i> ' + d.no;
            }
        }
        
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector('.lang-btn[data-lang="' + lang + '"]');
        if (activeBtn) activeBtn.classList.add('active');
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentLang = this.getAttribute('data-lang');
            updateLanguage(currentLang);
        });
    });

    function updateTableColors() {
        document.querySelectorAll('.table-group').forEach(group => {
            const rect = group.querySelector('rect');
            const isBooked = group.getAttribute('data-booked') === 'true';
            const tableId = group.getAttribute('data-table-id');
            rect.classList.remove('free-table', 'booked-table', 'selected-table');
            if (isBooked) {
                rect.classList.add('booked-table');
            } else {
                rect.classList.add('free-table');
                if (selectedTableId === tableId) {
                    rect.classList.add('selected-table');
                }
            }
        });
    }

    document.querySelectorAll('.table-group').forEach(group => {
        const rect = group.querySelector('rect');
        rect.addEventListener('click', function(e) {
            e.stopPropagation();
            const isBooked = group.getAttribute('data-booked') === 'true';
            if (isBooked) {
                alert(langData[currentLang].alreadyBooked);
                return;
            }
            const tableId = group.getAttribute('data-table-id');
            if (selectedTableId === tableId) {
                selectedTableId = null;
            } else {
                selectedTableId = tableId;
            }
            updateTableColors();
            const d = langData[currentLang];
            if (selectedTableId) {
                document.getElementById('selectedTableDisplay').value = d.selectedPrefix + selectedTableId.slice(1);
            } else {
                document.getElementById('selectedTableDisplay').value = '';
            }
        });
    });

    function showSvgAnimation() {
        const container = document.getElementById('animationContainer');
        const d = langData[currentLang];
        if (!container) return;
        
        container.innerHTML = '';
        container.style.minHeight = '150px';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        
        const svgHtml = `
            <svg width="340" height="130" viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto;">
                <rect x="50" y="30" width="90" height="8" rx="3" fill="#8B5A2B"/>
                <rect x="68" y="38" width="6" height="35" fill="#6B3A1B"/>
                <rect x="116" y="38" width="6" height="35" fill="#6B3A1B"/>
                <g>
                    <animateTransform attributeName="transform" type="translate" from="150 0" to="0 0" dur="0.8s" begin="0s" fill="freeze" calcMode="spline" keySplines="0.25 1 0.5 1"/>
                    <rect x="155" y="50" width="40" height="5" rx="2" fill="#A0522D"/>
                    <rect x="163" y="55" width="4" height="22" fill="#8B4513"/>
                    <rect x="183" y="55" width="4" height="22" fill="#8B4513"/>
                    <rect x="158" y="55" width="4" height="28" fill="#6B3A1B"/>
                    <rect x="188" y="55" width="4" height="28" fill="#6B3A1B"/>
                </g>
                <g opacity="0">
                    <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.9s" fill="freeze"/>
                    <circle cx="165" cy="108" r="12" fill="#2e7d32"/>
                    <path d="M160 108 L163 111 L170 103" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
                    <text x="165" y="126" text-anchor="middle" font-size="11" font-weight="bold" fill="#2e7d32">${d.successMsg}</text>
                </g>
            </svg>
        `;
        
        container.innerHTML = svgHtml;
        
        setTimeout(function() {
            if (container.innerHTML !== '') {
                container.style.transition = 'opacity 0.3s';
                container.style.opacity = '0';
                setTimeout(function() {
                    container.innerHTML = '';
                    container.style.opacity = '1';
                    container.style.minHeight = '100px';
                }, 300);
            }
        }, 4500);
    }

    document.getElementById('tableBookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('guestName').value.trim();
        const room = document.getElementById('roomNumber').value.trim();
        const date = document.getElementById('bookingDate').value;
        const time = document.getElementById('bookingTime').value;
        const d = langData[currentLang];
        
        if (!name || !room || !date || !time || !selectedTableId) {
            alert(d.fillError);
            return;
        }
        
        const selectedGroup = document.querySelector('.table-group[data-table-id="' + selectedTableId + '"]');
        if (selectedGroup && selectedGroup.getAttribute('data-booked') === 'true') {
            alert(d.alreadyBooked);
            return;
        }
        
        if (selectedGroup) {
            selectedGroup.setAttribute('data-booked', 'true');
            showSvgAnimation();
        }
        
        selectedTableId = null;
        updateTableColors();
        document.getElementById('selectedTableDisplay').value = '';
        document.getElementById('guestName').value = '';
        document.getElementById('roomNumber').value = '';
        document.getElementById('bookingDate').value = '';
        document.getElementById('bookingTime').value = '';
    });

    document.getElementById('sendBtn').addEventListener('click', function() {
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const d = langData[currentLang];
        if (!name || !email) {
            alert(d.fillError);
            return;
        }
        alert(d.successMsg.replace('Столик', 'Запрос') + ' ' + name);
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
    });

    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    updateLanguage('ru');
})();