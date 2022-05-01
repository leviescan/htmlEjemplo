<?php
    $con = mysqli_connect("localhost","root","","aclase");
    mysqli_query($con,"INSERT INTO `usuario` (`id`, `nombres`, `apellidos`,  `clave`, `email`, `registro`, `documento`, `estado`) VALUES (NULL, '".$_POST['nombres']."', '".$_POST['apellidos']."', '".$_POST['documento']."','".$_POST['email']."',  '".time()."', '".$_POST['documento']."', 'activo')");
?>
