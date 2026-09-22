<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle browser preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Database connection
require_once "../config/db.php";

// Image upload helper
// require_once "../helpers/img-upload-helper.php";

// All models 
foreach (glob("*-api.php") as $apifile) {
    require_once $apifile;
}

// All API's
foreach (glob("../model/*.class.php") as $modalfile) {
    require_once $modalfile;
}

// All helpers 
foreach (glob("../helpers/*-helper.php") as $helper) {
    require_once $helper;
}

if($_GET['endpoint']) {
$endpoint = $_GET['endpoint'];
$method = $_SERVER['REQUEST_METHOD'];

if ($endpoint == "login" && $method == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    // print_r($data);
    checkLogin($data);
} else {
    // Middleware: check the token before anything else
    $header = getallheaders();
    if (!isset($header["Authorization"])) {
        http_response_code(401);
        echo "Unauthorized. Please login again.";
        exit;
    }
    $jwt = explode(" ", $header["Authorization"]);
    $valid = validateJWT($jwt[1]);
    if (!$valid) {
        http_response_code(401);
        echo "Unauthorized. Please login again.";
        exit;
    }

    /* ****** Endpoints ***** */
    // User API's
    if ($endpoint == "users" && $method == "GET") {
        getUsers();
    } elseif ($endpoint == "user-create" && $method == "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        addNewUser($data);
    } elseif ($endpoint == "user-update" && $method == "PUT") {
    } elseif ($endpoint == "user-delete" && $method == "DELETE") {
    } 

    // Student API's
    elseif ($endpoint == "students" && $method == "GET") {
        getStudents();
    } elseif ($endpoint == "student-create" && $method == "POST") {
        // $data = json_decode(file_get_contents("php://input"), true);
        // print_r($data);
        // addNew($data);
        print_r($_POST);
        print_r($_FILES);
        addNewStudent($_POST, $_FILES);
    } elseif ($endpoint == "student-details" && $method == "GET") {
        $id = $_GET["id"];
        getStudentById($id);
    }

    // Teacher API's
    elseif ($endpoint == "teacher-create" && $method == "POST") {
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
    }
    
    // Fee
    elseif ($endpoint == "fees" && $method == "GET") {
        getFee();
    } elseif ($endpoint == "fee" && $method == "GET") {
        getFeeById($_GET['id']);
    } elseif ($endpoint == "fee-create" && $method == "POST") {
        $data = json_decode(file_get_contents("php://input"), true);
        addNewFee($data);
    } else {
        http_response_code(404);
        echo "<h2>No endpoint found!</h2>";
    }
}

}