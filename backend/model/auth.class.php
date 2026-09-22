<?php
class Authentication
{
    public static function login($email, $password)
    {
        global $db;
        $sql = "select * from users where email = '$email'";
        $result = $db->query($sql);
        if ($result) {
            $user = $result->fetch_assoc();
            if ($user) {
                if (password_verify($password, $user['password'])) {
                    http_response_code(200);
                    unset($user['password']); // Remove password from the user data before returning
                    return [
                        "token" => generateJWT($user, 3600),
                        "user" => $user
                    ];
                } else {
                    http_response_code(401);
                    return "Invalid password.";
                }
            } else {
                http_response_code(401);
                return "User not found.";
            }
        } else {
            return $db->error;
        }
    }
}
