<?php
    $todo = [];
    $con = mysqli_connect("localhost","root","","aclase");
    $rs = mysqli_query($con,"SELECT id, nombre, jornada FROM curso");
    while ($fila = $rs->fetch_assoc()) {
        $todo[] = $fila;
    }
    echo json_encode($todo);
