Для запуска в корне выполните:

    -В терминале:

1. ps aux | grep mongod - для получения всех запущенных процессов о БД
2. kill <PID> - для всех активных процессов БД
3. mongod --dbpath /data/db - для запуска БД
4. node src/app.js - для запуска проекта сервера и фронтенд-части

   -В браузере:

5. Подключиться к http://localhost:3000/
