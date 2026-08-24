<?php
class FeeType
{
    public $id;
    public $fee_type_name;
    public $fee_amount;


    public function __construct($id, $fee_type_name, $fee_amount)
    {
        $this->id = $id;
        $this->fee_type_name = $fee_type_name;
        $this->fee_amount = $fee_amount;
    }

    public static function getAll()
    {
        global $db;
        $query = "SELECT * FROM fee_types ORDER BY fee_type_name";
        $result = $db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($id)
    {
        global $db;
        $query = "SELECT * FROM fee_types WHERE id = $id";
        $result = $db->query($query);
        return $result->fetch_assoc();
    }


    public function create()
    {
        global $db;
        $query = "INSERT INTO fee_types (`fee_type_name`, `fee_amount`) VALUES ('$this->fee_type_name', $this->fee_amount)";
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
        $query = "UPDATE fee_types SET fee_type_name = '$this->fee_type_name', fee_amount = $this->fee_amount where id = $this->id";
        $result = $db->query($query);
        if ($result) {
            return "Updated Successfully!";
        } else {
            return "Error: " . $db->error;
        }
    }

    public static function delete($_id){
        global $db;
        $found = FeeType::getById($_id);
        if($found){
            $query = "DELETE FROM fee_types WHERE id = $_id";
            $result = $db->query($query);
            if($result){
                return "Deleted Successfully!";
            }else{
                return "Error: " . $db->error;
            }
        }else{
            http_response_code(404);
            return "Fee Type Not Found!";
        }
    }
}
