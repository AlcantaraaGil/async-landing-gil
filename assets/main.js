const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCh55mieTfsNX6I_1EI1Lttw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '89bed9866dmshb3a6e0ac0faf3f6p108f6bjsnc17bad336b15',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchdata (urlApi){
    const response= await fetch(urlApi,options);
    const data= await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchdata(url);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
                </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch(error){
        console.log(error);
    }
})();




// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }