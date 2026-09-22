<?php
class User{
    public $id;
    public $name;
    public $phone;
    public $email;
    public $password;
    public $role_id;

     /*
id
name
phone
email
password
role_id
    */

    public function __construct($id, $name, $phone, $email, $password, $role_id){
        $this->id = $id;
        $this->name = $name;
        $this->phone = $phone;
        $this->email = $email;
        $this->password = $password;
        $this->role_id = $role_id;
    }

    public static function getAll(){
        global $db;
        $query = "SELECT name,phone,email,role_id FROM users";
        $result = $db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

     public static function getById($id){
        global $db;
        $query = "SELECT * FROM users WHERE id = $id";
        $result = $db->query($query);
        return $result->fetch_assoc();
    }

   
    public function create(){
        global $db;
        $query = "INSERT INTO `users` (`name`, `phone`, `email`, `password`, `role_id`) VALUES ('$this->name', '$this->phone', '$this->email', '$this->password', $this->role_id)";
        $result = $db->query($query);
        if($result){
            return $db->insert_id;
        }else{
            return "Error: " . $db->error;
        }
    }

     /*
    public function update(){
        global $db;
        $query = "update users set name = '$this->name', email = '$this->email', role_id = $this->role_id where id = $this->id";
        $result = $db->query($query);
        if($result){
            return "Updated Successfully!";
        }else{
            return "Error: " . $db->error;
        }
    }

    public static function delete($_id){
        global $db;
        $found = User::getById($_id);
        if($found){
            $query = "delete from users where id = $_id";
            $result = $db->query($query);
            if($result){
                return "Deleted Successfully!";
            }else{
                return "Error: " . $db->error;
            }
        }else{
            http_response_code(404);
            return "User Not Found!";
        }
    } */
}
?>