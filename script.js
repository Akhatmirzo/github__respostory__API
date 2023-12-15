// ! Main varieble
let theInput = document.querySelector(".get__repos input");
let getButton = document.querySelector(".get__button");
let reposData = document.querySelector(".show__data");
let githubUser = document.querySelector(".github__user");
let githubUser2 = document.querySelector(".github__user2");
let reposInfo = document.querySelector(".repos__info");
let clsBtn = document.querySelector(".cls_btn");
let bio = document.createElement('p');
let Name = document.createElement('h2');
let wrapper = document.createElement('div');
let userImg = document.createElement('img');

let repositoriWindow = document.querySelector('.repositori_window');
function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        getUserData();
        getRepos();
    }
}
getButton.onclick = () => {
    getUserData();
    getRepos();
}

function getUserData() {
    if (theInput.value == "") {

    } else {

        fetch(`https://api.github.com/users/${theInput.value}`)
            .then((response) => response.json())
            .then((Userres, id) => {
                githubUser.style.display = "flex";
                console.log(Userres);

                // * User tittles
                if (Userres.login === undefined) {
                    wrapper.className = "user__title";
                    githubUser.appendChild(wrapper);
                    bio.remove();
                    Name.remove();
                    userImg.remove();
                    wrapper.innerText = "Not User Information";
                } else {
                    // * User Image
                    userImg.setAttribute("src", `${Userres.avatar_url}`);
                    githubUser.appendChild(userImg);

                    // * User tittle wrap
                    wrapper.innerText = "";
                    wrapper.className = "user__title";
                    githubUser.appendChild(wrapper);

                    if (Userres.login === undefined) {
                        Name.innerText = "";
                    } else {
                        Name.innerText = `${Userres.login}`;
                        wrapper.appendChild(Name);
                    }

                    if (Userres.bio == null) {
                        bio.innerText = "";
                    } else {
                        bio.innerText = `${Userres.bio}`;
                        wrapper.appendChild(bio);
                    }
                }

                // Akhatmirzo
            })
    }
}

let reposId;

function getRepos() {
    // console.log("Function get Repos");

    if (theInput.value == "") {
        // console.log("Value can be empty");
        reposData.innerHTML = "<span>Please Write Github Username</span>";
    } else {
        // console.log(theInput.value);
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((response) => response.json())

            .then((repositories) => {
                // console.log(repositories);

                // ! Empty the Container
                reposData.innerHTML = '';

                // ! Loop through repositories
                repositories.forEach((repo, id) => {
                    // * Create the main DIv
                    // console.log(id);
                    let mainDiv = document.createElement('div');

                    // * Create repositories name text
                    let repoName = document.createTextNode(repo.name);

                    // * Append the text to main div
                    mainDiv.appendChild(repoName);

                    // * span cliking the opening window
                    let nth2span = document.createElement('span');
                    nth2span.className = 'nth__span';
                    let nth2spanTitle = document.createTextNode('Open');
                    nth2span.appendChild(nth2spanTitle);
                    mainDiv.appendChild(nth2span);

                    // ! clik the opening window
                    nth2span.onclick = function () {
                        reposId = id;
                        repositoriWindow.style.display = 'block';
                        document.body.style.overflowX = 'hidden';
                        reposUser();
                        getReposInfo();
                        // console.log(reposId);
                    }

                    // * Create repositories url Anchor
                    let theUrl = document.createElement('a');

                    // * Create repositories Url text
                    let theUrlText = document.createTextNode('Visit');

                    // * Append the repo url text to anchor tag
                    theUrl.appendChild(theUrlText);

                    // * Add thje HyperText Reference "href"
                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                    // * Set attributes Blank
                    theUrl.setAttribute('target', '_blank');

                    // * Append Url Anchor to main div
                    mainDiv.appendChild(theUrl);

                    // * Create Stars count span
                    let StarsSpan = document.createElement('span');

                    // * Create Stars count text
                    let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                    // * Add stars Count text to stars span
                    StarsSpan.appendChild(starsText);

                    // * Append stars count span to main div
                    mainDiv.appendChild(StarsSpan);

                    // * Add class on main div
                    mainDiv.className = 'repo__box';

                    // * Append the main div to Container
                    reposData.appendChild(mainDiv);
                });
            })
    }
}

let bio2 = document.createElement('p');
let Name2 = document.createElement('h2');
let wrapper2 = document.createElement('div');
let userImg2 = document.createElement('img');

