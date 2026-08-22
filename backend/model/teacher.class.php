<?php
class Teacher{
    public $id;
    public $name;
    public $designation;
    public $address;
    public $phone;
    public $qualification;
    public $subject_id;
    public $photo;

     /*
    `id`, `name`, `father_name`, `mother_name`, `address`, `phone`, `class_id`, `section_id`, `group_id`, `photo`
    */

    public function __construct($id, $name, $designation, $address, $phone, $qualification, $subject_id, $photo){
        $this->id = $id;
        $this->name = $name;
        $this->designation = $designation;
        $this->address = $address;
        $this->phone = $phone;
        $this->qualification = $qualification;
        $this->subject_id = $subject_id;
        $this->photo = $photo;
    }

    public static function getAll(){
        global $db;
        $query = "SELECT * FROM teachers
        order by id desc";
        $result = $db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

     public static function getById($id){
        global $db;
        $query = "SELECT * FROM teachers WHERE id = $id";
        $result = $db->query($query);
        return $result->fetch_assoc();
    }

   
    public function create(){
        global $db;
        $query = "INSERT INTO `teachers` (`name`, `designation`, `address`, `phone`, `qualification`, `subject_id`, `photo`) VALUES ('$this->name', '$this->designation', '$this->address', '$this->phone', '$this->qualification', $this->subject_id, '$this->photo')";
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