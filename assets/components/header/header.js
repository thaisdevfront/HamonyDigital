var header = document.getElementsByTagName('header')[0]

header.innerHTML=`
    <div class="logo"> 
        <img src="/assets/img/logo.png">
    </div>

    <div style="display: flex;    justify-content: space-between;  align-items: center;">
        <div id="menu" class="menu"> </div>  

        <div class="btn-c xs-hidden">
            <a class="btn" href="#">Fale Agora  <i class="fa-regular fa-comments"></i></a>
        </div>
    </div>
    
    
    

`;


console.log(header)
