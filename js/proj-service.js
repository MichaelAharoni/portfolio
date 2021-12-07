var gProjects;
var gNames = ['MINES SWEEPER', 'Guess The Breed','Per Pixel'];
var gTitles = ['Lets try to solve the whole board without any explotion !','Can you guess which breed of dog is it only by the picture ?','Whe your imagination became the reality'];
var gDescs = ['This game have three lvls, each level have a diffrent numbers of bumbs, your targer is to solve all the board. Each box hides diffrent value which will appear only on click. you have 3 lives, 3 safe clicks, 3 hints. to restart press the Smiley Icon... GOOD LUCK !','try to guess all the breeds of dogs that appears in the game, we recommands to allow volume to have maximum effect, ENJOY !','Try to get your dream on paper, how exacly would it looks like? here you can see someone dream, on the exact same pxl, same color, became his reality.'];
var gUrls = ['https://michaelaharoni.github.io/FirstProject/','https://michaelaharoni.github.io/guess-the-breed/','https://michaelaharoni.github.io/perPixel/','https://michaelaharoni.github.io/Touch-Nums/'];
var gPublishedAts = ['1637754109000','464646433'];
var gLabels = ['Game ,Matrixes', 'Dogs, Animals Games','site ,web'];

$(init);

function init() {
    _createProjects();
    renderHtmlModels();
    renderProjects();
    renderObjDetails();
    $('.contact.btn-primary').click(sendMail);
}

function sendMail(){
// var $mail = $('.mail').val();
var $subject = $('.subject').val();
var $message = $('.message').val();
window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=michaelaharoni001@gmail.com&su=${$subject}&b
ody=${$message}`);
console.log('yes');
}

function renderObjDetails() {
    for (var i = 0; i < gProjects.length; i++) {
        $(`.modal-body.${i}`).text(gProjects[i].name);
        $(`.text-muted.${i}`).text(''+gProjects[i].title);
        $(`.descs.${i}`).text('Descrition : '+gProjects[i].desc);
        $(`.date.${i}`).text('Published At : '+new Date(+gProjects[i].publishedAt));
        $(`.category,${i}`).text('Categories : '+gProjects[i].labels);
    }
}

function renderProjects() {
    var strHTML = `  <section class="bg-light" id="portfolio"><div class="container"><div class="row">
    <div class="col-lg-12 text-center"><h2 class="section-heading">Portfolio</h2>
    <h3 class="section-subheading text-muted">gagagagagag.</h3></div></div><div class="row">`;
    for (var i = 0; i < gProjects.length; i++) {
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item"><a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i+1}"><div class="portfolio-hover">
<div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i></div></div>
<img class="img-fluid" src="img/portfolio/${i}.300x400.png" alt=""></a><div class="portfolio-caption"><h4>${gProjects[i].name}</h4>
<p class="text-muted ${i}">Get ready to explode your mind !</p></div></div>`;
    }
    strHTML += `</div></div></section>`;
    $('.objects').html(strHTML);
}



function renderHtmlModels() {
    var strHTML = ``;
    for (var i = 0; i < gProjects.length; i++) {
        var currHTML = `  <div class="portfolio-modal modal fade" id="portfolioModal${i+1}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog"><div class="modal-content">
<div class="close-modal" data-dismiss="modal"><div class="lr"><div class="rl"></div></div>
</div><div class="container"><div class="row"><div class="col-lg-8 mx-auto">
<div class="modal-body"><!-- Project Details Go Here --><div></div><h2 class='${i}'>Mines Sweeper</h2>
<p class="item-intro text-muted ${i}"></p>
<a href="${gProjects[i].url}"${i}">
<img class="img-fluid d-block mx-auto" src="img/portfolio/${i}.png" alt=""></a>
<p class="descs ${i}">describe</p><ul class="list-inline"><li class="date ${i}">Date</li><br><li class="category ${i}">Category: Illustration</li></ul>
<button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fa fa-times"></i>Close Project</button></div></div></div></div></div></div></div>`;
        strHTML += currHTML;
    }
    $('.models').html(strHTML);
}

function _createProjects() {
    gProjects = [];
    for (var i = 0; i < gNames.length; i++) {
        gProjects[i] = _createProject(gNames[i], gTitles[i], gDescs[i], gUrls[i], gPublishedAts[i], gLabels[i]);
    }
    return gProjects;
}

function _createProject(name, title, desc, url, publishedAt, labels) {
    var project = {
        id: name.toLowerCase(),
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels
    }
    return project;
}