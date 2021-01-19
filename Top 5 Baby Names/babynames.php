<html>
<title>Baby Names USA</title>
</head>
<style>
  form{
  text-align: center;
  }
  label{
    padding: 5px;
    text-align: center;

  }
  select{
    padding: 5px;
    margin: 20px;
    text-align:center;

  }
  input[type=submit]{
    background-color: green;
    border-style: solid;
    border-radius: 5px ;
    color: white;
    padding: 7px 20px;
    margin: 4px 2px;
    cursor: pointer;
    text-align: center;

  }
</style>
<body>
<form action="" method="post">
  <label for="year">Choose Year:</label>

  <select name="year">
    <option value="allYears" <?php echo (isset($_POST['gender']) && $_POST['year'] == 'allYears') ? 'selected="selected"' : ''; ?> >All years</option>
    <option value="2005"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2005') ? 'selected="selected"' : ''; ?>>2005</option>
    <option value="2006"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2006') ? 'selected="selected"' : ''; ?>>2006</option>
    <option value="2007"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2007') ? 'selected="selected"' : ''; ?>>2007</option>
    <option value="2008"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2008') ? 'selected="selected"' : ''; ?>>2008</option>
    <option value="2009"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2009') ? 'selected="selected"' : ''; ?>>2009</option>
    <option value="2010"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2010') ? 'selected="selected"' : ''; ?>>2010</option>
    <option value="2011"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2011') ? 'selected="selected"' : ''; ?>>2011</option>
    <option value="2012"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2012') ? 'selected="selected"' : ''; ?>>2012</option>
    <option value="2013"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2013') ? 'selected="selected"' : ''; ?>>2013</option>
    <option value="2014"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2014') ? 'selected="selected"' : ''; ?>>2014</option>
    <option value="2015"<?php echo (isset($_POST['gender']) && $_POST['year'] == '2015') ? 'selected="selected"' : ''; ?>>2015</option>

  </select>

  <label for="gender">Choose Gender:</label>
  <select name="gender">
    <option value="both"<?php echo (isset($_POST['gender']) && $_POST['gender'] == 'both') ? 'selected="selected"' : ''; ?>>Both</option>
    <option value="m" <?php echo (isset($_POST['gender']) && $_POST['gender'] == 'm') ? 'selected="selected"' : ''; ?>>Male</option>
    <option value="f" <?php echo (isset($_POST['gender']) && $_POST['gender'] == 'f') ? 'selected="selected"' : ''; ?>>Female</option>

  </select>

  <input type="submit" value="submit" name="submit">
</form>


<?php
$conn=mysqli_connect("localhost","root","root","SSA");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else{
    // Check if form submitted
     if(isset($_POST['submit'])){
       //intialise with selected year and gender
     $varYear = $_POST['year'];
     $varGender = $_POST['gender'];
      //when year not selected
     if($varYear==='allYears'){
         if($varGender==='m' || $varGender==='f'){
             $sqlQuery = "SELECT * FROM babynames where gender='$varGender' order by year";
         }
         //when gender not selected
         else{
            $sqlQuery = "SELECT * FROM babynames order by year";
         }
}
    //when year selected
     elseif($varYear!=='allYears'){
         if($varGender==='m' || $varGender==='f'){
             $sqlQuery = "SELECT * FROM babynames where year='$varYear' and gender='$varGender' order by ranking";
         }
         //when gender not selected
         else{
             $sqlQuery = "SELECT * FROM babynames where year='$varYear' order by gender";
         }
     }

$result = mysqli_query($conn,$sqlQuery);

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
}
?>
</body>
</html>
