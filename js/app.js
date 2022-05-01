
$("#guardar").click(function(){
    datos = $("#regUsuario").serialize();
    $.ajax({
        method: "POST",
        data: datos,
        url: "service/usuarioController.php",
        beforeSend: function(){
            $("#alert").html('<div class="alert alert-info"><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div><h3>Cargando...</h3></div>');
            $("#guardar").attr("disabled", true);
        },
        success: function(response){
            $("#alert").html('<div class="alert alert-success"> <h3>Operacion Exitosa</h3></div>');
            $("#guardar").attr("disabled", false);
        },
        error: function (xhr, ajaxOptions, thrownError){
            $("#alert").html('<div class="alert alert-danger"> <h3>'+xhr.status+'</h3><p>'+thrownError+'</p></div>');
            $("#guardar").attr("disabled", false);
        }
    });
});
$("#btnSesion").click(function(){
    datos = $("#frmSesion").serialize();
    $.ajax({
        method: "POST",
        data: datos,
        dataType: 'json',
        url: "service/validarController.php",
        beforeSend: function(){
            $("#alertSesion").html('<div class="alert alert-info"><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div><h3>Cargando...</h3></div>');
            $("#btnSesion").attr("disabled", true);
        },
        success: function(rs){
            if(rs.status == 200){
                window.location.replace("muro.html");
            }
            else{
                $("#alertSesion").html('<div class="alert alert-danger">'+rs.status+' '+rs.msg+'</p></div>');
            }
        },
        error: function (xhr, ajaxOptions, thrownError){
            $("#alertSesion").html('<div class="alert alert-danger"> <h3>'+xhr.status+'</h3><p>'+thrownError+'</p></div>');
            $("#btnSesion").attr("disabled", false);
        }
    }); 
});