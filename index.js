const musics = [
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20Ooh%20Just%20You%20(BeeBB%20REMIX)%20%20L%C3%8A%20THI%E1%BB%86N%20HI%E1%BA%BEU%20OFFICIAL-0OyiGcFXDiU-160k-1660444765382.mp3?v=1660444794568",
	"https://cdn.glitch.me/1be79063-a1e0-41ce-b542-75c81f76f851/Berlin.wav?v=1660446542078",
	"https://cdn.glitch.me/1be79063-a1e0-41ce-b542-75c81f76f851/Yeu%205.wav?v=1660475340036",
	"https://cdn.glitch.me/1be79063-a1e0-41ce-b542-75c81f76f851/Giac%20mo%20rat%20tho.wav?v=1660624355825",
	"https://cdn.glitch.me/1be79063-a1e0-41ce-b542-75c81f76f851/Kem%20duyen.wav?v=1660625914721",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Nguoi%20Em%20Co%20Do%20Orinn%20Remix_%20-%20Rum_%20Daa.mp3?v=1660626247721",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20(%E5%90%9B%E3%81%AE%E5%90%8D%E3%81%AF%20%20Kimi%20no%20Na%20wa)%20Nandemonaiya%20-%20Kamishiraishi%20Mone%20(Maxone%20Remix)%20%E2%99%AA-D4Fi1YBbzDY-160k-1660283439340.mp3?v=1660690080644",
	"https://cdn.glitch.me/1be79063-a1e0-41ce-b542-75c81f76f851/Tuy%20am.wav?v=1660625963433",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Hong%20Kong%201.mp3?v=1660716324977",
	"https://cdn.glitch.me/1be79063-a1e0-41ce-b542-75c81f76f851/Anh%20da%20quen%20voi%20co%20don.wav?v=1660625958208",
	"https://cdn.glitch.me/1be79063-a1e0-41ce-b542-75c81f76f851/So%20Long.wav?v=1660813314271",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/%C4%90%C6%B0%E1%BB%9Dng%20t%C3%B4i%20ch%E1%BB%9F%20em%20v%E1%BB%81%20Cukak%20Remix.mp3?v=1660812438840",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Ch%E1%BA%A1y%20v%E1%BB%81%20kh%C3%B3c%20v%E1%BB%9Bi%20anh%20Cukak%20remix.mp3?v=1660812719025",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20%E7%B1%B3%E6%B4%A5%E7%8E%84%E5%B8%AB%20%20-%20Lemon%20%20Kenshi%20Yonezu-SX_ViT4Ra7k-160k-1660471050919.mp3?v=1660817456611",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20%E3%80%90Vietsub%E3%80%91Yoru%20ni%20Kakeru%E3%80%8C%E5%A4%9C%E3%81%AB%E9%A7%86%E3%81%91%E3%82%8B%E3%80%8DYOASOBI-qerVyrLKzA0-160k-1660110797919.mp3?v=1660928229750",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20YOASOBI%E3%80%8C%E3%81%9F%E3%81%B6%E3%82%93%E3%80%8DOfficial%20Music%20%20Video-8iuLXODzL04-160k-1660189153329.mp3?v=1660928340946",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20Normal%20No%20More%20-%20TYSM%20(Lyrics%20%2B%20Vietsub)%20%20TikTok%20%E2%99%AB-9Euv7GDUl2Q-160k-1660145316549.mp3?v=1660962730110",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20Yeah%20Yeah%20Yeahs%20-%20Heads%20Will%20Roll%20(Jaydon%20Lewis%20Remix)-GTarlWQjil0-160k-1660147216793.mp3?v=1660964798801",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20C%C3%B4%20g%C3%A1i%20m52%20%E2%80%A3%20HuyR%20ft.%20T%C3%B9ng%20Viu%20(bimm%20release)-nHK0u40Ompc-160k-1660155063643.mp3?v=1660972656699",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Ch%E1%BA%A1y%20ngay%20%C4%91i.mp3?v=1660973121796",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Noi%20nay%20co%20anh.mp3?v=1660999497408",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Vi%20yeu%20cu%20dam%20dau.mp3?v=1661000353206",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Muon%20roi%20ma%20sao%20con.mp3?v=1661000543938",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20S%C6%A0N%20T%C3%99NG%20M-TP%20%20C%C3%93%20CH%E1%BA%AEC%20Y%C3%8AU%20L%C3%80%20%C4%90%C3%82Y%20%20OFFICIAL%20MUSIC%20VIDEO-6t-MjBazs3o-160k-1660183163746.mp3?v=1661000821244",
	"https://cdn.glitch.global/1be79063-a1e0-41ce-b542-75c81f76f851/Y2Mate.is%20-%20C%C6%B0%E1%BB%9Bi%20Th%C3%B4i%20-%20Masew%20x%20Masiu%20x%20B%20Ray%20x%20TAP%20(%20Lyrics%20Audio%20)-_8ldAdQd9WU-160k-1660183481101.mp3?v=1661001182601",


];
  const images = [
	"https://i1.sndcdn.com/artworks-Uzf3azSVV1GS3jjq-7XDTaQ-t500x500.jpg",
	"https://i.ytimg.com/vi/6KCff8T5tR0/hqdefault.jpg",
	"https://imgt.taimienphi.vn/cf/Images/2017/4/ti/14/video-lyrics-loi-bai-hat-yeu-5-rhymastic-karaoke-cover.jpg",
	"https://i.scdn.co/image/ab67616d0000b273f3e649671639abc13cff4876",
	"https://i.ytimg.com/vi/cvoyUIIAdrY/maxresdefault.jpg",
	"https://i.ytimg.com/vi/CUBbxuOPHcE/maxresdefault.jpg",
	"https://i1.sndcdn.com/artworks-000203329692-m42wlg-t500x500.jpg",
	"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/f/9/f9c0475ec02716554fba3f63e5b4ac37_1504991428.jpg",
	"https://avatar-ex-swe.nixcdn.com/playlist/2018/10/10/5/b/a/2/1539155622062_500.jpg",
	"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/a/b/ab44498b5b432879428719390baf1180_1490064587.jpg",
	"https://vtv1.mediacdn.vn/thumb_w/640/2019/7/28/vinh-khuat-la-ai-thong-tin-tieu-su-ve-vinh-khuat-20190408-031004-1564292886170116017035.jpg",
	"https://i.scdn.co/image/ab67616d00001e02dcac152b497477aebeb6d35a",
	"https://i.ytimg.com/vi/CiwpC12YFZE/maxresdefault.jpg",
	"https://i1.sndcdn.com/artworks-mVJpUjCi3StSy484-sUSHqQ-t500x500.jpg",
	"https://imgs.ototoy.jp/imgs/jacket/0515/00000003.1583898741.9218_320.jpg",
	"https://data.chiasenhac.com/data/cover/125/124314.jpg",
	"https://i.ytimg.com/vi/9Euv7GDUl2Q/maxresdefault.jpg",
	"https://i.ytimg.com/vi/GTarlWQjil0/maxresdefault.jpg",
	"https://i.scdn.co/image/ab67616d0000b2736826d1bdc990f19a6c2e4840",
	"https://avatar-ex-swe.nixcdn.com/song/2018/07/05/2/4/9/c/1530757427354_640.jpg",
	"https://upload.wikimedia.org/wikipedia/vi/1/1d/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_Single_Cover.jpg",
	"https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/3/a/c/03ac82cbf720ea5d24129dc5a2bb5bbe.jpg",
	"https://i.ytimg.com/vi_webp/xypzmu5mMPY/maxresdefault.webp",
	"https://i.ytimg.com/vi/6t-MjBazs3o/maxresdefault.jpg",
	"https://i.scdn.co/image/ab67616d0000b2737cd903c07645cda72a2d59cd",
	
  ];
  const image = document.getElementById("image");
  const song = document.getElementById("song");
  const name = document.getElementById("name");
  const durationTime = document.querySelector(".duration");
  const remainingTime = document.querySelector(".remaining");
  const names = [
	"Ooh Just You",
	"Berlin",
	"Yêu 5",
	"Giấc mơ rất thơ",
	"Kém duyên",
	"Người em cố đô",
	"Nandemonaiya",
	"Túy âm",
	"Hong Kong 1",
	"Anh đã quen với cô đơn",
	"So Long (fav one)",
	"Đường tôi chở em về (Cukak remix)",
	"Chạy về khóc với anh (Cukak remix)",
	"Lemon",
	"Yoru ni Kakeru",
	"Tabun",
	"Normal no more",
	"Heads Will Roll (Jaydon Lewis Remix)",
	"Cô gái m52",
	"Chạy ngay đi (ONIONN REMIX)",
	"Nơi này có anh",
	"Vì yêu cứ đâm đầu",
	"Muộn rồi mà sao còn",
	"Có chắc yêu là đây",
	"Cưới thôi",
  ];
  let checker = [];
  let newdiv;
  let divClass;
  let huhu = true;
  let nums = 0;
  const playlistcheck = [];
  for (let i = 0; i < musics.length; i++) {
	checker[i]=false;
	playlistcheck[i] = false;
	newdiv = document.createElement("div");
	divClass = "Selection" + i;
	newdiv.setAttribute("class", divClass);
	newdiv.setAttribute("id", "lol" + i);
	document.getElementById("buh").appendChild(newdiv);
  }
  let Selectionstyle = {
	backgroundColor: "pink",
	maxWidth: "500px",
	maxHeight: "50px",
	margin: "15px auto",
	borderRadius: "10px",
	padding: "5px 0 5px 5px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	fontSize: "14px",
	marginBottom: "40x",
	width:"350px",
  };
  const k = document.getElementById("lol0");
  for (let i = 0; i < musics.length; i++) {
	const hoi = document.getElementById("lol" + i);
	hoi.innerHTML =
	  '<div class="thumb' +
	  i +
	  '" id="hi' +
	  i +
	  '"><img id="img' +
	  i +
	  '" src="' +
	  images[i] +
	  '"/></div><div class="name' +
	  i +
	  '">' +
	  names[i] +
	  '</div><div class="play' +
	  i +
	  '" id="ok' +
	  i +
	  '"> <ion-icon name="play"-></ion-icon></div>';
	const styles = {
	  width: "40px",
	  height: "40px",
	  backgroundColor: "white",
	  display: "flex",
	  justifyContent: "center",
	  alignItems: "center",
	  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
	  fontSize: "20px",
	  borderRadius: "100rem",
	  margin: "0 10px 0 0",
	  cursor:"pointer",
	};
	const bruh = {
		
	}
	const pic = {
	  width: "50px",
	  height: "50px",
	  margin: "0 0 0 0",
	  padding: "0 0 0 0",
	};
	const picimg = {
	  width: "100%",
	  height: "100%",
	  objectFit: "cover",
	  borderRadius: "8px",
	  maxWidth: "50px",
	};
	Selectionstyle = {
	  backgroundColor: "#27ae60",
	  maxWidth: "500px",
	  maxHeight: "50px",
	  margin: "15px auto",
	  borderRadius: "10px",
	  padding: "5px 0 5px 5px",
	  display: "flex",
	  justifyContent: "space-between",
	  alignItems: "center",
	  width : "400px",
	  fontSize: "14px",
	  marginBottom: "40x",
	};
	const hihi = document.getElementById("img" + i);
	const hehe = document.getElementById("ok" + i);
	const hoho = document.getElementById("hi" + i);
	const kaka = document.getElementById("lol" + i);
	Object.assign(hoho.style, pic);
	Object.assign(hehe.style, styles);
	Object.assign(hihi.style, picimg);
	Object.assign(kaka.style, Selectionstyle);
  }
  const Selectionstyle0 = {
	backgroundColor: "#1abc9c",
	maxWidth: "500px",
	maxHeight: "50px",
	margin: "15px auto",
	borderRadius: "10px",
	padding: "5px 0 5px 5px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	fontSize: "14px",
	marginBottom: "40x",
  };
  Object.assign(k.style, Selectionstyle0);
  const playlist = [];
  let p = 0;

  for (let i = 0; i < musics.length; i++) {
	let str = ".play" + i;
	playlist[i] = document.querySelector(str);
	playlist[i].addEventListener("click", function () {
	  playMusics(i);
	});
  }
  function playPauseplaylist(i) {
	const st = ".play" + i;
	if (isPlaying) {
	  playBtnplaylist.innerHTML = '<ion-icon name="pause"></ion-icon>';
	  isPlaying = false;
	  song.play();
	} else {
	  playBtnplaylist.innerHTML = '<ion-icon name="pause"></ion-icon>';
	  isPlaying = true;
	  song.pause();
	}
	isPlaying = true;
	playPause();
  }
  function playMusics(num) {
	const hihi = document.querySelector(".play" + num);
	const hoho = document.querySelector(".play" + nums);
	const keke = document.getElementById("lol" + num);
	const hehe = document.getElementById("lol" + nums);
	const s1 = "lol" + num;
	const s2 = "lol" + nums;
	console.log(num);
	if (num == nums) {
	  playPause();
	} else {
	  Object.assign(keke.style, Selectionstyle0);
	  Object.assign(hehe.style, Selectionstyle);
	  isPlaying = true;
	  playPause();
	  hoho.innerHTML = '<ion-icon name="play"></ion-icon>';
	  nums = num;
	  song.setAttribute("src", musics[num]);
	  image.innerHTML = '<img  src="' + images[num] + '">';
	  name.innerHTML = names[num];
	  song.play();
	  playlistcheck[num] = false;
	}
	if (!playlistcheck[num]) {
	  hihi.innerHTML = '<ion-icon name="pause"></ion-icon>';
	  playlistcheck[num] = true;
	} else if (playlistcheck[num]) {
	  hihi.innerHTML = '<ion-icon name="play"></ion-icon>';
	  playlistcheck[num] = false;
	}
  }
  const rangeBar = document.querySelector(".range");
  console.log(musics.length);
  const playBtn = document.querySelector(".player-inner");
  song.setAttribute("src", musics[0]);
  const prevBtn = document.querySelector(".play-prev");
  const nextBtn = document.querySelector(".play-next");
  const skipBtn = document.querySelector(".play-forward");
  const backBtn = document.querySelector(".play-back");
  skipBtn.addEventListener("click", function () {
	skip5s(1);
  });
  backBtn.addEventListener("click", function () {
	skip5s(-1);
  });
  
  prevBtn.addEventListener("click", function () {
	changeSong(-1);
  });
  nextBtn.addEventListener("click", function () {
	changeSong(1);
  });
  nextBtn.addEventListener("click", displayTimer);
  prevBtn.addEventListener("click", displayTimer);
  let isPlaying = true;
  function changeSong(num) {
	const hihi = document.querySelector(".play" + nums);
	const hehe = document.getElementById("lol" + nums);
	Object.assign(hehe.style, Selectionstyle);
	hihi.innerHTML = '<ion-icon name="play"></ion-icon>';
	if(israndom)
	{
		concu()
	}
	else{
	if (num == -1) {
	  if (nums + num < 0) {
		nums = musics.length - 1;
	  } else {
		nums--;
	  }
	  song.setAttribute("src", musics[nums]);
	}
	if (num == 1) {
	  if (nums + num >= musics.length) {
		nums = 0;
	  } else {
		nums++;
	  }
	  song.setAttribute("src", musics[nums]);
	}
}
	const keke = document.getElementById("lol" + nums);
	Object.assign(keke.style, Selectionstyle0);
	image.innerHTML = '<img  src="' + images[nums] + '">';
	isPlaying = true;
	playPause();
	name.innerHTML = names[nums];
  }
  playBtn.addEventListener("click", playPause);
  function playPause() {
	const playBtnplaylist = document.querySelector(".play" + nums);
	if (isPlaying) {
	  song.play();
	  playBtn.innerHTML = '<ion-icon name="pause"></ion-icon>';
	  playBtnplaylist.innerHTML = '<ion-icon name="pause"></ion-icon>';
	  playlistcheck[nums] = false;
	  isPlaying = false;
	} else {
	  song.pause();
	  playBtn.innerHTML = '<ion-icon name="play"></ion-icon>';
	  playBtnplaylist.innerHTML = '<ion-icon name="play"></ion-icon>';
	  isPlaying = true;
	  playlistcheck[nums] = true;
	}
  }
  function displayTimer() {
	const { duration, currentTime } = song;
	const hoho = document.querySelector(".play" + nums);
	if (duration == currentTime) {
	  hoho.innerHTML = '<ion-icon name="play"></ion-icon>';
	  if(isRepeat)
	  {
		song.play();
		hoho.innerHTML = '<ion-icon name="pause"></ion-icon>';
	  }
	  
	  else{
	  changeSong(1);
	  }
	}
	rangeBar.max = duration;
	rangeBar.value = song.currentTime;
	if (!duration) {
	  durationTime.textContent = "0:00";
	} else {
	  durationTime.textContent = formatTimer(currentTime);
	  remainingTime.textContent = "-" + formatTimer(duration - currentTime);
	}
  }
  function formatTimer(number) {
	const minutes = Math.floor(number / 60);
	const seconds = Math.floor(number - minutes * 60);
	if (seconds < 10) {
	  s = minutes + ":0" + seconds;
	} else {
	  s = minutes + ":" + seconds;
	}
	return s;
  }
  displayTimer();
  const rangebarr = setInterval(displayTimer, 1000);
  rangeBar.addEventListener("change", handleRangebarChanging);
  function handleRangebarChanging() {
	song.currentTime = rangeBar.value;
  }
  function skip5s(number) {
	if (number == 1) {
	  number = 5;
	} else {
	  number = -5;
	}
	song.currentTime = song.currentTime + number;
}
  function randomfunc(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }
  const shuffle = document.querySelector('.shuffle');
  function checking()
  {
	for(let i=0;i<musics.length;i++) {
		if(checker[i]==false)
		{
			return false;
		}
	}
	return true;

  }
  function concu(){
	let index = randomfunc(0,musics.length);
	if(checking()==true){
		console.log(checking());
		for(let i = 0; i < musics.length; i++)
			{
				checker[i]=false;
			}
	}
	checker[nums]=true;
		while(checker[index]==true&&checking()==false)
		{
			index = randomfunc(0,musics.length);
		}
		if(checker[index]==false)
		{
			playMusics(index);
			checker[index] = true;
		}
		
  }
  let israndom = false;
  function randomplay()
  {
	if(!israndom)
	{
		checker[nums]=true;
		shuffle.setAttribute('style','color:white;');
		israndom = true;
	}
	else{
		shuffle.setAttribute('style','color:black;');
		for(let i = 0; i < musics.length; i++)
		{
			checker[i]=false;
		}
		israndom = false;
	}
  }
  shuffle.addEventListener("click",randomplay);
  const reapeatBtn = document.querySelector('.repeat');
  let isRepeat = false;
  function repeatSong()
  {
		if(!isRepeat)
		{
			reapeatBtn.setAttribute('style','color:white;');
			isRepeat = true;
		}
		else{
			reapeatBtn.setAttribute('style','color:black;');
			isRepeat = false;
		}
  }
  
  reapeatBtn.addEventListener("click",repeatSong);
  const Selections = document.querySelector('.selection');
  const thumbb = document.querySelector('.thumb');
  Selections.addEventListener("scroll",function()
  {
	const scroll_value = Selections.scrollTop;
	
	const newthumbW = thumbW - scroll_value;
	const newMusicH = musicH - scroll_value;
	const newSelectionsH = SelectionsH + scroll_value;
	if(newthumbW > 0&&newthumbW <= 200)
	{
		thumbb.style.opacity= newthumbW / thumbW;
		thumbb.style.width = newthumbW + 'px';
		thumbb.style.height = newthumbW + 'px';
	}
	else if(newthumbW <= 0){
		thumbb.style.width = 0;
		thumbb.style.height = 0;
	}
	else if(newthumbW >= 200)
	{
		thumbb.style.width = 200;
		thumbb.style.height = 200;
	}
	
	
	
	/*if(newSelectionsH <400)
	{
		Selections.style.height=newSelectionsH + 'px';
	}
	else{
		Selections.style.height=400 + 'px';
	}*/
  });
  const thumbW = thumbb.offsetWidth;
  const musicc = document.querySelector('.music');
  
  const musicH = musicc.offsetHeight;
  
  const SelectionsH = Selections.offsetHeight;
  
  




