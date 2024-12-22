document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.menu-container');
    const videoContainer = document.querySelector('.video-container');
    const webContainer = document.querySelector('.web-container');
    const backButton = document.querySelector('.back-button');

    const videos = {
        video1: 'https://www.example.com/video1.mp4',
        video2: 'https://www.example.com/video2.mp4',
        video3: 'https://www.example.com/video3.mp4',
        video4: 'https://www.example.com/video4.mp4'
    };

    const webLinks = {
        link1: 'https://www.example.com/page1',
        link2: 'https://www.example.com/page2',
        link3: 'https://www.example.com/page3',
        link4: 'https://www.example.com/page4'
    };

    function showVideo(videoUrl) {
        videoContainer.innerHTML = `<video width="600" controls>
                                        <source src="${videoUrl}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>`;
        menuContainer.style.display = 'none';
        videoContainer.style.display = 'block';
    }

    function showWebPage(url) {
        webContainer.innerHTML = `<iframe src="${url}" width="600" height="400"></iframe>`;
        menuContainer.style.display = 'none';
        webContainer.style.display = 'block';
    }

    function showMenu() {
        menuContainer.style.display = 'block';
        videoContainer.style.display = 'none';
        webContainer.style.display = 'none';
    }

    document.querySelector('#video1').addEventListener('click', () => showVideo(videos.video1));
    document.querySelector('#video2').addEventListener('click', () => showVideo(videos.video2));
    document.querySelector('#video3').addEventListener('click', () => showVideo(videos.video3));
    document.querySelector('#video4').addEventListener('click', () => showVideo(videos.video4));

    document.querySelector('#link1').addEventListener('click', () => showWebPage(webLinks.link1));
    document.querySelector('#link2').addEventListener('click', () => showWebPage(webLinks.link2));
    document.querySelector('#link3').addEventListener('click', () => showWebPage(webLinks.link3));
    document.querySelector('#link4').addEventListener('click', () => showWebPage(webLinks.link4));

    backButton.addEventListener('click', showMenu);
});