<?php
    error_reporting(0);
    include 'class/db.php';
    session_start();
    if($_REQUEST){
        $db = new db();
        $user = $db->query('SELECT id FROM usuario WHERE email = ? AND clave = ?', $_REQUEST['username'], $_REQUEST['clave'])->fetchArray(); 
        if($user['id']){       
                $_SESSION['id']  = $user['id'];
                echo json_encode(array('status'=>200));
            }
            else
                echo json_encode(array('status'=>404, 'msg' => 'Pailas la validacion Fallo'));
    }
    elseif($_SESSION['id']){
        $db = new db();
        $user = $db->query('SELECT nombres, apellidos, email  FROM usuario WHERE id = ?', $_SESSION['id'])->fetchArray(); 
        if($user['nombres']){
            echo json_encode(array('status'=>200, 'data'=>$user));
        }
        else
            echo json_encode(array('status'=>500, 'msg'=>'!!Diablos Señorita!!'));
    }
    else
    echo json_encode(array('status'=>403));  
?>