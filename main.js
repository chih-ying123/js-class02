/*--輸入法--*/
let button1 = document.querySelector('.button1');
let box1 = document.querySelector('.box1')

var a =1
button1.addEventListener('click',function(){
    if (a>0){
        box1.style.display = 'block';
        a*=-1;
    }else{
        box1.style.display = 'none';
        a*=-1;
    }
});

let close_box = document.querySelector('.close_box');
close_box.addEventListener('click',function(){
    box1.style.display = 'none';
});

/*--彈出視窗--*/
let open_win_btn = document.querySelector('.open_win_btn');
let open_win = document.querySelector('.open_win');

open_win_btn.addEventListener('click',function(){
    open_win.style.display = 'block';
});

let close_win_btn = document.querySelector('.close_win_btn');
close_win_btn.addEventListener('click',function(){
    open_win.style.display = 'none';
});

/*--div改為 自訂得css樣式--*/
let change_css_btn = document.querySelector('.change_css_btn');
let change_css_box = document.querySelector('.change_css_box');

change_css_btn.addEventListener('click',function(){
    
    let style_type = document.getElementById('style_type').value;
    let style_value = document.getElementById('style_value').value;
    change_css_box.style.style_type = style_value;
    console.log(style_type,style_value)
});

let reset_css_btn = document.querySelector('.reset_css_btn');
reset_css_btn.addEventListener('click',function(){
    change_css_box.style.width = '200px';
    change_css_box.style.height = '200px';
    change_css_box.style.padding = '10px';
    change_css_box.style.margin = '5px auto';
    change_css_box.style.color = '#fff';
    change_css_box.style.backgroundColor = '#000';
});

/*--月曆--*/


/*--圖片--*/
let pic_item = document.querySelectorALl('.pic_item');
let hover_img = document.querySelectorAll('.hover_img');
pic_item.addEventListener('mouseenter',function(){
    pic_item.style.backgroundColor = '#fff';
    hover_img.style.display = 'block';
});
pic_item.addEventListener('mouseout',function(){
    pic_item.style.backgroundColor = '#ccc';
    
});