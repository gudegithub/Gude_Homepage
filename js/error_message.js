
let name = document.getElementById("name_1");
let company = document.getElementById("company");
let mail = document.getElementById("mail_address");
let tell = document.getElementById("tell");
let contents = document.getElementById("contents");
let name_e = document.getElementById("name_error");
let company_e = document.getElementById("company_error");
let mail_e = document.getElementById("mail_address_error");
let contents_e = document.getElementById("contents_error");
let tell_e = document.getElementById("tell_error");

// 入力内容チェック
function input_check(){
  var result = true;

  // 入力内容セット
  let name_Set = name.value;
  let company_Set= company.value;
  let mail_Set = mail.value;
  let contents_Set = contents.value;
  let tell_Set = tell.value;

  // 内容チェック

  // 名前
  if(name_Set === ""){
    alert(" お名前は必須です ");
    result = false;
    return result;
  }

  // 会社名
  if(company_Set === ""){
    alert(" 会社名は必須です ");
    result = false;
    return result;
  }

  // メールアドレス
  if(mail_Set === ""){
    alert(" メールアドレスは必須です ");
    result = false;
    return result;
  }else if(!mail_Set.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
		alert(" 正しいメールアドレスを入力してください。");
		result = false;
    return result;
  }

  // 電話番号
  if(tell_Set === ""){
    alert(" 電話番号は必須です ")
    result = false;
    return result;
  }
  // お問い合わせ
  if(contents_Set === ""){
    alert(" ご依頼内容は何でしょうか ");
    result = false;
    return result;
  }else if(contents_Set.match(/[<(.*)>.*<\/\1>]/)){
		alert(" HTML、URLの貼りつけは禁止しています。");
		result = false;
    return result;
	}else if(contents_Set.match(/^[ 　\r\n\t]*$/)){
		alert(" お問い合わせ内容は必須です。");
		result = false;
    return result;
  }

    return result;

}
