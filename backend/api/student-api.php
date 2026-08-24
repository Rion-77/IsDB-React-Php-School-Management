<?php
function getStudents()
{
    echo json_encode(Student::getAll());
}
function getStudentById($_id)
{
    echo json_encode(Student::getById($_id));
}


/* 
function createProduct($data, $files){
    $img = null;
    if(isset($files['image'])){
        $result = imgUpload($files['image'], "../uploads/products");
        if (isset($result['success'])) {
            $img = $result['success'];
        }else{
            http_response_code(400);
            echo $result['error'];
            exit;
        }
    }
    $product = new Product(null,$data['name'],$data['category_id'],$data['brand_id'],$data['desc'],$data['price'],$data['qty'],$data['restock'],$img, $data['active']);
    echo json_encode($product->create());
}

*/

function addNewStudent($_data, $files) // $_data->role_id // $_data["role_id"]
{
    $img = null;
    if (isset($files['photo'])) {
        $result = imgUpload($files['photo'], "../uploads/students");
        if (isset($result['success'])) {
            $img = $result['success'];;
        } else {
            http_response_code(400);
            echo $result['error'];
            exit;
        }
    }
    // echo json_encode($_data);
    $student = new Student(null, $_data["name"], $_data["father_name"], $_data["mother_name"], $_data["address"], $_data["phone"], $_data["class_id"], $_data["section_id"], $_data["group_id"], $img);
    echo json_encode($student->create());
}
/*
function updateUser($_data){
    $user = new User($_data["id"],$_data["name"],$_data["email"],$_data["role_id"]);
    echo json_encode($user->update());
}
function deleteUser($_id){
    echo json_encode(User::delete($_id));
} */