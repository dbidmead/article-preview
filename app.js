const shareBtn = document.querySelector('.share-icon');
const shareModal = document.querySelector('#share-modal');

let modalActive = false;

function handleShareBtn() {

    if(!modalActive) {
        shareModal.setAttribute('style', 'display: flex')
    } else if(modalActive) {
        shareModal.setAttribute('style', 'display: none')
    } else return
    modalActive = !modalActive
    shareBtn.addEventListener('click', handleShareBtn)
    console.log(shareModal.attributes.style)
    console.log(modalActive)
}

shareBtn.addEventListener('click', handleShareBtn)