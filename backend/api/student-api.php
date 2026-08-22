<?php
function getStudents()
{
    echo json_encode(Student::getAll());
}
 function getStudentById($_id)
{
    echo json_encode(Student::getById($_id));
}


function addNew($_data) // $_data->role_id // $_data["role_id"]
{
    // echo json_encode($_data);
    $student = new Student(null,$_data["name"],$_data["father_name"],$_data["mother_name"],$_data["address"],$_data["phone"],$_data["class_id"],$_data["section_id"],$_data["group_id"], null);
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