<?php
function checkLogin($data) {
    echo json_encode(Authentication::login($data['email'], $data['password']));
}
