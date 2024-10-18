const dasmoto = ['dasmoto1', 'dasmoto2', 'dasmoto3'];
const teaCozy = ['TeaCozy1', 'TeaCozy2', 'TeaCozy3', 'TeaCozy4'];
const watches = ['Watches1', 'Watches2', 'Watches3', 'Watches4', 'Watches5'];

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

dsamotoGallery = makeGallery(dasmoto);
teaCozyGallery = makeGallery(teaCozy);
watchesGallery = makeGallery(watches);
/*
console.log(dsamotoGallery);
console.log(teaCozyGallery);
console.log(watchesGallery);

for (let i = 0; i < 10; i++) {
    console.log(dsamotoGallery.nextImg());
    console.log(teaCozyGallery.nextImg());
    console.log(watchesGallery.nextImg());
}
*/