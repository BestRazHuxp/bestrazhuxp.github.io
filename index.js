
const musics = [];

  const images = [];
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
	"So Long",
	"Đường tôi chở em về (Cukak remix)",
	"Chạy về khóc với anh (Cukak remix)",
	"Lemon",
	"Yoru ni kakeru",
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
  for(let i=0;i<names.length;i++)
{
	musics[i]= './musics/'+names[i]+'.mp3';
	images[i]= './images/'+names[i]+'.jpg';
}
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
	  '" style="text-transform: capitalize;">' +
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
	  cursor:"pointer",
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
	let str = ".Selection" + i;
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
	if(newthumbW > 80&&newthumbW <= 200)
	{
		thumbb.style.opacity = newthumbW / thumbW;
		thumbb.style.width = newthumbW + 'px';
		thumbb.style.height = newthumbW + 'px';
	}
	else if(newthumbW <= 80){
		thumbb.style.width = 80;
		thumbb.style.height = 80;
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
  
  




