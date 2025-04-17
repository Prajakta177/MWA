<?php include("connection.php"); ?>

<?php
if (isset($_POST['save'])) {
    $ID         = $_POST['studid'];
    $name       = $_POST['studname'];
    $gender     = $_POST['gender'];
    $email      = $_POST['email'];
    $department = $_POST['department'];
    $address    = $_POST['address'];

    $query = "INSERT INTO studata (stud_id, stud_name, Gender, stud_email, stud_department, stud_address)
              VALUES ('$ID','$name','$gender','$email','$department','$address')";

    $data = mysqli_query($conn, $query);

    if ($data) {
        echo "Data inserted into database";
    } else {
        echo "Failed to save data";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Entry Form</title>
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
</head>
<body>
    <div class="center">
        <form action="#" method="POST">
            <h1>Student Data Entry</h1>
            <div class="form">
                <input type="text" name="studid" class="textfield" placeholder="Student ID" required>
                <input type="text" name="studname" class="textfield" placeholder="Student Name" required>

                <select class="textfield" name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <input type="email" name="email" class="textfield" placeholder="Email Address" required>

                <select class="textfield" name="department" required>
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="Accounts">Accounts</option>
                    <option value="Sales">Sales</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Marketing">Marketing</option>
                </select>

                <textarea placeholder="Address" name="address" required></textarea>

                <input type="submit" name="save" value="Save" class="btn btn-grey">
                <input type="reset" value="Clear" class="btn btn-grey">
            </div>
        </form>

        <form action="view_records.php" method="GET">
            <input type="submit" value="View Records" class="btn btn-grey">
        </form>
    </div>
</body>
</html>
