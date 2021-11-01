let output = document.getElementById("output");
let input = document.getElementById("input");
const library = ['the','of','to','and','a','in','is','it','you','that','he','was','for','on','are','with','as','I','his','they','be','at','one','have','this','from','or','had','by','not','word','but','what','some','we','can','out','other','were','all','there','when','up','use','your','how','said','an','each','she','which','do','their','time','if','will','way','about','many','then','them','write','would','like','so','these','her','long','make','thing','see','him','two','has','look','more','day','could','go','come','did','number','sound','no','most','people','my','over','know','water','than','call','first','who','may','down','side','been','now','find','any','new','work','part','take','get','place','made','live','where','after','back','little','only','round','man','year','came','show','every','good','me','give','our','under','name','very','through','just','form','sentence','great','think','say','help','low','line','differ','turn','cause','much','mean','before','move','right','boy','old','too','same','tell','does','set','three','want','air','well','also','play','small','end','put','home','read','hand','port','large','spell','add','even','land','here','must','big','high','such','follow','act','why','ask','men','change','went','light','kind','off','need','house','picture','try','us','again','animal','point','mother','world','near','build','self','earth','father','head','stand','own','page','should','country','found','answer','school','grow','study','still','learn','plant','cover','food','sun','four','between','state','keep','eye','never','last','let','thought','city','tree','cross','farm','hard','start','might','story','saw','far','sea','draw','left','late','run','dont','while','press','close','night','real','life','few','north','open','seem','together','next','white','children','begin','got','walk','example','ease','paper','group','always','music','those','both','mark','often','letter','until','mile','river','car','feet','care','second','book','carry','took','science','eat','room','friend','began','idea','fish','mountain','stop','once','base','hear','horse','cut','sure','watch','color','face','wood','main','enough','plain','girl','usual','young','ready','above','ever','red','list','though','feel','talk','bird','soon','body','dog','family','direct','pose','leave','song','measure','door','product','black','short','numeral','class','wind','question','happen','complete','ship','area','half','rock','order','fire','south','problem','piece','told','knew','pass','since','top','whole','king','space','heard','best','hour','better','during','hundred','five','remember','step','early','hold','west','ground','interest','reach','fast','verb','sing','listen','six','table','travel','less','morning','ten','simple','several','vowel','toward','war','lay','against','pattern','slow','center','love','person','money','serve','appear','road','map','rain','rule','govern','pull','cold','notice','voice','unit','power','town','fine','certain','fly','fall','lead','cry','dark','machine','note','wait','plan','figure','star','box','noun','field','rest','correct','able','pound','done','beauty','drive','stood','contain','front','teach','week','final','gave','green','oh','quick','develop','ocean','warm','free','minute','strong','special','mind','behind','clear','tail','produce','fact','street','inch','multiply','nothing','course','stay','wheel','full','force','blue','object','decide','surface','deep','moon','island','foot','system','busy','test','record','boat','common','gold','possible','plane','stead','dry','wonder','laugh','thousand','ago','ran','check','game','shape','equate','hot','miss','brought','heat','snow','tire','bring','yes','distant','fill','east','paint','language','among','grand','ball','yet','wave','drop','heart','am','present','heavy','dance','engine','position','arm','wide','sail','material','size','vary','settle','speak','weight','general','ice','matter','circle','pair','include','divide','syllable','felt','perhaps','pick','sudden','count','square','reason','length','represent','art','subject','region','energy','hunt','probable','bed','brother','egg','ride','cell','believe','fraction','forest','sit','race','window','store','summer','train','sleep','prove','lone','leg','exercise','wall','catch','mount','wish','sky','board','joy','winter','sat','written','wild','instrument','kept','glass','grass','cow','job','edge','sign','visit','past','soft','fun','bright','gas','weather','month','million','bear','finish','happy','hope','flower','clothe','strange','gone','jump','baby','eight','village','meet','root','buy','raise','solve','metal','whether','push','seven','paragraph','third','shall','held','hair','describe','cook','floor','either','result','burn','hill','safe','cat','century','consider','type','law','bit','coast','copy','phrase','silent','tall','sand','soil','roll','temperature','finger','industry','value','fight','lie','beat','excite','natural','view','sense','ear','else','quite','broke','case','middle','kill','son','lake','moment','scale','loud','spring','observe','child','straight','consonant','nation','dictionary','milk','speed','method','organ','pay','age','section','dress','cloud','surprise','quiet','stone','tiny','climb','cool','design','poor','lot','experiment','bottom','key','iron','single','stick','flat','twenty','skin','smile','crease','hole','trade','melody','trip','office','receive','row','mouth','exact','symbol','die','least','trouble','shout','except','wrote','seed','tone','join','suggest','clean','break','lady','yard','rise','bad','blow','oil','blood','touch','grew','cent','mix','team','wire','cost','lost','brown','wear','garden','equal','sent','choose','fell','fit','flow','fair','bank','collect','save','control','decimal','gentle','woman','captain','practice','separate','difficult','doctor','please','protect','noon','whose','locate','ring','character','insect','caught','period','indicate','radio','spoke','atom','human','history','effect','electric','expect','crop','modern','element','hit','student','corner','party','supply','bone','rail','imagine','provide','agree','thus','capital','wont','chair','danger','fruit','rich','thick','soldier','process','operate','guess','necessary','sharp','wing','create','neighbor','wash','bat','rather','crowd','corn','compare','poem','string','bell','depend','meat','rub','tube','famous','dollar','stream','fear','sight','thin','triangle','planet','hurry','chief','colony','clock','mine','tie','enter','major','fresh','search','send','yellow','gun','allow','print','dead','spot','desert','suit','current','lift','rose','continue','block','chart','hat','sell','success','company','subtract','event','particular','deal','swim','term','opposite','wife','shoe','shoulder','spread','arrange','camp','invent','cotton','born','determine','quart','nine','truck','noise','level','chance','gather','shop','stretch','throw','shine','property','column','molecule','select','wrong','gray','repeat','require','broad','prepare','salt','nose','plural','anger','claim','continent','oxygen','sugar','death','pretty','skill','women','season','solution','magnet','silver','thank','branch','match','suffix','especially','fig','afraid','huge','sister','steel','discuss','forward','similar','guide','experience','score','apple','bought','led','pitch','coat','mass','card','band','rope','slip','win','dream','evening','condition','feed','tool','total','basic','smell','valley','nor','double','seat','arrive','master','track','parent','shore','division','sheet','substance','favor','connect','post','spend','chord','fat','glad','original','share','station','dad','bread','charge','proper','bar','offer','segment','slave','duck','instant','market','degree','populate','chick','dear','enemy','reply','drink','occur','support','speech','nature','range','steam','motion','path','liquid','log','meant','quotient','teeth','shell','neck'];
let words = [];
let amountOfWords = 1;
let count = 0;
let score = 0;
let difficulty = "easy";
var nextIncrease = 25;
var speed;
var gameLoop;

