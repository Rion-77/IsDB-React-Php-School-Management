<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Handle browser preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}


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
    } elseif ($endpoint == "student-create" && $method == "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        // print_r($data);
        addNew($data);
    } elseif ($endpoint == "user-update" && $method == "PUT") {
    } elseif ($endpoint == "user-delete" && $method == "DELETE") {
    } elseif ($endpoint == "student-details" && $method == "GET") {
        $id = $_GET["id"];
        getStudentById($id);
    } elseif ($endpoint == "teacher-create" && $method == "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        print_r($data);
        // addNew($data);
    } else {
        http_response_code(404);
    }
} else {
    http_response_code(404);
    echo "<h2>No endpoint found!</h2>";
}
