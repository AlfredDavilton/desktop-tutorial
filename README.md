# Welcome to GitHub Desktop!

This is your README. READMEs are where you can communicate what your project is and how to use it.

Write your name on line 6, save it, and then head back to GitHub Desktop.
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Форма ввода данных</title>
</head>
<body>
    <form action="process.php" method="post">
        <p>Ф.И.О.: <input type="text" name="fullname"></p>
        <p>Адрес: <input type="text" name="address"></p>
        <p>Email: <input type="email" name="email"></p>
        <p>Пароль: <input type="password" name="password"></p>
        <input type="submit" value="Отправить">
    </form>
</body>
</html>