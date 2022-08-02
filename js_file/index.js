// EMAIL_REGEXP
function emailAddress(email) {
  var reg = new RegExp(
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
  );
  return reg.test(email);
}

// RWD導覽列
$("#RWD_list").on("click mouseleave", function () {
  $(this).toggleClass("-on");
});

// 聯絡表單選項檢查
$("#email").keyup(function () {
  if ($(this).val() == "") {
    $(".mail .error").html("請輸入電子郵件");
  } else $(".mail .error").html("");
});

// // 姓名不為空
$("#names").keyup(function () {
  if ($(this).val() == "") {
    $(".names .error").html("請輸入姓名");
  } else $(".names .error").html("");
});

// 內容不為空
$("#textarea").keyup(function () {
  if ($(this).val() == "") {
    $(".form_med .error").html("請輸入內容");
  } else $(".form_med .error").html("");
});

// // 問題類型不為空
$("#select_pgm").change(function () {
  if ($(this).val() == null) {
    $(".type .error").html("請選擇問題類型");
  } else $(".type .error").html("");
});

// 聯絡表單送出檢查(EMAIL_REGEXP)
$(".sup_wrp form").submit(function (e) {
  let error_msg = "";

  // 停止預設行為
  e.preventDefault();

  // 信箱 反轉false送出錯誤警告
  if (!emailAddress($("#email").val())) {
    error_msg = error_msg + " Email格式錯誤 ";
  }

  // 姓名不為空
  if ($("#names").val() == "") {
    error_msg = error_msg + " 姓名資料 ";
  }

  if ($("#textarea").val() == "") {
    error_msg = error_msg + " 未填寫問題內容 ";
  }

  // 問題類型不為空
  if ($("#select_pgm").val() == null) {
    error_msg = error_msg + " 問題類型 ";
  }

  if (!$("#agree").is(":checked")) {
    error_msg = error_msg + " 尚未同意 ";
  }

  // 無誤後送出
  if (error_msg == "") {
    alert("資料成功送出");
  } else {
    $("#error").html(error_msg + "， 請再次確認");
  }
});
$(".about form").submit(function (e) {
  let error_msg = "";

  // 停止預設行為
  e.preventDefault();

  // 信箱 反轉false送出錯誤警告
  if (!emailAddress($("#email").val())) {
    error_msg = error_msg + " Email格式錯誤 ";
  }

  if (error_msg == "") {
    alert("成功訂閱");
  } else {
    $(".error").html(error_msg + "， 請再次確認");
  }
});
$(".home form").submit(function (e) {
  // 停止預設行為
  e.preventDefault();

  // 信箱 反轉false送出錯誤警告
  if (!emailAddress($(".email").val())) {
    alert("請確認Email格式後再次輸入");
  } else {
    alert("成功訂閱");
  }
});

// 選擇檔案
$(".show_file").click(function (e) {
  e.stopPropagation();

  $(`input[type='file']`).click();

  imgInp.onchange = () => {
    const [file] = imgInp.files;

    if (file) {
      blah.src = URL.createObjectURL(file);
      $("#blah").css("display", "block");
      $(".form_btm .show_file p").html("");
    }
  };
});

// $('.media li').click(function(){
//   this.
// })
