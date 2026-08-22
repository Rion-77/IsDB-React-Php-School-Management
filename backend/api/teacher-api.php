<?php
function getTeachers()
{
    echo json_encode(Teacher::getAll());
}
 function getTeacherById($_id)
{
    echo json_encode(Teacher::getById($_id));
}


function addNewTeacher($_data) // $_data->role_id // $_data["role_id"]
{
    // echo json_encode($_data);
    $teacher = new Teacher(null,$_data["name"],$_data["designation"],$_data["address"],$_data["phone"],$_data["qualification"],$_data["subject_id"], null);
    echo json_encode($teacher->create());
}
/*
function updateUser($_data){
    $user = new User($_data["id"],$_data["name"],$_data["email"],$_data["role_id"]);
    echo json_encode($user->update());
}
function deleteUser($_id){
    echo json_encode(User::delete($_id));
} */