input.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        checkInput();
    }
    if(e.code === "Space") {
        e.preventDefault();
        checkInput();
    }
})



setInterval(() => {
    output.scrollTop = output.scrollHeight;
},10);


// Welcome messages.
let iteration = 0;
let gameIsRunning = false;

const home = () => {
    input.value = "";
    score = 0;
    count = 0;
    amountOfWords = 1;
    words = ['example'];


    iteration = 0;
    gameIsRunning = false;
    output.innerHTML = "";
    setInterval(() => {

        switch(iteration) {
            case 0:
                output.innerHTML += `
                    <p>
                    In order to beat the game, you must type all the correct words
                    before they reach the top.
                    </p>
                `;
                iteration++;
                break;
            case 1:
                output.innerHTML += `
                    <p>
                    If an untyped word reaches the top, your hack fails. The speed at which words appear,
                    will gradually increase as you get closer to the server.
                    </p>
                    <br><br>
                    <p>To skip this tutorial and start the game, type y</p>
                    <p>To change the difficulty, type difficulty</p>
                    <p>Type highscore to see highscores</p>
                    <p>To view the help page, type help</p>
                    <p>To get back to this page, type home</p>
                `;
                iteration++;
                break;
            case 2:
                output.innerHTML += `
                    <br><br>
                    <p>
                    Words that are untyped will be grayed out like this:
                    </p>
                    <p class="grey" id="0">example</p>
                    <p>Type the word and hit enter to continue.</p>
                    <br><br>
                    
                `;
                iteration++;
                break;
    
            case 3:
                if(words.includes("example")) {
                    break;
                } else {
                    output.innerHTML += `
                    <br><br>
                    <p>
                    Great job! Type y when you are ready to start!
                    </p>
                `;
                iteration++;
                }
                break;
            default:
                break;
        }
    }, 200)
}

home();


