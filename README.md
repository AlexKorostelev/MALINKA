# Malinka plus
[Видеопрезентация проекта](https://drive.google.com/file/d/17i6wATNtZxJhSuSxMl9opjq7oUUQr5Cs/view)
<br/>
<br/>
**Malinka plus** - это система управления умным домом. С помощью нее можно удаленно включать необходимые приборы, например свет, музыку или кондиционер,
а также следить за их состоянием. Система легко интегрируется в любой дом или квартиру.
### Стек технологий используемых в проекте
* React
* Redux
* Material Ui
* Node.js
* Express
* Mongo DB
* Web Sockets
* Atlas
* Sass
* Telegraf
### Запуск проекта
1. открыть в терминале каталог server (cd server/) и набрать команду npm i.
2. переименовать .env.example в .env и дописать отсутствующие поля:
* PORT= порт на котором будет запущен сервер
* MONGOOSE_DB= ссылка для подключения к базе данных Atlas
3. набрать команду node seeder.js для наполнения базы данных
4. набрать команду npm start
5. открыть новую копию терминала, перейти в папку client (cd client/) и набрать команду npm i
6. набрать команду npm start

#### Главная страница:
![Main page](https://github.com/AlexKorostelev/MALINKA/blob/master/client/src/assets/screenshots/screen1.png "Главная страница")
#### Краткое описание проекта:
![About](https://github.com/AlexKorostelev/MALINKA/blob/master/client/src/assets/screenshots/screen2.png "Описание")
#### Авторизация пользователя:
![Authorization](https://github.com/AlexKorostelev/MALINKA/blob/master/client/src/assets/screenshots/screen3.png "Авторизация")
#### Пользователь не сможет перейти на страницу личного кабинета если не авторизовался в системе:
![Redirect](https://github.com/AlexKorostelev/MALINKA/blob/master/client/src/assets/screenshots/screen4.png "Редирект")
#### 404:
![404](https://github.com/AlexKorostelev/MALINKA/blob/master/client/src/assets/screenshots/screen5.png "404")
#### Панель выбора домов. Доступна после авторизации, повзоляет юзеру выбрать локацию которой он хочет управлять:
![Homes](https://github.com/AlexKorostelev/MALINKA/blob/master/client/src/assets/screenshots/screen6.png "Панель выбора домов")
#### Панель управления домом и мониторинг состояния приборов в нем. Правая часть, с состоянием приборов, реализована на WebSockets. В нижней части - управление и проверка состояния с голоса:
![Control panel](https://github.com/AlexKorostelev/MALINKA/blob/master/client/src/assets/screenshots/screen7.png "Панель управления")


### Наша команда
* [Алекандр Коростелев](https://github.com/AlexKorostelev)
* [Пулокас Дайнюс](https://github.com/PulokasDD)
* [Даниил Мишарев](https://github.com/DaniilMisharev)
* [Станислав Гришин](https://github.com/stangrishin)
* [Алексей Максимушкин](https://github.com/Aleksei-web)
### Планы на будущее
