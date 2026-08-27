<?php
class Fee
{

/* 
	id Primary	int(11)			No	None		AUTO_INCREMENT	Change Change	Drop Drop	
	2	student_id	int(11)			Yes	NULL			Change Change	Drop Drop	
	3	fee_type_id	varchar(255)	utf8mb4_general_ci		Yes	NULL			Change Change	Drop Drop	
	4	fee_collected_at
*/
    public $id;
    public $student_id;
    public $fee_type_id;
    public $fee_collected_at;


    public function __construct($id, $student_id, $fee_type_id, $fee_collected_at)
    {
        $this->id = $id;
        $this->student_id = $student_id;
        $this->fee_type_id = $fee_type_id;
        $this->fee_collected_at = $fee_collected_at;
    }

    public static function getAll()
    {
        global $db;
        $query = "SELECT f.* , s.name, ft.fee_type_name, ft.fee_amount FROM fees f, students s, fee_types ft WHERE f.student_id = s.id AND f.fee_type_id = ft.id ORDER BY f.id DESC";
        $result = $db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($id)
    {
        global $db;
        $query = "SELECT * FROM fees WHERE id = $id";
        $result = $db->query($query);
        return $result->fetch_assoc();
    }


    public function create()
    {
        global $db;
        $query = "INSERT INTO fees (`student_id`, `fee_type_id`, `fee_collected_at`) VALUES ($this->student_id, $this->fee_type_id, '$this->fee_collected_at')";
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
        $query = "UPDATE fees SET student_id = $this->student_id, fee_type_id = $this->fee_type_id, fee_collected_at = '$this->fee_collected_at' where id = $this->id";
        $result = $db->query($query);
        if ($result) {
            return "Updated Successfully!";
        } else {
            return "Error: " . $db->error;
        }
    }

    public static function delete($_id){
        global $db;
        $found = Fee::getById($_id);
        if($found){
            $query = "DELETE FROM fees WHERE id = $_id";
            $result = $db->query($query);
            if($result){
                return "Deleted Successfully!";
            }else{
                return "Error: " . $db->error;
            }
        }else{
            http_response_code(404);
            return "Fee Not Found!";
        }
    }
}
