var seeMore = document.getElementById("see-more");
var aboutUs = document.getElementById("about-us");
var seeLess = document.getElementById("see-less");
var counter = 0;


function less()
{
    aboutUs.innerHTML = "Inspired by the objectives and vision of IIC, a MHRD initiative, we have established IIC TMSL. This cell will be conducting various innovation and entrepreneurship related activities along with organizing periodic workshops, seminars and interactions with entrepreneurs and innovators. Students will get a chance... " + `<a id="see-more" onclick="more()">See More</a>`;
}

function more()
{
    aboutUs.innerHTML = "Inspired by the objectives and vision of IIC, a MHRD initiative, we have established IIC TMSL. This cell will be conducting various innovation and entrepreneurship related activities along with organizing periodic workshops, seminars and interactions with entrepreneurs and innovators. Students will get a chance to showcase their talents by participating in various events like Hackathons, idea competitions etc. " + `<a id="see-less" onclick="less()">See Less</a>`;
    
}


