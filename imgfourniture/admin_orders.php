<?php

include 'config.php';

if(isset($_POST['update_order'])){

   $order_update_id = $_POST['order_id'];
   $update_payment = $_POST['update_payement'];
   mysqli_query($conn, "UPDATE `orders` SET payement_status = '$update_payment' WHERE id = '$order_update_id'") or die('query failed');
   $message[] = 'payment status has been updated!';

}

if(isset($_GET['delete'])){
   $delete_id = $_GET['delete'];
   mysqli_query($conn, "DELETE FROM `orders` WHERE id = '$delete_id'") or die('query failed');
   header('location:admin_orders.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>orders</title>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

   

</head>
<body>
    <style>
        :root{
   --purple:#8e44ad;
   --red:#c0392b;
   --orange:#f39c12;
   --black:#333;
   --white:#fff;
   --light-color:#666;
   --light-white:#ccc;
   --light-bg:#f5f5f5;
   --border:.1rem solid var(--black);
   --box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
}
.empty{
   padding:1.5rem;
   text-align: center;
   color:var(--red);
   font-size: 2rem;
    width: 800px;
}
.title{
   text-align: center;
   margin-bottom: 2rem;
   text-transform: uppercase;
   color:var(--black);
   font-size: 2rem;
}



/* Title styling */
.orders .title {
  text-align: center; /* Center align the title */
  margin-bottom: 1rem; /* Add some space below the title */
  font-size: 2rem; /* Adjust title font size */
}

/* Box container styling */
.orders .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid layout */
  gap: 1rem; /* Add space between order boxes */
  justify-content: center; /* Center the boxes horizontally */
}

/* Individual order box styling */
.orders .box {
  padding: 1.5rem; /* Add padding inside the order boxes */
  border: 1px solid #ccc; /* Add a thin border */
  border-radius: 5px; /* Add a slight border radius */
  background-color: white; /* Set a white background color */
  margin-bottom: 1rem; /* Add some space below each box */
}

/* Order details styling */
.orders .box p {
  margin-bottom: 0.5rem; /* Add some space between order details */
  font-weight: bold; /* Make order details bold */
}

.orders .box p span {
  font-weight: normal; /* Make order values normal weight */
  color: #333; /* Set a dark color for order values */
}

/* Form styling within order box */
.orders .box form {
  display: flex; /* Arrange form elements horizontally */
  justify-content: space-between; /* Space out form elements */
  align-items: center; /* Vertically align form elements */
  margin-top: 1rem; /* Add space above the form */
}

/* Select element styling */
.orders .box select {
  padding: 0.5rem 1rem; /* Add padding to select element */
  border: 1px solid #ccc; /* Add a thin border */
  border-radius: 3px; /* Add a slight border radius */
  font-size: 1rem; /* Adjust select font size */
}

.btn3 {
    width: 150px;
    height: 30px;
    background: black;
    border: 1px solid;
    transition: 0.5s ease;
    cursor: pointer;
    color: white;
    border-radius: 10px;
}
.btn3:hover{
    background:  rgb(213, 128, 67);
    color: white;
    
}
    
    </style>

   
<?php include 'header.php'; ?>
<section class="orders">

   <h1 class="title">placed orders</h1>

   <div class="box-container">
      <?php
      $select_orders = mysqli_query($conn, "SELECT * FROM `orders`") or die('query failed');
      if(mysqli_num_rows($select_orders) > 0){
         while($fetch_orders = mysqli_fetch_assoc($select_orders)){
      ?>
      <div class="box">
         <p> user id : <span><?php echo $fetch_orders['user_id']; ?></span> </p>
         <p> placed on : <span><?php echo $fetch_orders['placed_on']; ?></span> </p>
         <p> name : <span><?php echo $fetch_orders['name']; ?></span> </p>
         <p> number : <span><?php echo $fetch_orders['number']; ?></span> </p>
         <p> email : <span><?php echo $fetch_orders['email']; ?></span> </p>
         <p> address : <span><?php echo $fetch_orders['adress']; ?></span> </p>
         <p> total products : <span><?php echo $fetch_orders['total_products']; ?></span> </p>
         <p> total price : <span>$<?php echo $fetch_orders['total_price']; ?></span> </p>
         <p> payment method : <span><?php echo $fetch_orders['method']; ?></span> </p>
         <form action="" method="post">
            <input type="hidden" name="order_id" value="<?php echo $fetch_orders['id']; ?>">
            <select name="update_payement">
               <option value="" selected disabled><?php echo $fetch_orders['payement_status']; ?></option>
               <option value="pending">pending</option>
               <option value="completed">completed</option>
            </select>
            <center>
            <input type="submit" value="update" name="update_order" class="btn3"">
            <button class="btn3"><a href="admin_orders.php?delete=<?php echo $fetch_orders['id']; ?>" onclick="return confirm('delete this order?');" style="color:white; text-decoration:none;"> delete</a></button>
            </center>
        </form>
      </div>
      <?php
         }
      }else{
         echo '<center><p class="empty">no orders placed yet!</p></center>';
      }
      ?>
   </div>

</section>










<!-- custom admin js file link  -->
<script src="admin_script.js"></script>

</body>
</html>