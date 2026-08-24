<?php
class Classroom
{
    public $id;
    public $class_name;


    public function __construct($id, $class_name,)
    {
        $this->id = $id;
        $this->class_name = $class_name;
    }

    public static function getAll()
    {
        global $db;
        $query = "SELECT * FROM classes ORDER BY class_name";
        $result = $db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($id)
    {
        global $db;
        $query = "SELECT * FROM classes WHERE id = $id";
        $result = $db->query($query);
        return $result->fetch_assoc();
    }


    public function create()
    {
        global $db;
        $query = "INSERT INTO classes (`class_name`)  VALUES ('$this->class_name')";
        $result = $db->query($query);
        if ($result) {
            return $db->insert_id;
        } else {
            return "Error: " . $db->error;
        }
    }

    public function update()
    {
        global $db;
        $query = "UPDATE classes SET class_name = '$this->class_name' where id = $this->id";
        $result = $db->query($query);
        if ($result) {
            return "Updated Successfully!";
        } else {
            return "Error: " . $db->error;
        }
    }

    public static function delete($_id){
        global $db;
        $found = Classroom::getById($_id);
        if($found){
            $query = "DELETE FROM classes WHERE id = $_id";
            $result = $db->query($query);
            if($result){
                return "Deleted Successfully!";
            }else{
                return "Error: " . $db->error;
            }
        }else{
            http_response_code(404);
            return "Class Not Found!";
        }
    }
}
