const body = document.querySelector('body');
const header = document.getElementById('header');
const links = document.querySelector('ul');
const lin = document.querySelectorAll('ul li');
const linarray = Array.from(lin);
const loading = document.querySelector('.loading');
const currContent = document.querySelector('p.current');
const image = document.querySelector('img');
const colorTheme = '--bcolr';



function randomRange(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

linarray[0].classList.add('current');
getNotes('digestion.txt');
loadAnim();
console.log(linarray);


window.addEventListener('scroll', e => {
    if(window.scrollY > 100) {
        header.style.position = 'fixed';
        header.style.background = 'var(--bcolr)';
    } else {
        header.style.background = 'none';
        header.style.position = 'unset';
    }
});

links.addEventListener('click' , e=> {
    if(e.target.nodeName === 'LI') {
        loadAnim();

        const rclr = randomRange(100 , 250)
        const gclr = randomRange(80 , 200)
        const bclr = randomRange(100, 250);

        const color = `rgb(${rclr}, ${gclr}, ${bclr})`
        console.log(color);





        document.documentElement.style.setProperty(colorTheme , `${color}`)
        
        linarray.forEach((each)=> {
            if(each.classList.contains('current')) {
                each.classList.remove('current')
            }
        })

        e.target.classList.add('current');



        
linarray.forEach((each, index) => {
            if(each.classList.contains('current')) {
                window.scrollTo(0,0);
                each.style.background = `${color}`;
                if(index === 0) {
                    getNotes('digestion.txt');
                    setImage('img/01.png' , 'The Digestive System');
                } else if(index === 1) {
                    getNotes('transport.txt');
                    setImage('img/02.png' , 'The Transport System');
                } else if(index === 2) {
                    getNotes('reproduction.txt');
                    setImage('img/03.png' , 'The Reproductive System');
                } else if(index === 3) {
                    getNotes('nervous.txt');
                    setImage('img/04.png' , 'The Nervous System');
                } else if(index === 4) {
                    getNotes('integuments.txt');
                    setImage('img/05.png' , 'The Integumentary System');
                } else if(index === 5) {
                    getNotes('excretion.txt');
                    setImage('img/06.png' , 'The Excretory System');
                } else if(index === 6) {
                    getNotes('endocrine.txt');
                    setImage('img/07.png' , 'The Endocrine System');
                } else if(index === 7) {
                    getNotes('respiration.txt');
                    setImage('img/08.png' , 'The Respiratory System');
                }
            } else {
                each.style.background = 'none';
            }
            
        }) 
    }
});

// Functions
function getNotes(resource) {
            fetch(`${resource}`)
            .then((res)=> res.text())
            .then((data) => {
                currContent.innerHTML = data;
            })
            .catch(
                (err)=> currContent.innerHTML = err
            )
        };


function setImage(source, description) {
    image.setAttribute('src', `${source}`);
    image.setAttribute('alt', `${description}`);
};

function loadAnim() {
    loading.style.opacity = '1';
    loading.style.transform = 'scale(1)';

    setTimeout(_ => {
        loading.style.transform = 'scale(0)';
        loading.style.opacity = '0';
    }, 3500);
}