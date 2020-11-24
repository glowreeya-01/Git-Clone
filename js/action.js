const userUrlApi = 'https://api.github.com/graphql';

const total = document.querySelector('.total__repository');
const testingImg = document.querySelectorAll('.testttt');
const fname = document.querySelector('.fullname');
// const uname = document.querySelector('.username');
console.log(userUrlApi);
// Date Function
function updateTime (repoDate, todayDate) {
    let timeDiff =(repoDate.getTime() - todayDate.getTime()) / 1000,
//    dateCal = repoDate.getDate(),
   updatedOn,
   month;
  switch (date1.getMonth()) {
    case 0:
      month = 'Jan'
      break;
    case 1:
      month = 'Feb'
      break;
    case 2:
      month = 'Mar'
      break;
    case 3:
      month = 'Apr'
      break;
    case 4:
      month = 'May'
      break;
    case 5:
      month = 'Jun'
      break;
    case 6:
      month = 'Jul'
      break;
    case 7:
      month = 'Aug'
      break;
      case 8:
        month = 'Sep'
      break;
    case 9:
      month = 'Oct'
      break;
    case 10:
      month = 'Nov'
      break;
    case 10:
      month = 'Dec'
      break;
      
    default:
      month = 'not'
      break;
  }
  if (timeDiff < 60) {
  return 'in 1 minute'; 
} else if (timeDiff <= 60*60) {    
  updatedOn = timeDiff / 60;
  return Math.abs(Math.round(updatedOn)) + 'minutes ago'; 
  } else if (timeDiff <= 60*60*24) {    
    updatedOn = timeDiff / 60 / 60;
    return Math.abs(Math.round(updatedOn)) + ' hours ago'; 
  } else {    
    updatedOn = timeDiff / 60 / 60 / 24;
    if (Math.abs(Math.round(updatedOn)) === 1) {
      return 'yesterday';       
    } else if (updatedOn <= 28) {
      return Math.abs(Math.round(updatedOn)) + ' days ago';       
    } else {  
      return 'on ' + dateCal + ' ' + month    
    }
  }  

 }


function userInfo(b, a) {
    console.log('working')
    let userName = b.name
    let userLogin = b.login;
    fname.textContent = b.name;
    let userAvatar = b.avatarUrl;
    testingImg.forEach(el=>el.src = userAvatar);
    let userBio = b.bio;
    let repoNodes = a.nodes;
    // console.log(userName);
    // console.log(userLogin);
    // console.log(userAvatar);
    // console.log(userBio);
    // console.log({ repoNodes });
    repoNodes.forEach((node) => {
        let name = node.name
        let forkCount = node.forkCount
        // let nodeStargazerCount = repoFunction.stargazerCount
        let languages = node.languages.nodes;
        let license = node.licenseInfo;
        // let nodeLanguagesColor = repoFunction.languages.nodes[0].color
        console.log({node});
        // console.log(nodeForkCount);
        // console.log(nodeStargazerCount);
        // console.log(nodeLanguages);
        // console.log(nodeLanguagesColor);
        const ul = document.createElement('ul');

        const li = document.createElement('li');
        const languageLi = li.cloneNode(false);
        const languageUl = ul.cloneNode(false)
        // Title
        const title = document.createElement('h3');
        title.classList.add('repo__name');
        title.innerText = name;

        // forked repo
        let forkedRepo = document.createElement('small');
        forkedRepo.innerText = node.isFork ?`Forked from ${ node.nameWithOwner}` : '';

        // description
        const description = document.createElement('p');
        description.classList.add('repo__description');
        description.innerText = node.description

        // Languages
        languages.forEach(language => {
            let languageLi = li.cloneNode(false)
            languageLi.classList.add('inline-flex')
            languageLi.innerHTML = `<span class="lang-color" style="background-color: ${language.color}"></span>${language.name}`;
            // languageLi.style.color = language.color;
            languageUl.appendChild(languageLi)
        })
        

        
        // Fork count
        let forkCountLi = li.cloneNode(false);
        forkCountLi.innerText = forkCount;

         // updated At
         let updatedLi = li.cloneNode(false);
         let repoDate = new Date(node.updatedAt);
         let todayDate = new Date();
        //  updatedLi.innerText = updateTime (repoDate, todayDate);
        // License
        
        let licenseLi = li.cloneNode(false);
        licenseLi.innerHTML = license ? `<svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>${license.name}` : '';

        
        languageLi.appendChild(languageUl)
        ul.appendChild(languageLi);
        ul.appendChild(forkCountLi);
        ul.appendChild(licenseLi)
        ul.appendChild(updatedLi);

        let repo = document.createElement('div');
        repo.classList.add('repository__one');

        const details = document.createElement('div');
        details.classList.add('details')
        details.appendChild(title)
        details.appendChild(forkedRepo)
        details.appendChild(description)
        details.appendChild(ul)

        repo.appendChild(details);
        const newRepo =
                    ` <div class="repository__one">
                    <div class="details">
                    <h3 class="repo__name">real-estate-project</h3>
                    <small>Forked from darshanr27/real-estate-project</small>
                    <p class="repo_description">The project ‘Vihar Valley’ is a real estate related website made
                        using HTML and CSS for clients to get to know about what the company is about and their
                        services</p>
                    <ul class="unordered-list">
                        <li>
                            <ul>
                                <li> <span class="lang-color"></span> Languages</li>
                            </ul>
                        </li>
                        
                        <li class="card"><svg class="octicon octicon-law mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path></svg>MIT License</li>
                        <li class="card">Updated on Oct 1</li>
                    </ul>
                </div>
                <button class="star"><svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1"
                        width="16" height="16" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                        </path>
                    </svg>Star</button>
            </div>`
        total.appendChild(repo)
    });
    // let repoTotalCount = a.totalCount


}


fetch(userUrlApi, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer 94a4ad207bc08a2ca5297272f80c379edb283e99",
    },
    body: JSON.stringify({
        query: `
        query {
            user(login: "glowreeya-01") {
              login
              avatarUrl
              name
              bio
              repositories(first: 20) {
                  totalCount
                nodes {
                  name
                  forkCount
                  stargazerCount
                  updatedAt
                  description
                  languages(first: 1) {
                    nodes {
                        id
                      color
                      name
                    }
                  }
                  licenseInfo{                    
                          id
                      name
                  }
                 isFork
                 nameWithOwner
                 forkCount
                }
              }
            }
          }`
    })
}).then(
    function (response) {
        // console.log(response)
        return response.json();
    }
).then(
    function (data) {
        let datalist = data.data.user;
        let repositorylist = data.data.user.repositories;
        console.log(data.data.user)
        console.log(datalist.name)
        console.log(repositorylist.nodes)
        console.log(data.data.user.repositories.nodes)
        console.log(data.data.user.repositories.nodes[1])
        console.log(data.data.user.repositories.nodes[1].name)
        // console.log(data.data.user.repositories.nodes[1].languages)
        // console.log(data.data.user.repositories.nodes[1].languages.nodes)
        userInfo(datalist, repositorylist)
    }
).catch(function (error) {
    // errorMsg(error);
})


