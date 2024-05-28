

function showContent(url) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
}

function createnewTag1() {
    // Tạo một thẻ input mới
    var newInput = document.createElement("input");
    newInput.type = "text"; // Đặt kiểu của input là text, bạn có thể thay đổi thành kiểu khác nếu cần
    newInput.placeholder='Thêm tiêu đề cho thẻ này';
    newInput.style.height= '30px';
    newInput.style.width= '200px';
    newInput.style.padding='0';
    newInput.style.border='1px';
    newInput.style.borderRadius='5px';
    newInput.style.margin= '2px 0';
    newInput.style.fontSize='18px';
    newInput.style.fontFamily="'Times New Roman', Times, serif";
    var namelist = document.getElementById('textTags1');
    namelist.appendChild(newInput);
    namelist.style.display= 'block';
}

function createnewTag2() {
    var newInput = document.createElement("input");
    newInput.type = "text"; // Đặt kiểu của input là text, bạn có thể thay đổi thành kiểu khác nếu cần
    newInput.placeholder='Thêm tiêu đề cho thẻ này';
    newInput.style.height= '30px';
    newInput.style.width= '200px';
    newInput.style.padding='0';
    newInput.style.border='1px';
    newInput.style.borderRadius='5px';
    newInput.style.margin= '2px 0';
    newInput.style.fontSize='18px';
    newInput.style.fontFamily="'Times New Roman', Times, serif";
    var namelist = document.getElementById('textTags2');
    namelist.appendChild(newInput);
    namelist.style.display= 'block';
}
function createnewTag3() {
    // Tạo một thẻ input mới
    var newInput = document.createElement("input");
    newInput.type = "text"; // Đặt kiểu của input là text, bạn có thể thay đổi thành kiểu khác nếu cần
    newInput.placeholder='Thêm tiêu đề cho thẻ này';
    newInput.style.height= '30px';
    newInput.style.width= '200px';
    newInput.style.padding='0';
    newInput.style.border='1px';
    newInput.style.borderRadius='5px';
    newInput.style.margin= '2px 0';
    newInput.style.fontSize='18px';
    newInput.style.fontFamily="'Times New Roman', Times, serif";
    var namelist = document.getElementById('textTags3');
    namelist.appendChild(newInput);
    namelist.style.display= 'block';
}
function createnewTag4() {
    var newInput = document.createElement("input");
    newInput.type = "text"; // Đặt kiểu của input là text, bạn có thể thay đổi thành kiểu khác nếu cần
    newInput.placeholder='Thêm tiêu đề cho thẻ này';
    newInput.style.height= '30px';
    newInput.style.width= '200px';
    newInput.style.padding='0';
    newInput.style.border='1px';
    newInput.style.borderRadius='5px';
    newInput.style.margin= '2px 0';
    newInput.style.fontSize='18px';
    newInput.style.fontFamily="'Times New Roman', Times, serif";
    var namelist = document.getElementById('textTags4');
    namelist.appendChild(newInput);
    namelist.style.display= 'block';
}
function createnewTag5() {
    var newInput = document.createElement("input");
    newInput.type = "text"; // Đặt kiểu của input là text, bạn có thể thay đổi thành kiểu khác nếu cần
    newInput.placeholder='Thêm tiêu đề cho thẻ này';
    newInput.style.height= '30px';
    newInput.style.width= '200px';
    newInput.style.padding='0';
    newInput.style.border='1px';
    newInput.style.borderRadius='5px';
    newInput.style.margin= '2px 0';
    newInput.style.fontSize='18px';
    newInput.style.fontFamily="'Times New Roman', Times, serif";
    var namelist = document.getElementById('textTags5');
    namelist.appendChild(newInput);
    namelist.style.display= 'block';
}

function createnewlist1(){//thẻ1
    var namelist=document.getElementById('name-list1');
    var button1=document.getElementById('buttonadd1');
    namelist.style.display= 'block';
    button1.style.display= 'none';
}
function createnewlist2(){//thẻ2
    var namelist=document.getElementById('name-list2');
    var button2=document.getElementById('buttonadd2');
    namelist.style.display= 'block';
    button2.style.display= 'none';
}
function createnewlist3(){//thẻ3
    var namelist=document.getElementById('name-list3');
    var button3=document.getElementById('buttonadd3');
    namelist.style.display= 'block';
    button3.style.display= 'none';
}
function createnewlist4(){//thẻ4
    var namelist=document.getElementById('name-list4');
    var button4=document.getElementById('buttonadd4');
    namelist.style.display= 'block';
    button4.style.display= 'none';
}
function createnewlist5(){//thẻ4
    var namelist=document.getElementById('name-list5');
    var button5=document.getElementById('buttonadd5');
    namelist.style.display= 'block';
    button5.style.display= 'none';
}


//check login
// function sub() {
//     var username = document.getElementById("name").value;
//     var password = document.getElementById("pass").value;

//     if (username === "" || password === "") {
//         alert("Please enter both username and password.");
//         return false;
//     }
//     return true;
// }
function sub() {
    var  inputs = document.getElementsByTagName("input");
    for(var i=0; i<inputs.length; i++){
        if(inputs[i].hasAttribute('required')||inputs[i].value.trim()===""){
            alert("Vui lòng điền đầy đủ thông tin");
            return false;
        }
    }
    return true;
}
function sub1() {
    var  inputs = document.getElementsByTagName("input");
    for(var i=0; i<inputs.length; i++){
        if(inputs[i].hasAttribute('required')||inputs[i].value.trim()===""){
            alert("Vui lòng điền đầy đủ thông tin");
            return false;
        }
    }
    return true;
}
function subss() {
    var inputs = document.getElementsByTagName("input");
    var allFieldsFilled = true; // Biến để kiểm tra xem tất cả các trường đã điền đầy đủ chưa
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].hasAttribute('required') || inputs[i].value.trim() === ""){
            alert("Vui lòng điền đầy đủ thông tin");
            return false;
        }
    }
    if(allFieldsFilled) {
        alert("Mật khẩu mới sẽ được gửi tới số điện thoại của bạn trong giây lát!");
    }
    return true;
}

// document.getElementById("login").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var username = document.getElementById("name").value;
//     localStorage.setItem("username", username);
//     // Perform login logic, e.g., send data to server
//     // Then redirect to base.html
//     window.location.href = "base.html";
// });
// var username = localStorage.getItem("username");
// if (username) {
//     document.getElementById("username").textContent = username;
// }

// doi nen trang web
function chuyenxanh() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#ceccbd';
}
function chuyendo() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#E1F7F5';
}
function chuyentim() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#F0ECE5';
}
function chuyenvang() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#E4C59E';
}
function chuyenluc() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#EEEEEE';
}
function chuyencam() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#E4DEBE';
}
function chuyenxam() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#EDEDED';
}
function chuyentrang() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#FDE5D4';
}