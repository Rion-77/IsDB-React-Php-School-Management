<?php
function getClasses()
{
    echo json_encode(Classroom::getAll());
}

function getClassById($id) {
   echo json_encode(Classroom::getById($id));
}

function addNewClass($data) {
    $new_class = new Classroom(null,$data['class_name']);
    echo json_encode($new_class->create());
}

function updateClass($data){
    $new_class = new Classroom($data['id'],$data['class_name']);
    echo json_encode($new_class->update());
}

function deleteClass($_id){
    echo json_encode(Classroom::delete($_id));
}