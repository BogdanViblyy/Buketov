const categories = ["Технологии", "Спортивные новости", "Экономика"];
let newsList = [];

const categorySelect = document.getElementById('category');
const countInput = document.getElementById('count');
const newsListEl = document.getElementById('newsList');

document.getElementById('generate').addEventListener('click', () => {
    const category = categorySelect.value;
    const count = parseInt(countInput.value);

    for (let i = 0; i < count; i++) {
        newsList.push(generateRandomNews(category));
    }

    renderNews();
});

document.getElementById('addCustom').addEventListener('click', () => {
    const title = prompt("Введите текст вашей новости:");
    if (title) {
        const category = categorySelect.value;
        newsList.push({ title, category, date: getRandomDate() });
        renderNews();
    }
});

document.getElementById('reset').addEventListener('click', () => {
    newsList = [];
    renderNews();
});

function generateRandomNews(category) {
    const sampleTitles = [
        "Прорыв в области ИИ!",
        "Неожиданная победа команды!",
        "Новые экономические прогнозы.",
        "Технологическая выставка открылась сегодня.",
        "Рекорд в марафоне!",
        "Акции резко выросли."
    ];
    const title = sampleTitles[Math.floor(Math.random() * sampleTitles.length)];
    const date = getRandomDate();
    return { title, category, date };
}

function getRandomDate() {
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - Math.floor(Math.random() * 7));
    return pastDate.toISOString().split('T')[0];
}

function renderNews() {
    newsListEl.innerHTML = "";
    newsList.forEach(news => {
        const li = document.createElement('li');
        li.className = "bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600";
        li.innerHTML = `<strong>[${news.category}]</strong> (${news.date}): ${news.title}`;
        newsListEl.appendChild(li);
    });
}
