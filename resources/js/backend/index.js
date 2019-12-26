$(document).ready(function () {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.delete').on('click',function(){
        let id = $(this).val(),
            type = $('#type_element').val();

        swal({
            title: "Вы уверены?",
            text: "После удаления элемент нельзя будет восстановить",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $.ajax({
                        type: 'delete',
                        url: '/admin/'+type+'/'+id,
                        data: {
                            id: id,
                            type:type
                        },
                        dataType: 'html',
                        success:function(data){
                            data = JSON.parse(data);
                            if(data['status']=='success'){
                                swal("Удаление прошло успешно", {
                                    icon: "success",
                                });
                                setTimeout(function(){
                                    document.location.href = '/admin/'+type;
                                },1000);
                            }else{
                                swal("Что-то пошло не так...", {
                                    icon: "warning",
                                });
                            }

                        }
                    });
                } else {
                    swal("Отмена удаления");
                }
            });

    });
});
