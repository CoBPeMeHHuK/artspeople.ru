$('form[name=form]').submit(function(event){
    event.preventDefault();
    //add stuff here
});
        let CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
        let type = $('#type_element').val(),
            id_element = $('#id_element').val(),
            method ='',
            url = '/admin/'+type;
        if(id_element !==''){
            url = '/admin/'+type+'/'+id_element;
        }
        redirectUrl = '/admin/'+type;
        getMethod(id_element);

        Dropzone.options.myDropzone = {
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

                console.log('init');

                let submitButton = document.querySelector("#btn"),
                    wrapperThis = this;

                submitButton.addEventListener('click',function(){
                    console.log('submit click');
                    if (wrapperThis.getQueuedFiles().length == 0) {

                        console.log('Отправка из формы');

                        let type = $('#type_element').val(),
                            id_element = $('#id_element').val(),
                            url = '/admin/'+type,
                            action = $('#action').val(),
                            name = $('#name_element').val(),
                            description = $('#description_element').val(),
                            rating = $('#rating_element').val(),
                            is_activity = $('#is_activity_element').is(":checked");
                        is_activity === true ? is_activity = 1 : is_activity = 0;
                        rating ==='' ? rating = 1 : rating = parseInt(rating);
                        if(id_element !==''){
                            url = '/admin/'+type+'/'+id_element;
                        }

                        console.log(method);


                        $.ajax({
                            type: method,
                            url: url,
                            data: {
                                type:type,
                                action:action,
                                name:name,
                                description:description,
                                rating:rating,
                                is_activity:is_activity
                            },

                            success:function (data) {
                                getResponse(data,'json');
                            }
                        });
                    }
                });

                let id =  $('#id_element').val();
                let thisDropzone = this;
                if(id){
                    $.get('/api/get_dropzone_images/'+id, function(data) {

                        data = JSON.parse(data);
                        $.each(data, function(key,value){

                            let mockFile = { name: value.src, size: value.size };
                            thisDropzone.options.addedfile.call(thisDropzone, mockFile);
                            thisDropzone.options.thumbnail.call(thisDropzone, mockFile, 'https://357319.selcdn.ru/artspeople/'+value.type+'/'+value.src);
                        });

                    });
                }

                this.on("addedfile", function (file) {

                    console.log('addedFile');
                    file.added = 'addedfile';

                    submitButton.addEventListener('click',function(){
                        wrapperThis.processQueue();
                        console.log('отправка из дропзоны 2');
                    });

                });

                },
            sending: function(file, xhr, formData){
                let type = $('#type_element').val(),
                    action = $('#action').val(),
                    name = $('#name_element').val(),
                    description = $('#description_element').val(),
                    rating = $('#rating_element').val(),
                    is_activity = $('#is_activity_element').is(":checked");
                is_activity === true ? is_activity = 1 : is_activity = 0;
                rating ==='' ? rating = 1 : rating = parseInt(rating);

                formData.append('type', type);
                formData.append('action', action);
                formData.append('name', name);
                formData.append('description', description);
                formData.append('rating', rating);
                formData.append('is_activity', is_activity);
                console.log('отправка из дропзоны');

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

