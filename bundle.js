(()=>{"use strict";(()=>{let l=null,o={},t={letter:null,backspace:null,enter:null,reset:null};function r(e,t,r,s){let a=document.createElement("div");return o[e]=a,a.innerText=t,""!=r&&a.classList.add(r),a.addEventListener("click",s),l.appendChild(a),a}function s(e,t){let r=o[e];r.classList.add(t)}const a=JSON.parse('["about","above","abuse","actor","adapt","admit","adopt","adult","after","again","agent","agree","ahead","album","alive","allow","alone","along","alter","among","anger","angle","angry","apart","apple","apply","argue","arise","armed","Asian","aside","asset","avoid","award","aware","awful","badly","basic","basis","beach","begin","being","below","bench","Bible","birth","black","blade","blame","blind","block","blood","board","brain","brand","bread","break","brick","brief","bring","broad","brown","brush","build","bunch","buyer","cabin","cable","carry","catch","cause","chain","chair","chart","chase","cheap","check","cheek","chest","chief","child","civil","claim","class","clean","clear","climb","clock","close","cloud","coach","coast","color","couch","could","count","court","cover","crack","craft","crash","crazy","cream","crime","cross","crowd","cycle","daily","dance","death","delay","depth","dirty","doubt","dozen","draft","drama","dream","dress","drink","drive","eager","early","earth","eight","elect","elite","empty","enemy","enjoy","enter","entry","equal","error","essay","event","every","exact","exist","extra","faith","false","fault","favor","fence","fewer","fiber","field","fifth","fifty","fight","final","first","flame","flesh","float","floor","focus","force","forth","found","frame","fresh","front","fruit","fully","funny","ghost","giant","given","glass","glove","grade","grain","grand","grant","grass","grave","great","green","group","guard","guess","guest","guide","habit","happy","heart","heavy","hello","honey","honor","horse","hotel","house","human","humor","ideal","image","imply","index","inner","Iraqi","Irish","issue","joint","judge","juice","knife","knock","label","labor","large","later","Latin","laugh","layer","learn","least","leave","legal","lemon","level","light","limit","local","loose","lover","lower","lucky","lunch","major","maker","marry","match","maybe","mayor","media","metal","meter","might","minor","model","money","month","moral","motor","mount","mouse","mouth","movie","music","naked","nerve","never","newly","night","noise","north","novel","nurse","occur","ocean","offer","often","onion","order","other","ought","owner","paint","panel","paper","party","patch","pause","peace","phase","phone","photo","piano","piece","pilot","pitch","place","plane","plant","plate","point","porch","pound","power","press","price","pride","prime","print","prior","proof","proud","prove","quick","quiet","quite","quote","radio","raise","range","rapid","ratio","reach","react","ready","refer","relax","reply","rifle","right","river","rough","round","route","rural","salad","sales","sauce","scale","scene","scope","score","seize","sense","serve","seven","shade","shake","shall","shape","share","sharp","sheet","shelf","shell","shift","shine","shirt","shock","shoot","shore","short","shout","shrug","sight","since","skill","slave","sleep","slice","slide","small","smart","smell","smile","smoke","solar","solid","solve","sorry","sound","south","space","speak","speed","spend","split","sport","staff","stage","stair","stake","stand","stare","start","state","steal","steel","stick","still","stock","stone","store","storm","story","strip","study","stuff","style","sugar","super","swear","sweep","sweet","swing","table","taste","teach","terms","thank","their","theme","there","these","thick","thing","think","third","those","three","throw","tight","tired","title","today","tooth","topic","total","touch","tough","tower","trace","track","trade","trail","train","treat","trend","trial","tribe","trick","troop","truck","truly","trust","truth","twice","uncle","under","union","until","upper","urban","usual","value","video","virus","visit","vital","voice","voter","waste","watch","water","weigh","wheel","where","which","while","white","whole","whose","woman","works","world","worry","worth","would","wound","write","wrong","yield","young","yours","youth"]');function i(){return a[e=a.length,Math.floor(Math.random()*e)];var e}class n{currentWordClass="current";correctClass="correct";offsetClass="offset";shadowClass="shadow-letter";selectedLetterClass="rainbow";container=null;letters=null;shadow=null;constructor(e,t){this.shadow=t,null!=e&&(this.generate(e),this.addShadowAll(t))}generate=e=>{this.container=document.createElement("div"),this.container.classList.add("word-line"),setTimeout(()=>this.container.classList.add("show"),0),this.letters=[];for(let e=0;e<5;e++){let e=document.createElement("div");e.classList.add("letter"),e.innerText="",this.container.appendChild(e),this.letters.push(e)}this.letters[0].classList.add(this.selectedLetterClass),e.appendChild(this.container)};select=()=>{this.container.classList.add(this.currentWordClass)};deselect=()=>{this.container.classList.remove(this.currentWordClass)};addLetter=(e,t,r=!0)=>{let s=this.letters[t];s.innerText=e.toUpperCase(),s.classList.remove(this.shadowClass),r&&(s.classList.remove(this.selectedLetterClass),t<4&&this.letters[t+1].classList.add(this.selectedLetterClass))};removeLetter=(e,t=!0)=>{" "==this.shadow[e]?this.letters[e].innerText="":this.addShadow(e),t&&0<e&&(this.letters[e+1].classList.remove(this.selectedLetterClass),this.letters[e].classList.add(this.selectedLetterClass))};setColors=e=>{for(var t in this.letters)1==e[t]?this.letters[t].classList.add(this.offsetClass):2==e[t]&&this.letters[t].classList.add(this.correctClass)};addShadow=e=>{this.addLetter(this.shadow[e],e,!1),this.letters[e].classList.add(this.shadowClass)};addShadowAll=()=>{for(var e in this.shadow)" "!=this.shadow[e]&&this.addShadow(e)};delete=()=>{for(var e of this.letters)e.remove();this.container.remove()}}let c=null,h=[],d={word:0,letter:0},u=[" "," "," "," "," "],f=[" "," "," "," "," "],p="";function e(e){if(f=[" "," "," "," "," "],p=i(),!e){for(var t of h)t.delete();d.word=0,d.letter=0,u=[" "," "," "," "," "],f=[" "," "," "," "," "],function(){for(const e in o){const t=o[e];t.classList.remove("disabled"),t.classList.remove("offset"),t.classList.remove("correct")}}()}m()}function m(){var e=h.length;h.push(new n(c,f)),h[e].select(),d.word=e,d.letter=0,u=[" "," "," "," "," "]}var w;!function(){l=document.getElementById("keyboard-wrapper");for(const e of"abcdefghijklmnopqrstuvwxyz")r(e,e.toUpperCase(),"",()=>t.letter(e));r("hidden","","hidden",null),r("del","←","backpsace",()=>t.backspace()),r("res","⟲","reset",()=>t.reset())}(),w=function(e,t){d.letter<5&&(h[d.word].addLetter(e,d.letter),u[d.letter]=e,d.letter++),5==d.letter&&function(){if(u.join("")==p)return h[d.word].setColors([2,2,2,2,2]);var e=function(){let e=[0,0,0,0,0];for(var t in u)-1<p.indexOf(u[t])&&(e[t]=1);for(var r in u)u[r]==p[r]&&(e[r]=2);return e}();h[d.word].setColors(e),function(e,t){for(var r in e)0==e[r]?s(t[r],"disabled"):1==e[r]?s(t[r],"offset"):2==e[r]&&s(t[r],"correct")}(e,u),function(e){for(var t in e)2==e[t]&&(f[t]=u[t])}(e),m()}()},t.letter=w,t.backspace=function(){0<d.letter&&(d.letter--,h[d.word].removeLetter(d.letter),u[d.letter]=" ")},t.reset=function(){e(!1)},c=document.getElementById("guess-wrapper"),e(!0)})()})();
//# sourceMappingURL=bundle.js.map