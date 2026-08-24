<?php
function getFeeType()
{
    echo json_encode(FeeType::getAll());
}

function getFeeTypeById($id) {
   echo json_encode(FeeType::getById($id));
}

function addNewFeeType($data) {
    $new_fee_type = new FeeType(null, $data['fee_type_name'], $data['fee_amount']);
    echo json_encode($new_fee_type->create());
}

function updateFeeType($data){
    $new_fee_type = new FeeType($data['id'], $data['fee_type_name'], $data['fee_amount']);
    echo json_encode($new_fee_type->update());
}

function deleteFeeType($_id){
    echo json_encode(FeeType::delete($_id));
}