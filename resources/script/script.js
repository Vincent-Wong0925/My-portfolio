const dasmoto = ['dasmoto1', 'dasmoto2', 'dasmoto3'];
const teaCozy = ['TeaCozy1', 'TeaCozy2', 'TeaCozy3', 'TeaCozy4'];
const watches = ['Watches1', 'Watches2', 'Watches3', 'Watches4', 'Watches5', 'Watches6'];

function makeGallery(srcArr) {
    return {
        count: 0,
        srcArr: srcArr,
    
        nextImg() {
            this.count = (this.count + 1) % this.srcArr.length;
            return ('./resources/images/' + this.srcArr[this.count] + '.png');
        }
    };
}

dasmotoGallery = makeGallery(dasmoto);
teaCozyGallery = makeGallery(teaCozy);
watchesGallery = makeGallery(watches);

const teaCozyImg = document.getElementById('teaCozyImg');
const watchesImg = document.getElementById('watchesImg');
const dasmotoImg = document.getElementById('dasmotoImg');

function changeImg(event, dasmotoGallery){
    newSrc = dasmotoGallery.nextImg();
    event.target.src = newSrc;
}

teaCozyImg.addEventListener('click', (event) => { changeImg(event, teaCozyGallery); });
watchesImg.addEventListener('click', (event) => { changeImg(event, watchesGallery); });
dasmotoImg.addEventListener('click', (event) => { changeImg(event, dasmotoGallery); });