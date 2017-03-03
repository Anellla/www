<?
require_once('../conf.php');
$user = addslashes ($_POST['login']);     
$password = $_POST['password'];
//запрос одного рядка
$zapyt = "select password1 from proba WHERE username = '".$user."'";
$result = mysqli_query($con, $zapyt);
if ($result) {
  $row = mysqli_fetch_row($result);
 $row1 = $row[0];

header('Content-Type: application/json; charset=utf-8');
$isValidUser =   $row1 == $password;
echo $isValidUser? '{"error":null}': '{"error":"Incorrect user or password"}'; 
  
   
   mysqli_free_result($result);
} else {
   echo 'Bad zapyt'.$zapyt.mysqli_error($con);
}
mysqli_close($con);

?>
