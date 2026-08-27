<?php
function getFee()
{
    echo json_encode(Fee::getAll());
}

function getFeeById($id) {
   echo json_encode(Fee::getById($id));
}

function addNewFee($data) {
    $new_fee = new Fee(null, $data['student_id'], $data['fee_type_id'], $data['fee_collected_at']);
    echo json_encode($new_fee->create());
}

function updateFee($data){
    $new_fee = new Fee($data['id'], $data['student_id'], $data['fee_type_id'], $data['fee_collected_at']);
    echo json_encode($new_fee->update());
}

function deleteFee($_id){
    echo json_encode(Fee::delete($_id));
}