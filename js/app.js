

(function (){
    //butonları ve ürünleri bir dizi içerisine aldık
    const buttons=document.querySelectorAll('.btn');
    const storeItems=document.querySelectorAll('.store-item');

    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            const filter=e.target.dataset.filter;//tıklanan butonun data-filter="" değerini alıyor
            
            storeItems.forEach((item) =>{
                if(filter==='all'){
                    item.style.display="block";
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display="block";
                    }else{
                        item.style.display="none";
                    }
                }
            });
        })
    });
})();

(function myInput(){
    const searchBox=document.querySelector('#search-box');
    const storeItems=document.querySelectorAll('.store-item');
    
    searchBox.addEventListener('keyup',(e)=>{
        const searchFilter=e.target.value.toLowerCase().trim();

        storeItems.forEach((item)=>{
            if(item.textContent.includes(searchFilter)){
                item.style.display='block';
            }else{
                item.style.display="none"
            }
        });
    });
    
})();



