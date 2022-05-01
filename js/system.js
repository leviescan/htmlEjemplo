$.ajax({
    method: "GET",
    dataType: "json",
    url: "service/validarController.php",
    success: function(rs){
        if(rs.status==200)        
            $("#dropdown-user").html(rs['data']['nombres']);
            else{
                window.location.replace("index.html");
            }
    },
    error: function (xhr, ajaxOptions, thrownError){
        $("#alert").html('<div class="alert alert-danger"> <h3>'+xhr.status+'</h3><p>'+thrownError+'</p></div>');
    }
});
$("#link-matricular").click(function(){
    
    $("#matricular").addClass('visible').removeClass('hidden');
    $("#cursos").addClass('hidden').removeClass('visible');
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "service/cursoController.php",
        success: function(response){
            $.each(response, function (key, value) { 
                $("#curso").append('<option value='+value['id']+'>'+value['nombre']+'::'+value['jornada']+'</option>');
            });
        },
        error: function (xhr, ajaxOptions, thrownError){
            $("#alert").html('<div class="alert alert-danger"> <h3>'+xhr.status+'</h3><p>'+thrownError+'</p></div>');
        }
    });
});
$("#link-cursos").click(function(){
    $("#cursos").addClass('visible').removeClass('hidden');
    $("#matricular").addClass('hidden').removeClass('visible');
});
$("#link-logout").click(function(){
    $.ajax({
        method: "GET",
        dataType: "json",
        url: "service/logout.php",
        success: function(response){
            if(response.status == 200){
                window.location.replace("index.html");
            }
        },
        error: function (xhr, ajaxOptions, thrownError){
        }
    });
});