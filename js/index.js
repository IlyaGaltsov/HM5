function showUserInfo() {
    const birthYear = prompt('Введіть свій рік народження:');
    if (birthYear === null) {
        alert('Шкода, що Ви не захотіли ввести свій рік народження.');
    return;
    }

    const city = prompt('В якому місті ви живете?');
    if (city === null) {
        alert('Шкода, що Ви не захотіли ввести своє місто.');
    return;
    }

    const favoriteSport = prompt('Ваш улюблений вид спорту:');
    if (favoriteSport === null) {
        alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
    return;
    }

    const currentYear = 2023;
    const age = currentYear - birthYear;

    let message = `Ваш вік: ${age}.\n`;

    if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
    const capitals = {
        'Київ': 'Україна',
        'Вашингтон': 'США',
        'Лондон': 'Велика Британія'
    };
        message += `Ти живеш у столиці ${capitals[city]}.`;
    } else {
        message += `Ти живеш у місті ${city}.`;
    }

    const sportsChampions = {
        'футбол': 'Ліонель Мессі',
        'теніс': 'Серена Вільямс',
        'баскетбол': 'Леброн Джеймс'
    };

    if (sportsChampions[favoriteSport]) {
        message += `\nКруто! Хочеш стати ${sportsChampions[favoriteSport]}?`;
    } else {
        message += `\nТвiй улюбленний вид спорту ${favoriteSport}`
    }

    alert(message);
}
showUserInfo()