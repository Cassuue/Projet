<?php
include ('database.php');
include 'request.php';


ini_set('display_errors', 1);
error_reporting(E_ALL);


$conn = new DB;
$conn = $conn->connexionBD();

$type_request = $_SERVER['REQUEST_METHOD'];

if ($type_request == 'GET'){
    if (isset($_GET['type']) && $_GET['type'] == "lastTitle"){
        $test = new request;
        $test = $test->getLatestListened($conn, 'cassie.peridy@mail.com');
        echo json_encode($test);
    }
    else{

    }

} elseif ($type_request == 'POST') {


} elseif ($type_request == 'PUT') {


} elseif($type_request == 'DELETE'){

}

?>