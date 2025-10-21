// Константа - період обертання Меркурія в днях
const T_MERCURY = 88;

// Функція для розрахунку періодів обертання планет
function calculate() {
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
    
    planets.forEach(planet => {
        const marker = parseFloat(document.getElementById(`${planet}-marker`).value);
        
        if (!isNaN(marker)) {
            // Розрахунок періоду в днях за формулою: T = T_Меркурія × Маркер
            const periodDays = Math.round(T_MERCURY * marker);
            
            // Розрахунок періоду в роках
            const periodYears = (periodDays / 365).toFixed(2);
            
            // Оновлення значень у таблиці
            document.getElementById(`${planet}-days`).textContent = periodDays;
            document.getElementById(`${planet}-years`).textContent = periodYears;
        }
    });
}

// Функція для скидання значень до початкових
function resetValues() {
    const defaultValues = {
        'mercury': 1,
        'venus': 2.55,
        'earth': 4.15,
        'mars': 7.81,
        'jupiter': 49.32,
        'saturn': 122.53,
        'uranus': 349.13,
        'neptune': 685.47
    };

    Object.keys(defaultValues).forEach(planet => {
        document.getElementById(`${planet}-marker`).value = defaultValues[planet];
    });
    
    // Перерахувати після скидання
    calculate();
}

// Автоматичний розрахунок при завантаженні сторінки
window.onload = calculate;