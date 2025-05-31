const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function showLoader() {
    loader.classList.add('loader_active');
}

function hideLoader() {
    loader.classList.remove('loader_active');
}

async function loadCurrencyRates() {
    showLoader();

    try {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        itemsContainer.innerHTML = '';
        const valutes = data.response.Valute;

        for (const key in valutes) {
            if (valutes.hasOwnProperty(key)) {
                const valute = valutes[key];

                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';

                const codeDiv = document.createElement('div');
                codeDiv.className = 'item__code';
                codeDiv.textContent = valute.CharCode;

                const valueDiv = document.createElement('div');
                valueDiv.className = 'item__value';
                valueDiv.textContent = valute.Value;

                const currencyDiv = document.createElement('div');
                currencyDiv.className = 'item__currency';
                currencyDiv.textContent = 'руб.'; 

                itemDiv.appendChild(codeDiv);
                itemDiv.appendChild(valueDiv);
                itemDiv.appendChild(currencyDiv);

                itemsContainer.appendChild(itemDiv);
            }
        }
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    } finally {
        hideLoader();
    }
}

loadCurrencyRates();
