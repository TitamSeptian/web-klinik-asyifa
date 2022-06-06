$(".close-alert").click(function (e) {
    $(this).parent().fadeOut();
});

// $.ajaxSetup({
//     headers: {
//         "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
//     },
// });
// $("body").on("click", ".btn-delete", function (e) {
//     e.preventDefault();
//     var url = $(this).attr("href");
//     if (confirm("tag akan dihapus secara permanen, apakah anda yakin?")) {
//         $.ajax({
//             url: url,
//             type: "POST",
//             data: {
//                 _method: "DELETE",
//             },
//             success: function (data) {
//                 alert(data.message);
//             },
//         });
//     }
// });
