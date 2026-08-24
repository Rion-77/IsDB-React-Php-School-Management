<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Handle browser preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Database connection
require_once "../config/db.php";
// Image upload helper
require_once "../helpers/img-upload-helper.php";
// All models 
foreach (glob("*-api.php") as $apifile) {
    require_once $apifile;
}
// All API's
foreach (glob("../model/*.class.php") as $modalfile) {
    require_once $modalfile;
}

// Endpoints
if ($_GET['endpoint']) {
    $endpoint = $_GET['endpoint'];
    $method = $_SERVER['REQUEST_METHOD'];

    // Student API's
    if ($endpoint == "students" && $method == "GET") {
        getStudents();
    } elseif ($endpoint == "student-create" && $method == "POST") {
        // $data = json_decode(file_get_contents("php://input"), true);
        // print_r($data);
        // addNew($data);
        print_r($_POST);
        print_r($_FILES);
        addNewStudent($_POST, $_FILES);
    } elseif ($endpoint == "user-update" && $method == "PUT") {
    } elseif ($endpoint == "user-delete" && $method == "DELETE") {
    } elseif ($endpoint == "student-details" && $method == "GET") {
        $id = $_GET["id"];
        getStudentById($id);
    } elseif ($endpoint == "teacher-create" && $method == "POST") {
        // $data = json_decode(file_get_contents("php://input"), true);
        print_r($_POST);
        print_r($_FILES);
        // addNew($data);
    }
    // Class
    elseif ($endpoint == "classes" && $method == "GET") {
        getClasses();
    } elseif ($endpoint == "class" && $method == "GET") {
        getClassById($_GET['id']);
    } elseif ($endpoint == "class-create" && $method == "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        addNewClass($data);
    } elseif ($endpoint == "class-update" && $method == "PUT") {
        $data = json_decode(file_get_contents("php://input"), true);
        updateClass($data);
    } elseif ($endpoint == "class-delete" && $method == "DELETE") {
        $id = $_GET['id'];
        deleteClass($id);
    }
    // Fee Type
    elseif ($endpoint == "fee-types" && $method == "GET") {
        getFeeType();
    } elseif ($endpoint == "fee-type" && $method == "GET") {
        getFeeTypeById($_GET['id']);
    } elseif ($endpoint == "fee-type-create" && $method == "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        addNewFeeType($data);
    } elseif ($endpoint == "fee-type-update" && $method == "PUT") {
        $data = json_decode(file_get_contents("php://input"), true);
        updateFeeType($data);
    } elseif ($endpoint == "fee-type-delete" && $method == "DELETE") {
        $id = $_GET['id'];
        deleteFeeType($id);
    } else {
        http_response_code(404);
    }
} else {
    http_response_code(404);
    echo "<h2>No endpoint found!</h2>";
}
