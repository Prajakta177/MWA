<?php include("connection.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Records</title>
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
</head>
<body>
    <div class="center">
        <h1>Student Records</h1>
        <table border="1" cellpadding="10">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Department</th>
                <th>Address</th>
            </tr>

            <?php
            $query = "SELECT * FROM studata";
            $data = mysqli_query($conn, $query);

            if (mysqli_num_rows($data) > 0) {
                while ($row = mysqli_fetch_assoc($data)) {
                    echo "<tr>
                            <td>{$row['stud_id']}</td>
                            <td>{$row['stud_name']}</td>
                            <td>{$row['Gender']}</td>
                            <td>{$row['stud_email']}</td>
                            <td>{$row['stud_department']}</td>
                            <td>{$row['stud_address']}</td>
                          </tr>";
                }
            } else {
                echo "<tr><td colspan='6'>No records found</td></tr>";
            }
            ?>
        </table>
    </div>
</body>
</html>
