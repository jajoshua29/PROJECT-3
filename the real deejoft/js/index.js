function myfun(x){
    x.classList.toggle("change")
}

const $counter = document
    .querySelectorAll('.counter');
    
    
$counter.forEach(($counter) => {
    $counter.innerText = '0';
    const updateCounter = () => {
        const target = Number(
            $counter.getAttribute('data-target'),
        );
        const count = Number($counter.innerText);
        const increment = target / 200 ;
        if(count < target) {
            $counter.innerText = 
            `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter,50);
        }else{
            $counter.innerText = target;
        }
    };
    updateCounter();
});