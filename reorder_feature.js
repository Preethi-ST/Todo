
const myarea = document.querySelector(".sortlist");
       // console.log("in script");
        new Sortable(myarea,{
            animation : 350
        });
        document.addEventListener('dragleave',function(){
        if(document.querySelector('.mylist li') !== null){
            document.querySelector('.mylist li').addEventListener('drop',function(){
                let myReorderedList = document.querySelectorAll('.mylist li');
            console.log(myReorderedList);
            localStorage.clear();
            myReorderedList.forEach(task => {
                console.log(task.innerText);
                saveTaskInLocalStorage(task.innerText) });
            })
        }
    })
      