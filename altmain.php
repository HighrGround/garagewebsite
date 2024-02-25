<?php
include_once 'backend/dbh.inc.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<header>
    <h1>Gowanbank Garage</h1>
</header>
<nav>
    <ul>
        <li><a href="mainpage.html">Home</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
<main>
    <div id="inventory">
        <h2>Our Inventory</h2>
        <ul id="car_list">
            <?php
            $sql = "SELECT * FROM vans1";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);

            if ($resultCheck > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                    echo '<li>';
                    echo 'Make: ' . $row['Make'] . '<br>';
                    echo 'Model: ' . $row['Model'] . '<br>';
                    echo 'Milage: ' . $row['Milage'] . '<br>';
                    echo 'Year: ' . $row['Year'] . '<br>';
                    echo '<img src="' . $row['Photo_Path'] . '" alt="Car Image"><br>';
                    echo '</li>';
                }
            }
            ?>
        </ul>
    </div>
</main>
<footer>
    <div id="footer">
        <p>Located at: Kirk St, Dundee DD2 3EN</p>
        <p>&copy; Gowanbank Garage</p>
    </div>
</footer>
<script src="main.js"></script>
</body>
</html>
