// 검색창
const searchForm = document.querySelector("#search-area fieldset");

document.getElementById("query").addEventListener("focus", e => {
    searchForm.style.border = "1px solid #2678F3";
});
document.getElementById("query").addEventListener("focusout", e => {
    searchForm.style.border = "";
    // e.target.value = "";
});
document.getElementById("query").addEventListener("mouseover", e => {
    searchForm.style.border = "1px solid rgba(0, 0, 0, 0.2)";
});

/* ----------------------------------------------------------- */

const LOGIN_ID = document.getElementById('LOGIN_ID');
const LOGIN_PW = document.getElementById('LOGIN_PW');
const LOGIN_BTN = document.getElementById('LOGIN_BTN');

function main(){
    location.replace("./login.html");
}

LOGIN_ID.addEventListener('keyup', color);
LOGIN_PW.addEventListener('keyup', color);
LOGIN_BTN.addEventListener('click',moveToMain);

// ----------------------------------------------------------- //
// 카카오 로그인

Kakao.init('f4ae80d941501ac8f6506e42d09748f0');
console.log( Kakao.isInitialized() ); // 초기화 판단여부

function loginWithKakao() {
    Kakao.Auth.login({
        success: function (authObj) {
            console.log(authObj); // access토큰 값
            Kakao.Auth.setAccessToken(authObj.access_token); // access토큰값 저장

            getInfo();
        },
        fail: function (err) {
            console.log(err);
        }
    });
}

function getInfo() {
    Kakao.API.request({
        url: '/v2/user/me',
        success: function (res) {
            console.log(res);
            var email = res.kakao_account.email;
            var gender = res.kakao_account.gender;
            var nickname = res.kakao_account.profile.nickname;
            var profile_image = res.kakao_account.profile.thumbnail_image_url;

            console.log(email, gender, nickname, profile_image);
        },
        fail: function (error) {
            alert('카카오 로그인에 실패했습니다. 관리자에게 문의하세요.' + JSON.stringify(error));
        }
    });
}

function kakaoLogout() {
    if (!Kakao.Auth.getAccessToken()) {
        alert('Not logged in.');
        return;
    }
    Kakao.Auth.logout(function() {
        alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
    });
}