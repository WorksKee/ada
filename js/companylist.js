
        // Exhibitors data
        const exhibitors = [
            {id: 1, name: "Abbvie", category: "pharma"},
            {id: 2, name: "Gulf Drug Co.", category: "pharma"},
            {id: 3, name: "Pharma World LLC Drus Store", category: "pharma"},
            {id: 4, name: "HealthFirst/Planet", category: "healthcare"},
            {id: 5, name: "Pierre Fabre", category: "pharma"},
            {id: 6, name: "Ashro Health", category: "healthcare"},
            {id: 7, name: "Solaplus Biotech Wenzhou", category: "pharma"},
            {id: 8, name: "Color Tone", category: "healthcare"},
            {id: 9, name: "New Country Drug Store", category: "pharma"},
            {id: 10, name: "Pharma Link Drug store", category: "pharma"},
            {id: 11, name: "Pharma Plus Drug Store", category: "pharma"},
            {id: 12, name: "Life Span Health", category: "healthcare"},
            {id: 13, name: "VPM/Seba Med", category: "healthcare"},
            {id: 14, name: "AlHayaa Drug Store", category: "pharma"},
            {id: 15, name: "Pfizer", category: "pharma"},
            {id: 16, name: "Provac Lab", category: "pharma"},
            {id: 17, name: "Qutek London", category: "technology"},
            {id: 18, name: "Hali Health/Berringa Honey/Kuan Industrial Co. LTD", category: "healthcare"},
            {id: 19, name: "Bayer", category: "pharma"},
            {id: 20, name: "Al Inmaa Drug Store", category: "pharma"},
            {id: 21, name: "XK Group", category: "healthcare"},
            {id: 22, name: "Scorpios Dental", category: "healthcare"},
            {id: 23, name: "Amgen", category: "pharma"},
            {id: 24, name: "Leader Healthcare Group", category: "healthcare"},
            {id: 25, name: "MedTech - HESSA", category: "technology"},
            {id: 26, name: "Compunding", category: "pharma"},
            {id: 27, name: "Beta Star", category: "pharma"},
            {id: 28, name: "Aspirmed", category: "healthcare"},
            {id: 29, name: "Sajaa Pharma", category: "pharma"},
            {id: 30, name: "Tabuk Pharmaceuticals", category: "pharma"},
            {id: 31, name: "Bin Shabib Drug Store", category: "pharma"},
            {id: 32, name: "AstraZeneca", category: "pharma"},
            {id: 33, name: "Novo Nordisk", category: "pharma"},
            {id: 34, name: "Dar Al Dawaa Pharmaceutical", category: "pharma"},
            {id: 35, name: "Pioneer Pharma", category: "pharma"},
            {id: 36, name: "Multaqa Drug Store", category: "pharma"},
            {id: 37, name: "Ministry of Health/EDE", category: "government"},
            {id: 38, name: "Emirates Health Service (EHS)", category: "government"},
            {id: 39, name: "Oman MOH", category: "government"},
            {id: 40, name: "Saudi Pharmacy Association (SPA)", category: "government"},
            {id: 41, name: "Sharjah Municipality", category: "government"},
            {id: 42, name: "Oman Pharmacy Association", category: "government"},
            {id: 43, name: "University Of Sharjah", category: "academic"},
            {id: 44, name: "Lootah Medical College/Dubai College", category: "academic"},
            {id: 45, name: "University Of Science & Technology of Fujairah", category: "academic"},
            {id: 46, name: "Ajman University", category: "academic"},
            {id: 47, name: "Higher College of Technology", category: "academic"},
            {id: 48, name: "RAK University", category: "academic"},
            {id: 49, name: "Pharmacy Association Jordan", category: "government"},
            {id: 50, name: "Pharmacy Association Bahrain", category: "government"},
            {id: 51, name: "Pharma Solution Drug Store", category: "pharma"},
            {id: 52, name: "ALLM Shaping HealthCare", category: "healthcare"},
            {id: 53, name: "Ziva Healthcare", category: "healthcare"},
            {id: 54, name: "Reliance Health", category: "healthcare"},
            {id: 55, name: "Lam Pharma", category: "pharma"},
            {id: 56, name: "AlPhamed Group", category: "pharma"},
            {id: 57, name: "Makkah Group of Pharmacy & Store", category: "pharma"},
            {id: 58, name: "Oasis Diagnostics", category: "healthcare"},
            {id: 59, name: "BlueShift for Clean room Technology", category: "technology"},
            {id: 60, name: "Arabian Ethicals", category: "pharma"},
            {id: 61, name: "Al Sadanah Jordan", category: "healthcare"},
            {id: 62, name: "UniMed Drug Store", category: "pharma"},
            {id: 63, name: "Fabtech Technologies", category: "technology"},
            {id: 64, name: "Quadri Pharma", category: "pharma"},
            {id: 65, name: "TJL Pharma", category: "pharma"},
            {id: 66, name: "Radex Regulatory Affairs", category: "healthcare"},
            {id: 67, name: "Saudi Amarox Pharmaceuticals", category: "pharma"},
            {id: 68, name: "RFI Hygiene General trading LLC", category: "healthcare"},
            {id: 69, name: "Laboratory Coalvi", category: "healthcare"},
            {id: 70, name: "Brit Pharma UK", category: "pharma"},
            {id: 71, name: "HAVX Consultancy", category: "healthcare"},
            {id: 72, name: "Vidamix Pharma", category: "pharma"},
            {id: 73, name: "WestCoast Pharma Factory", category: "pharma"},
            {id: 74, name: "Iraqi Pharma Industries", category: "pharma"},
            {id: 75, name: "Drug International Pharma Limited", category: "pharma"},
            {id: 76, name: "Jamjoom Pharma", category: "pharma"},
            {id: 77, name: "KSP Pharma", category: "pharma"},
            {id: 78, name: "New Bridge Drug Store", category: "pharma"},
            {id: 79, name: "Hikma Pharmaceuticals", category: "pharma"},
            {id: 80, name: "PHARPRO", category: "pharma"},
            {id: 81, name: "The Say healthcare", category: "healthcare"},
            {id: 82, name: "Quality Compliance KSA", category: "healthcare"},
            {id: 83, name: "Vieco Pharmaceutical", category: "pharma"},
            {id: 84, name: "DuPharma Drug Store", category: "pharma"},
            {id: 85, name: "Taflon Science & Technology", category: "technology"},
            {id: 86, name: "CapLap International FZE", category: "technology"},
            {id: 87, name: "Maria Trading", category: "healthcare"},
            {id: 88, name: "Inter Core LLC", category: "technology"},
            {id: 89, name: "Medica Lupin", category: "pharma"},
            {id: 90, name: "Wakeb Portal Co. L.L.C", category: "technology"},
            {id: 91, name: "Derma & Health", category: "healthcare"},
            {id: 92, name: "Biocare Pharmaceutical Factory", category: "pharma"},
            {id: 93, name: "Gulf Science", category: "technology"},
            {id: 94, name: "Ananta Women Wellness & Fertility Centre", category: "healthcare"},
            {id: 95, name: "Middle East Testing Services", category: "technology"},
            {id: 96, name: "Oman Pharma - Pharmaceutical", category: "pharma"},
            {id: 97, name: "Eli Lilly Pharma", category: "pharma"},
            {id: 98, name: "Marcyrl Pharmaceutical Industries", category: "pharma"},
            {id: 99, name: "Virtus", category: "healthcare"},
            {id: 100, name: "Madi International", category: "healthcare"},
            {id: 101, name: "ProPharma", category: "pharma"},
            {id: 102, name: "Fusion Healthcare", category: "healthcare"},
            {id: 103, name: "SPIMACO", category: "pharma"},
            {id: 105, name: "Jammi Pharmaceuticals PVT LTD", category: "pharma"}
        ];

        // DOM elements
        const container = document.getElementById('exhibitors-container');
        const searchInput = document.getElementById('search');
        const totalCount = document.getElementById('total-count');
        const visibleCount = document.getElementById('visible-count');
        const categoryBtns = document.querySelectorAll('.category-btn');

        // Initialize
        totalCount.textContent = exhibitors.length;
        visibleCount.textContent = exhibitors.length;
        renderExhibitors(exhibitors);

        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterExhibitors(searchTerm);
        });

        // Category filter
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                const searchTerm = searchInput.value.toLowerCase();
                
                if (category === 'all') {
                    filterExhibitors(searchTerm);
                } else {
                    filterExhibitors(searchTerm, category);
                }
            });
        });

        // Filter and render exhibitors
        function filterExhibitors(searchTerm = '', category = 'all') {
            const filtered = exhibitors.filter(exhibitor => {
                const matchesSearch = exhibitor.name.toLowerCase().includes(searchTerm);
                const matchesCategory = category === 'all' || exhibitor.category === category;
                return matchesSearch && matchesCategory;
            });
            
            renderExhibitors(filtered);
            visibleCount.textContent = filtered.length;
        }

        // Render exhibitors
        function renderExhibitors(exhibitorsToRender) {
            container.innerHTML = '';
            
            if (exhibitorsToRender.length === 0) {
                container.innerHTML = '<div class="no-results">No exhibitors found matching your criteria</div>';
                return;
            }
            
            exhibitorsToRender.forEach((exhibitor, index) => {
                const card = document.createElement('div');
                card.className = `exhibitor-card animate__animated animate__fadeInUp`;
                card.style.animationDelay = `${index * 0.05}s`;
                
               /* card.innerHTML = `
                    <div class="exhibitor-number">${exhibitor.id}</div>
                    <h3 class="exhibitor-name">${exhibitor.name}</h3>
                    <div class="category-tag">${getCategoryLabel(exhibitor.category)}</div>
                `;*/
                card.innerHTML = `
                    
                    <h3 class="exhibitor-name">${exhibitor.name}</h3>
                    <div class="category-tag">${getCategoryLabel(exhibitor.category)}</div>
                `;
                
                container.appendChild(card);
            });
        }

        // Helper function to get category label
        function getCategoryLabel(category) {
            const labels = {
                'pharma': 'Pharmaceutical',
                'healthcare': 'Healthcare Services',
                'academic': 'Academic Institution',
                'government': 'Government Agency',
                'technology': 'Technology Provider'
            };
            return labels[category] || category;
        }
    