function reposUser() {
    fetch(`https://api.github.com/users/${theInput.value}`)
        .then((response) => response.json())
        .then((Userres) => {
            githubUser2.style.display = "flex";
            console.log(Userres);

            // * User tittles
            if (Userres.login === undefined) {
                wrapper2.className = "user__title";
                githubUser2.appendChild(wrapper2);
                bio2.remove();
                Name2.remove();
                userImg2.remove();
                wrapper2.innerText = "Not User Information";
            } else {
                // * User Image
                userImg2.setAttribute("src", `${Userres.avatar_url}`);
                githubUser2.appendChild(userImg2);

                // * User tittle wrap
                wrapper2.innerText = "";
                wrapper2.className = "user__title";
                githubUser2.appendChild(wrapper2);

                if (Userres.login === undefined) {
                    Name2.innerText = "";
                } else {
                    Name2.innerText = `${Userres.login}`;
                    wrapper2.appendChild(Name2);
                }

                if (Userres.bio == null) {
                    bio2.innerText = "";
                } else {
                    bio2.innerText = `${Userres.bio}`;
                    wrapper2.appendChild(bio);
                }
            }

            // Akhatmirzo
        })
}

// ! ----------------------------------------------------------------
let desc = document.createElement("h2");
let timeDiv = document.createElement("div");
let locattitle1 = document.createElement("h3");
let Lspan1 = document.createElement("span");
let locattitle2 = document.createElement("h3");
let Lspan2 = document.createElement("span");
let locattitle3 = document.createElement("h3");
let Lspan3 = document.createElement("span");
let locat_url = document.createElement("div");
let timetitle2 = document.createElement("h3");
let span1 = document.createElement("span");
let timetitle1 = document.createElement("h3");
let licen = document.createElement("div");
let span3 = document.createElement("a");
let timetitle3 = document.createElement("h3");
let span2 = document.createElement("span");
let licentitle3 = document.createElement("h3");
let licenspan3 = document.createElement("span");
let licentitle2 = document.createElement("h3");
let licenspan2 = document.createElement("span");
let licenspan1 = document.createElement("span");
let licentitle1 = document.createElement("h3");
let licentitle4 = document.createElement("h3");
let licenspan4 = document.createElement("span");
let iframeWeb = document.createElement("iframe");
let username;

function getReposInfo() {
    let reposData;

    fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => response.json())
        .then((resInfo) => {
            reposData = resInfo[reposId];
            console.log(reposData);

            let descText = document.createTextNode(`${reposData.name}`);
            desc.appendChild(descText);
            reposInfo.appendChild(desc);

            timeDiv.className = "time";
            reposInfo.appendChild(timeDiv);
            
            timetitle1.innerText = "Created: ";
            Lspan1.innerText = `${reposData.created_at}`;
            locattitle1.appendChild(Lspan1);
            timeDiv.appendChild(locattitle1);

            Lspan2.innerText = `${reposData.updated_at}`;
            locattitle2.appendChild(Lspan2);
            timeDiv.appendChild(locattitle2);

            Lspan3.innerText = `${reposData.pushed_at}`;
            locattitle3.appendChild(Lspan3);
            timeDiv.appendChild(locattitle3);


            // !----------------------------------------------------------------

            
            locat_url.className = "time";
            reposInfo.appendChild(locat_url);

            span1.innerText = `${reposData.git_url}`;
            timetitle1.appendChild(span1);
            locat_url.appendChild(timetitle1);

            span2.innerText = `${reposData.ssh_url}`;
            timetitle2.appendChild(span2);
            locat_url.appendChild(timetitle2);

            span3.setAttribute("href", `${reposData.clone_url}`);
            span3.innerText = `${reposData.clone_url}`;
            timetitle3.appendChild(span3);
            locat_url.appendChild(timetitle3);


            // !----------------------------------------------------------------

            licen.className = "time";
            reposInfo.appendChild(licen);

            licenspan1.innerText = `${reposData.language}`;
            licentitle1.appendChild(licenspan1);
            licen.appendChild(licentitle1);

            licenspan2.innerText = `${reposData.size}`;
            licentitle2.appendChild(licenspan2);
            licen.appendChild(licentitle2);

            if (reposData.license === null) {
                licenspan3.innerText = `No licenses`;
            } else {
                licenspan3.innerText = `Yes licenses`;
            }
            licentitle3.appendChild(licenspan3);
            licen.appendChild(licentitle3);

            licenspan4.innerText = `${reposData.visibility}`;
            licentitle4.appendChild(licenspan4);
            licen.appendChild(licentitle4);

            // ! ----------------------------------------------------------------
            username = reposData.owner.login;
            username = username.toLowerCase();
            console.log(username);
            iframeWeb.setAttribute('src', `https://${username}.github.io/${reposData.name}/`)
            repositoriWindow.appendChild(iframeWeb);
        })
}

clsBtn.addEventListener("click", () => {
    repositoriWindow.style.display = 'none';
    document.body.style.overflow = 'scroll';
})