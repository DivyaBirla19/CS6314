<?php
$conn=mysqli_connect("localhost","root","root","SSA");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

else{
  $sqlQuery="SELECT * FROM marker";
  $result = mysqli_query($conn,$sqlQuery);
  $jsonArray=array();
  while($row = mysqli_fetch_array($result))
  {
    $jsonArray[]=$row;

  }
echo json_encode($jsonArray);
  mysqli_close($conn);
}

 ?>
