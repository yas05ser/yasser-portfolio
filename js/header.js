document.addEventListener("DOMContentLoaded", function () {
    mapMetaDataInHeader();
    mapSocialLinksData();
    mapStatsData();
});

function mapMetaDataInHeader() {
    var tagElement = document.getElementById("tag-label");
    tagElement.innerText = 'Full Stack Flutter Expert';

    let firstName = 'Yasser';
    let lastName = 'Laroussi';

    var firstNameElement = document.getElementById("first-name");
    firstNameElement.innerHTML = firstName;

    var lastNameElement = document.getElementById("last-name");
    lastNameElement.innerHTML = lastName;

}

function mapSocialLinksData() {
    let socials = [
        {
            "icon": "fa fa-linkedin-square",
            "value": "https://www.linkedin.com/in/yasser-laroussi-43b451258/"
        },
        {
            "icon": "fa fa-github",
            "value": "https://github.com/yas05ser"
        },
        {
            "icon": "fa fa-medium",
            "value": "https://medium.com/@momo.aud3"
        },
        {
            "icon": "fa fa-facebook-square",
            "value": "https://www.facebook.com/yasser.laroussi.39/"
        },
        {
            "icon": "fa fa-instagram",
            "value": "https://www.instagram.com/yas.ser05/"
        },
        {
            "icon": "fa fa-twitter",
            "value": "https://twitter.com/yasserlarossi05"
        }
    ];

    // icons in top section
    for (var i = 0; i < socials.length; i++) {
        var anchor = document.createElement("a");
        anchor.className = "social-icon-wrapper";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        anchor.href = link;
        anchor.target = "_blank";

        anchor.appendChild(icon);

        var socialHandles = document.getElementById("social-handles");
        socialHandles.appendChild(anchor);
    }

    // icons in contact section
    for (var i = 0; i < socials.length; i++) {
        var anchor = document.createElement("a");
        anchor.className = "social-icon-wrapper";
        anchor.style.padding = "3%";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        anchor.href = link;
        anchor.target = "_blank";

        anchor.appendChild(icon);

        var socialHandlsContact = document.getElementById("social-contact-icons");
        var extraDiv = document.createElement("div");

        socialHandlsContact.appendChild(extraDiv);
        socialHandlsContact.appendChild(anchor);
        socialHandlsContact.appendChild(extraDiv);
    }
}

function mapStatsData() {
    let stats = [
        {
            "value": "1+",
            "text-1": "Years",
            "text-2": "Experience"
        },
        {
            "value": "2+",
            "text-1": "Projects ",
            "text-2": "in review"
        },
        {
            "value": "",
            "text-1": "",
            "text-2": ""
        }
    ];

    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i];
        var value = stat["value"];
        var txt1 = stat["text-1"];
        var txt2 = stat["text-2"];

        var div = document.createElement("div");
        div.className = "stats stats-data";

        var valueText = document.createElement("h1");
        valueText.className = "value";
        valueText.textContent = value;

        var textColumn = document.createElement("div");
        textColumn.className = "stats-label-column";

        var text1 = document.createElement("div");
        text1.className = "label stats-label";
        text1.innerHTML = txt1;

        var text2 = document.createElement("div");
        text2.className = "label stats-label";
        text2.innerHTML = txt2;

        textColumn.appendChild(text1);
        textColumn.appendChild(text2);

        div.appendChild(valueText);
        div.appendChild(textColumn);

        var overaAllStatsDiv = document.getElementById("overall-stats");
        overaAllStatsDiv.append(div);
    }
}