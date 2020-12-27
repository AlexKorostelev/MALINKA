# Malinka plus
[Видеопрезентация проекта](https://drive.google.com/drive/u/0/folders/14EbGRslX7ptScm-J_e16HxDTJIHvL5UK)
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
