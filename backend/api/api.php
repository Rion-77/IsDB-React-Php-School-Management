<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");


require_once "../config/db.php";


foreach (glob("*-api.php") as $apifile) {
    require_once $apifile;
}

require_once "../model/student.class.php";

if ($_GET['endpoint']) {
    $endpoint = $_GET['endpoint'];
    $method = $_SERVER['REQUEST_METHOD'];

    if ($endpoint == "students" && $method == "GET") {
        getStudents();
    } elseif ($endpoint == "user-create" && $method == "POST") {
    } elseif ($endpoint == "user-update" && $method == "PUT") {
    } elseif ($endpoint == "user-delete" && $method == "DELETE") {
    } elseif ($endpoint == "user-details" && $method == "GET") {
    } else {
        http_response_code(404);
    }
} else {
    http_response_code(404);
    echo "<h2>No endpoint found!</h2>";
}
