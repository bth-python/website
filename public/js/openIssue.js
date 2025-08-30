/**
 * @preserve Setup Button for reporting errors in articles.
 * @author Andreas Arnesson <AndreasArne@GitHub>
 */

function getSelectionElement() {
    let selection = null;

    if (window.getSelection) {
        selection = window.getSelection();
    }

    return selection;
}

function findAnchor(element) {
    while (element) {
        if (element.tagName.startsWith("H")) {
            const child = element.children[0];

            if (child && child.tagName === 'A' && child.classList.contains("header-anchor")) {
                return child.href;
            }
        }
        element = element.previousElementSibling ?? element.parentElement;
    }
    return window.location.href;
}

function getGithubLink() {
    const parent = document.getElementsByClassName("social-icons")[0];
    const githubElement = Array.from(parent.children).find(
        child => child.tagName === "A" && child.getAttribute("href").includes("https://github.com/")
    );

    if (githubElement != undefined)
        return githubElement.href
    
}

function createIssueForText() {
    const selection = getSelectionElement();
    const text = encodeURIComponent(selection.toString());
    const link = encodeURIComponent(findAnchor(selection.anchorNode.parentElement));
    const title = encodeURIComponent(`[Error] in article: ${document.title}`);
    const labels = encodeURIComponent("error in article");
    const githubLink = getGithubLink();
    
    openIssue(title, link, text, labels, githubLink);
};

function openIssue(title, link, text, labels, githubLink){
    let assignees;

    let url = `${githubLink}/issues/new?template=article-error.yml&url=${link}&copied-text=${text}&title=${title}&labels=${labels}`; //&assignees=${assignees}`;
    
    window.open(url, '_blank');
}

function setLeftOpenMenuBtn(openMenuBtn) {
    const main = document.getElementsByTagName('main')[0];
    main.getBoundingClientRect();
    openMenuBtn.style.left = `${window.innerWidth > 650 ? main.getBoundingClientRect().right + 5 : window.innerWidth - 35}px`;

}

function setPosMenu(menu, openMenuBtn) {
    const rect = openMenuBtn.getBoundingClientRect();
    if (window.innerWidth <= 650) {
        menu.style.top = `${rect.bottom - 190}px`;
        menu.style.left = `${rect.right - 180}px`;
    } else {
        menu.style.top = `${rect.bottom - 190}px`;
        menu.style.left = `${rect.left + 5}px`;
    }
}

function createOpenButton() {
    // Create the button to open the menu
    const openMenuBtn = document.createElement('button');
    openMenuBtn.textContent = '🐞';
    openMenuBtn.title = "Rapportera fel i artikeln";

    openMenuBtn.style.cssText = `
    cursor: pointer;
    display: block;
    position: fixed;
    bottom: 15px;
    width: 35px;
    height: 35px;
    line-height: 0px;
    left: 1061.85px;
    padding-bottom: 5px;

    `;
    setLeftOpenMenuBtn(openMenuBtn);
    document.body.appendChild(openMenuBtn);

    // Create the menu container
    const menu = document.createElement('div');
    menu.id="popupOverlay";
    menu.innerHTML = `
        <div class="popup" style="
            background: white;
            border-radius: 12px;
            height: 150px;
            width: 200px;
            padding: 1.5rem;
            box-shadow: 0 8px 20px rgba(0,0,0,.2);
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-right: 20px;
            padding-top: 5px;
            padding-left: 20px;
        ">
            <button style="
                position: absolute;
                top: -5px;
                right: 5px;
                background: none;
                border: medium;
                font-size: 1.25rem;
                cursor: pointer;
                color: rgb(102, 102, 102);
                width: 20px;
                height: 10px;
            " class="closeButton">&times;</button>
            <p style="
                margin: 0;
                color: #444;
                line-height: 1.4;"
            >
                Rapportera fel i artikeln genom att markera texten som är fel och klicka knappen</p>
            <button class="reportTextButton" style="
                align-self: stretch;
            ">Rapportera fel</button>
        </div>
        </div>
`
    menu.style.cssText = `
        inset: 0;
        display: none;
        justify-content: center;
        align-items: center;
        display: none;
        position: fixed;
        width: 200px;
        height: 190px;
    `;
    setPosMenu(menu, openMenuBtn);
    // Create the close button
    document.body.appendChild(menu);
    const closeMenuBtn = document.getElementsByClassName('closeButton')[0];
    closeMenuBtn.style.width = "23px";

    // Create the other buttons
    const textButton = document.getElementsByClassName('reportTextButton')[0];


    window.addEventListener("resize", (event) => {
        setLeftOpenMenuBtn(openMenuBtn);
        setPosMenu(menu, openMenuBtn);
    });

    openMenuBtn.addEventListener('click', (event) => {
        menu.style.display = 'block';
    });

    // Hide the menu
    closeMenuBtn.addEventListener('click', () => {
        menu.style.display = 'none';
    });


    textButton.addEventListener('click', () => {
        
        menu.style.display = 'none';
        createIssueForText();
    });
}


!function () {
    createOpenButton()
}();
