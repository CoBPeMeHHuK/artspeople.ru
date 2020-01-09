$('form[name=form]').submit(function(event){
    event.preventDefault();
    //add stuff here
});
let CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
let type = $('#type_element').val(),
    id_element = $('#id_element').val(),
    method ='post';

    id_element !=='' ? url = '/admin/'+type+'/'+id_element : url = '/admin/'+type;
    redirectUrl = '/admin/'+type;

Dropzone.options.dropzoneMin = {
    headers: {'x-csrf-token': CSRF_TOKEN},
    method: method,
    url: url,
    dictDefaultMessage: "Нажмите или перетащите картинку в это поле",
    autoProcessQueue: false,
    uploadMultiple: false,
    parallelUploads: 100,
    maxFiles: 1,
    addRemoveLinks: true,
    dictRemoveFile:'Удалить',
    acceptedFiles: "image/*",
    init: function () {

        let submitButton = document.querySelector("#btn"),
            wrapperThis = this;

        submitButton.addEventListener('click',function(){
            console.log('submit click');
            if (wrapperThis.getQueuedFiles().length == 0) {

                let type = $('#type_element').val(),
                    id_element = $('#id_element').val(),
                    url = '/admin/'+type,
                    action = $('#action').val(),
                    relative_name = $('#relative_name_element').val(),
                    name = $('#name_element').val(),
                    category_type = $('#category_type').val(),
                    description = $('#description_element').val(),
                    mobile_description = $('#mobile_description_element').val(),
                    rating = $('#rating_element').val(),
                    is_activity = $('#is_activity_element').is(":checked");
                is_activity === true ? is_activity = 1 : is_activity = 0;
                rating ==='' ? rating = 1 : rating = parseInt(rating);
                if(id_element !==''){
                    url = '/admin/'+type+'/'+id_element;
                }

                $.ajax({
                    type: method,
                    url: url,
                    data: {
                        type:type,
                        action:action,
                        name:name,
                        relative_title:relative_name,
                        category_type:category_type,
                        description:description,
                        mobile_description:mobile_description,
                        rating:rating,
                        is_activity:is_activity
                    },

                    success:function (data) {
                        data =JSON.parse(data);
                        let id = data['id'];
                        id_element ==='' ? $('#btn_send_image').val(id) : $('#btn_send_image').val(id_element);

                        $('#status_response').val('success');
                        $('#btn_send_image').click();
                        setTimeout(function(){
                            $('#status_response').val('error');
                        }, 3000);
                    }
                });
            }
        });

        let id =  $('#id_element').val();
        let thisDropzone = this;
        if(id){
            $.get('/api/get_subcategories_images/'+id+'/min', function(data) {

                data = JSON.parse(data);
                $.each(data, function(key,value){

                    let mockFile = { name: value.src, size: value.size };
                    thisDropzone.options.addedfile.call(thisDropzone, mockFile);
                    thisDropzone.options.thumbnail.call(thisDropzone, mockFile, '/storage/'+value.type+'/'+value.src);
                });

            });
        }

        this.on("addedfile", function (file) {

            console.log('addedFile');
            file.added = 'addedfile';

            submitButton.addEventListener('click',function(){
                wrapperThis.processQueue();
            });

        });

    },
    sending: function(file, xhr, formData){
        let type = $('#type_element').val(),
            action = $('#action').val(),
            name = $('#name_element').val(),
            relative_name = $('#relative_name_element').val(),
            category_type = $('#category_type').val(),
            description = $('#description_element').val(),
            mobile_description = $('#mobile_description_element').val(),
            rating = $('#rating_element').val(),
            is_activity = $('#is_activity_element').is(":checked");
        is_activity === true ? is_activity = 1 : is_activity = 0;
        rating ==='' ? rating = 1 : rating = parseInt(rating);

        formData.append('type', type);
        formData.append('action', action);
        formData.append('name', name);
        formData.append('relative_title', relative_name);
        formData.append('category_type', category_type);
        formData.append('description', description);
        formData.append('mobile_description', mobile_description);
        formData.append('rating', rating);
        formData.append('is_activity', is_activity);

    },
    removedfile:function(file){
        if (file.added) {
            let _ref;
            return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
        }

        swal({
            title: "Вы уверены?",
            text: "После удаления файл нельзя будет восстановить",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let name = file.name;
                    $.ajax({
                        type: 'POST',
                        url: '/delete_image',
                        data: { name: name},
                        dataType: 'html',
                        success:function(data){
                            data = JSON.parse(data);
                            if(data['status']=='success'){
                                swal("Удаление картинки прошло успешно", {
                                    icon: "success",
                                });
                            }else{
                                swal("Что-то пошло не так...", {
                                    icon: "warning",
                                });
                            }

                        }
                    });
                    let _ref;
                    return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                } else {
                    swal("Отмена удаления");
                }
            });
    },
    success:function(data){
        data = JSON.parse(data['xhr']['response']);
        let id = data['id'];
        $('#btn_send_image').val(id);
        $('#status_response').val('success');
        $('#btn_send_image').click();
        setTimeout(function(){
            $('#status_response').val('error');
        }, 3000);
    }
};

