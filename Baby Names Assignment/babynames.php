<?php
$conn=mysqli_connect("localhost","root","root","SSA");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else{
       //intialise with selected year and gender
     $year = $_POST['year'];
     $gender = $_POST['gender'];
      //when year not selected
     if($year==='allYears'){
         if($gender==='m' || $gender==='f'){
             $sqlQuery = "SELECT * FROM babynames where gender='$gender' order by year";
         }
         //when gender not selected
         else{
            $sqlQuery = "SELECT * FROM babynames order by year";
         }
}
    //when year selected
     elseif($year!=='allYears'){
         if($gender==='m' || $gender==='f'){
             $sqlQuery = "SELECT * FROM babynames where year='$year' and gender='$gender' order by ranking";
         }
         //when gender not selected
         else{
             $sqlQuery = "SELECT * FROM babynames where year='$year' order by gender";
         }
     }

$result = mysqli_query($conn,$sqlQuery);
if (!$result) {
	printf("Error: %s\n", mysqli_error($conn));
	exit();
}
//Create Table
echo "<table border='2' align='center' width='700px'>
<tr>
<th>Baby Name</th>
<th>Year</th>
<th>Ranking</th>
<th>Gender</th>
</tr>";

//Add each entry for matched results into the table
while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['name'] . "</td>";
echo "<td>" . $row['year'] . "</td>";
echo "<td>" . $row['ranking'] . "</td>";
echo "<td>" . $row['gender'] . "</td>";
echo "</tr>";
}
echo "</table>";

//close connection with database
mysqli_close($conn);

}
?>