let sDifficulty = false;
const checkInput = () => {
    let val = input.value.trim();

    console.log(speed);
    console.log(count);
    console.log(nextIncrease);


    if(!gameIsRunning && val == "highscore") {
        output.innerHTML = `
        <p class="gold">-- HIGHSCORE --</p>
        <p>Your highscore for easy is ${window.localStorage.getItem("easy_highscore")}</p>
        <p>Your highscore for <asd class="gold">medium</asd> is ${window.localStorage.getItem("medium_highscore")}</p>
        <p>Your highscore for <asd class="red">hard</asd> is ${window.localStorage.getItem("hard_highscore")}</p>
        <p>Your highscore for <asd class="hackerman">hackerman</asd> is ${window.localStorage.getItem("hackerman_highscore")}</p>
        <br><br>
        <p>Type home to go back</p>
        `;
        input.value = "";
        return;
    }

    if(val === "home" && !gameIsRunning) {
        home();
        return;
    }

    if(val === ":(") {
        output.innerHTML += "<p>:)</p>";
        input.value = "";
        return;
    }

    if(!gameIsRunning && val === "help") {
        output.innerHTML = `
            <p class="gold">-- TYPEFRAME --</p>
            <br>
            <p>
                Typeframe is a typing game where the goal is to get as high of a score as possible.
                During a round, words will appear on the screen grayed out. Type them out and hit space or enter.
                If what you typed was correct, the word will turn green. Then you move on to the next word.
                <br><br>
                You get score for every word you type correct. The speed at which new words appear depends on your
                selected difficulty that you can change by typing difficulty. The speed will also increase
                over time.
            </p>
            <br><br>
            <p class="gold">-- COMMANDS --</p>
            <p>help  |  Brings up this menu.</p>
            <p>difficulty  |  To change the difficulty.</p>
            <p>_exit  |  Exit the current round.</p>
            <p>home  |  Go back to start screen.</P>
            <p>highscore  |  See highscores.</p>
            <p>:(  |  :)</p>
            <br><br>
            <p>Type y to start the game.</p>
            
        `;
        input.value = "";
        return;
    }

    if(val === "_exit" && gameIsRunning) {
        stopGame();
    }
    if(val === "y" && !gameIsRunning)  {
        readyToStart = true;
        input.value = "";
        iteration = 10;
        startGame();
        return;
    }

    if(val === "r" && !gameIsRunning) {
        startGame();
        input.value = "";
        return;
    }

    if(val === "difficulty" && !gameIsRunning) {
        sDifficulty = true;
        output.innerHTML = `
        <p>Type your desired difficulty:</p>
        <p>easy</p>
        <p class="gold">medium</p>
        <p class="red">hard</p>
        <p class="hackerman">hackerman</p>
        `;
        input.value = "";
        return;
    }

    if(sDifficulty) {
        switch(val) {
            case "easy":
                difficulty = "easy";
                output.innerHTML = "";
                output.innerHTML += `
                    <p>Difficulty EASY seleceted.</p>
                    <p>Type y to start the game!</p>
                `;
                input.value = "";
                sDifficulty = false;
                break;
            case "medium":
                difficulty = "medium";
                output.innerHTML = "";
                output.innerHTML += `
                    <p>Difficulty</p> <p class="gold">MEDIUM</p> <p>seleceted.</p>
                    <p>Type y to start the game!</p>
                `;
                input.value = "";
                sDifficulty = false;
                break;
            case "hard":
                difficulty = "hard";
                output.innerHTML = "";
                output.innerHTML += `
                    <p>Difficulty</p> <p class="red">HARD</p> <p>seleceted.</p>
                    <p>Type y to start the game!</p>
                `;
                input.value = "";
                sDifficulty = false;
                break;
            case "hackerman":
                difficulty = "hackerman";
                output.innerHTML = "";
                output.innerHTML += `
                    <p>Difficulty</p> <p class="hackerman">HACKERMAN</p> <p>seleceted.</p>
                    <p>Type y to start the game!</p>
                `;
                input.value = "";
                sDifficulty = false;
                break;
            default:
                output.innerHTML = `
                    <p>Type your desired difficulty:</p>
                    <p>easy</p>
                    <p class="gold">medium</p>
                    <p class="red">hard</p>
                    <p class="hackerman">hackerman</p>
                    <br><br>
                    <p class="red">Incorrect value, try again.</p>
                `;
                input.value = "";
                break;
        }
        return;
    }
    
    if(val === words[0]) {
        words.shift();
        document.getElementById(count).classList.remove("grey");
        
        count++;
        score++;
    }
    
    input.value = "";
}

const startGame = () => {
    gameIsRunning = true;
    readyToStart = false;
    output.innerHTML = "";
    score = 0;
    count = 0;
    amountOfWords = 0;
    words = [];
    switch(difficulty) {
        case "easy":
            speed = 1750;
            break;
        case "medium":
            speed = 1000;
            break;
        case "hard":
            speed = 750;
            break;
        case "hackerman":
            speed = 500;
            break;
        default:
            speed = 1000;
            break;
    }
    setInterval(() => {
        output.scrollTop = output.scrollHeight;
    },10);
    gameLoop = setInterval(update, speed);
        
}

function update() {
    if(count == nextIncrease) {
        speed -= 50;
        nextIncrease += 25;
        clearInterval(gameLoop);
        gameLoop = setInterval(update, speed);
        return;
    }
    let word = library[Math.floor(Math.random() * library.length)];
    words.push(word);
    output.innerHTML += `
        <p class="grey" id="${amountOfWords}">${word}</p>
    `;
    amountOfWords++;
    checkForLoss();
}

const stopGame = () => {
    output.innerHTML = "";
    output.innerHTML += `
        <p class="red">Game Over</p>
        <p>Your score: ${score}</p>
        <br><br>
        <p>Type r to restart!</p>
        <p>Type difficulty to adjust the difficulty</p>
        <p>Type home to go back</p>
        <p>Type highscore to see highscores</p>
    `;
    gameIsRunning = false;
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
    }
    let hs = window.localStorage.getItem(difficulty+"_highscore");
    if(score > hs) {
        window.localStorage.setItem(difficulty+"_highscore", score);
    }
    score = 0;
    count = 0;
    amountOfWords = 1;
    words = [];
    nextIncrease = 25;
}

const checkForLoss = () => {
    let elem = document.getElementById(count);
    if(!isVisible(elem, output)) {
        stopGame();
    }
}

const isVisible = function (ele, container) {
    const { bottom, height, top } = ele.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;
};