Dropzone.options.dropzoneMax = {
    headers: {'x-csrf-token': CSRF_TOKEN},
    method: method,
    url: '/admin/subcategory_upload_max',
    dictDefaultMessage: "Нажмите или перетащите картинку в это поле",
    autoProcessQueue: false,
    uploadMultiple: false,
    parallelUploads: 100,
    maxFiles: 1,
    addRemoveLinks: true,
    dictRemoveFile:'Удалить',
    acceptedFiles: "image/*",

    init: function () {

        let submitButton = document.querySelector("#btn_send_image"),
            wrapperThis = this;

        let id =  $('#id_element').val();
        let thisDropzone = this;
        if(id){
            $.get('/api/get_subcategories_images/'+id+'/max', function(data) {

                data = JSON.parse(data);
                $.each(data, function(key,value){

                    let mockFile = { name: value.src, size: value.size };
                    thisDropzone.options.addedfile.call(thisDropzone, mockFile);
                    thisDropzone.options.thumbnail.call(thisDropzone, mockFile, '/storage/'+value.type+'/'+value.src);
                });

            });
        }

        this.on("addedfile", function (file) {

            file.added = 'addedfile';
            submitButton.addEventListener('click',function(){
                wrapperThis.processQueue();
            });
        });

        submitButton.addEventListener('click',function(){
            if (wrapperThis.getQueuedFiles().length == 0) {

                if($('#status_response').val()=='success'){
                    let data = {'status':'success'};
                    getResponse(data);
                }
            }
        });
    },
    sending: function(file, xhr, formData){
        let type = $('#type_element').val(),
            action = $('#action').val();
            id_element =$('#btn_send_image').val();
        formData.append('id', id_element);
        formData.append('type', type);
        formData.append('action', action);
        },

    removedfile:function(file){
        if (file.added) {
            let _ref;
            return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
        }

        swal({
            title: "Вы уверены?",
            text: "После удаления файл нельзя будет восстановить",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let name = file.name;
                    $.ajax({
                        type: 'POST',
                        url: '/delete_image',
                        data: { name: name},
                        dataType: 'html',
                        success:function(data){
                            data = JSON.parse(data);
                            if(data['status']=='success'){
                                swal("Удаление картинки прошло успешно", {
                                    icon: "success",
                                });
                            }else{
                                swal("Что-то пошло не так...", {
                                    icon: "warning",
                                });
                            }

                        }
                    });
                    let _ref;
                    return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
                } else {
                    swal("Отмена удаления");
                }
            });
    },
    success:function(data){

        data = JSON.parse(data['xhr']['response']);
        getResponse(data);
    }
};


/*-------------------------------------------------------------------ВСПОМОГИТАЛЕЬНЫЕ МЕТОДЫ----------------------------------------------------------------*/
function getResponse(data,json = null){
    if(json){
        data = JSON.parse(data);
    }

    if( data['status'] === "success" || data === "success"){
        swal({
            title: "Загрузка успешна",
            text: "через несколько секунд произойдёт перенаправление на общую страницу",
            icon: "success",
        });
        setTimeout(function(){
           document.location.href = redirectUrl;
        },1000);


    }else{
        swal({
            title: "Ошибка загрузки",
            text: "Попробуйте ввести корректные данные",
            icon: "warning",
            buttons: true,
        })
    }
}

function getMethod(id){
    id != '' ?  method = 'post' :   method='post';
}

