$(document).ready(function(){
    // 表单验证
    $('#registerForm').submit(function(e){
        e.preventDefault();
        
        let email = $('#email').val().trim();
        let institution = $('#institution').val().trim();
        let pwd = $('#password').val();
        let confirmPwd = $('#confirmPassword').val();
        
        if(!email || !institution || !pwd || !confirmPwd) {
            alert('请填写所有必填项（带*号）。');
            return;
        }
        
        // 邮箱验证
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            alert('请输入有效的邮箱地址。');
            return;
        }
        
        if(pwd !== confirmPwd) {
            alert('两次输入的密码不一致，请重新输入。');
            return;
        }
        if(pwd.length < 8) {
            alert('密码长度至少为8位。');
            return;
        }
        if(!$('#agreeTerms').is(':checked')) {
            alert('请阅读并同意服务协议与隐私政策。');
            return;
        }
        
        // 模拟成功提交
        alert('✅ 申请已提交成功！\n我们的团队将在1-2个工作日内联系您，为您开通体验账号。');
        this.reset();
    });

    // 平滑滚动
    $('a[href^="#"]').on('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });
});