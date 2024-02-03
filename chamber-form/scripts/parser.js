const showLinks = document.querySelector('#links')
clickMe.addEventListener('click', parseURL)

function parseURL () {
    let input = document.querySelector('#githubaccount').value
    if (input == "") {
        console.log("oops")
        showLinks.innerHTML = "Please enter a GitHub URL above!"
    } else {
    //console.log(input)
    let inputArray = input.split("/")
    //console.log(inputArray)
    let indicator = inputArray[2]
    //console.log(indicator)
    if (indicator == "github.com") {
            console.log("Process a Repo to a Site")
            let linkSite = `https://${inputArray[3]}.github.io/${inputArray[4]}`
            let linkRepo = input
            //console.log(linkRepo)
            showLinks.innerHTML = `<p><img src="images/repo.png"> GitHub <a href="${linkRepo}" target="_blank">Repo</a></p>
            <p><img src="images/www.png"> GitHub <a  href="${linkSite}" target="_blank">Site</a></p>`
        } else {
            console.log("Process a Site to a Repo")
            let accountName = inputArray[2].split(".")[0]
            //console.log(accountName)
            let linkRepo = `https://github.com/${accountName}/${inputArray[3]}`
            let linkSite = input
            showLinks.innerHTML = `<p><img src="images/repo.png"> GitHub <a href="${linkRepo}" target="_blank">Repo</a></p>
            <p><img src="images/www.png"> GitHub <a  href="${linkSite}" target="_blank">Site</a></p>`
        }
    } // end of the if
    
}