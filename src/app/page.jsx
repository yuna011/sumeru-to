import { css } from "../../styled-system/css";
import { center, flex } from "../../styled-system/patterns";
import { Montserrat } from "@next/font/google";
// import {Niconne} from "next/font/google";
　
// const Niconne = Niconne({
//   weight:"400",
//   preload: false,
// })


export default function Home() {


  return (
    <div className={css({fontSize:"62.5%", overflow:"hidden", color:"#161616"})}>
      <div className={css({bg:"url(/img/bg.svg) no-repeat", w:"100vw",bgSize:"contain"})}>

        <div className={flex({justifyContent:"center",alignItems:"center", pt:"5rem", lineHeight:"2.5rem"})}>
          <div className={css({fontSize:"1.5rem",  fontWeight:"600"})}>
            <h1>電車内での<br /><span className={css({fontSize:"2.5rem",bg:"linear-gradient(transparent 50%, #FFCE6F 0%)",  lineHeight:"4rem"})}>”スメルハラスメント”</span><br />で悩んでる方の生活を<br />よりよくするためのアプリ</h1>
            <h1 className={css({fontSize:"4rem", lineHeight:"6rem"})}>すめる〜と</h1>
            <div className={flex({w:"20%",pt:"1rem", gap:"1rem"})}>
              <img src="img/app.png" alt="" />
              <img src="img/google.png" alt="" />
            </div>
          </div>

          <div className={css({w:"40%", animation:"float"})}>
            <img src="img/first.png" alt="" />
          </div>
        </div>

        <div className={css({pt:"8rem", _hover:{animation:"fadeIn"}})}>
          <h2 className={css({pb:"3rem",textAlign:"center", fontSize:"2rem", fontWeight:"bold", letterSpacing:"0.5rem"})}>こんな<span className={css({bg:"linear-gradient(transparent 50%, #FFCE6F 0%)",textEmphasis:"dot #FFCE6F",letterSpacing:"0"})}>悩み</span>はありませんか？</h2>
          <div className={flex({flexDirection:"column", alignItems:"center"})}>
            <div className={flex({gap:"12rem", pb:"2rem", w:"17%", justifyContent:"center"})}>
              <img src="/img/worries.svg" alt="" className={css({})}/>
              <img src="/img/worries2.svg" alt="" className={css({})}/>
            </div>
            <div className={flex({gap:"7rem", color:"#fff", fontSize:"1rem", textAlign:"center", fontWeight:"bold"})}>
              <h3 className={center({p:"1rem 2.5rem",borderRadius:"30px", bgColor:"#6BA6FF"})}>においに敏感で<br />体調が悪くなってしまう</h3>
              <h3 className={center({p:"1rem 2.5rem",borderRadius:"30px", bgColor:"#FFCE6F"})}>においに酔ってしまい<br />気分が優れない</h3>
            </div>
          </div>
        </div>

        {/* <div>
          <button className={css({w:"100px", padding:"8px", bgColor:"tomato",transition:"1s ease", _hover:{bgColor:"blue"}})}>
          ボタン
          </button>
        </div> */}

        <div className={css({pt:"10rem"})}>
          <div className={center({w:"100vw",h:"50%",pb:"4rem", bgColor:"#fff"})}>
            <img src="/img/train2.svg" alt="" className={css({w:"50%", mr:"2.7rem"})}/>
            <div className={css({position:"relative", _hover:{animation:"zoomIn"}})}>
                <img src="/img/speech.svg" alt="" className={css({w:"50%",position:"absolute",top:"-40px",left:"-10%"})}/>
                <p className={css({fontSize:"70px",fontWeight:"bold",flexShrink:"0",whiteSpace:"nowrap"})}>すめる〜と</p>
                <p className={css({fontSize:"30px",fontWeight:"bold",position:"absolute",bottom:"-40px",left:"25%"})}>が解決します!!</p>
            </div>
            <img src="/img/train2.svg" alt="" className={css({w:"50%"})}/>
          </div>
            
          <div className={css({h:"30%",bgColor:"#FFF0D1"})}>
            <div className={flex({justifyContent:"center", alignItems:"center", gap:"1.5rem"})}>
            <img src="/img/wavy.svg" alt="" className={css({h:"22%", w:"12%"})}/>
              <h3 className={css({p:"2rem 0 1rem",textAlign:"center", color:"#FFA800", fontSize:"2.5rem", fontWeight:"900"})}>メリット</h3>
              <img src="/img/wavy.svg" alt="" className={css({h:"22%", w:"12%"})}/>
            </div>

            <div className={flex({alignItems:"center"})}>
              <div className={flex({gap:"2rem",justifyContent:"center", textAlign:"center", fontWeight:"bold"})}>
                <div className={center({flexDirection:"column", _hover:{transform:"translateY(-20px)"}})}>
                  <img src="/img/merit.png" alt="" className={css({w:"85%",bgColor:"#FFF", borderRadius:"1000"})}/>
                  <p className={css({p:"1rem 0 0.6rem",fontSize:"1.2rem"})}>日常のストレスを軽減</p>
                  <p className={css({color:"#585858"})}>電車に乗った後に苦手なにおいで<br />移動する手間が省ける！</p>
                </div>
                <div className={center({flexDirection:"column", _hover:{transform:"translateY(-20px)"}})}>
                  <img src="/img/merit2.png" alt="" className={css({w:"85%",bgColor:"#FFF", borderRadius:"1000"})}/>
                  <p className={css({p:"1rem 0 0.6rem",fontSize:"1.2rem"})}>自分の苦手なにおいを回避</p>
                  <p className={css({color:"#585858"})}>苦手なにおいを登録しているから<br />苦手なにおいを優先的に回避できる！</p>
                </div>
                <div className={center({flexDirection:"column", _hover:{transform:"translateY(-20px)"}})}>
                  <img src="/img/merit3.png" alt="" className={css({h:"65%",bgColor:"#FFF", borderRadius:"1000"})}/>
                  <p className={css({p:"1rem 0 0.6rem",fontSize:"1.2rem"})}>においが一目でわかる</p>
                  <p className={css({color:"#585858"})}>においを”見える化”しているから<br />ぱっと見てにおいの強さがわかる！</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={css({w:""})}>
          <h3 className={center({p:"6rem 0",fontSize:"2.5rem", fontWeight:"bold", animation:"float"})}><span className={css({fontSize:"5rem", fontWeight:"bold", bg:"linear-gradient(transparent 60%, #FFCE6F 0%)"})}>3step</span>で簡単にアプリが使える♪</h3>

          <div className={flex({w:"48rem",h:"27rem",alignItems:"center", borderRadius: "0px 100px 100px 0px",background: "linear-gradient(180deg, rgba(255, 243, 220, 0.00) 0%, #FFF3DC 100%)"})}>
            <div className={css({flexDirection:"column"})}>
              <div className={css({_hover:{animation:"fadeIn"}})}>
                <h4 className={css({pl:"2rem",fontFamily:"Noto Sans JP" ,fontSize:"5rem", fontWeight:"bold", WebkitTextStrokeColor:"var(--lp, #F90)", WebkitTextStrokeWidth:"0.2rem", color:"#fff"})}>step1</h4>
                <p className={center({w:"27rem",fontSize:"3rem",fontWeight:"bold",color:"#fff" ,borderRadius:"0 0 50px", bg:"#FFCE6F"})}>登録する</p>
              </div>
              <p className={center({pt:"3rem",fontSize:"1.5rem", fontWeight:"600"})}>いつも使っている電車や<br />苦手なにおいの登録</p>
            </div>
            <div className={css({w:"30%", p:"1.5rem 0 0 4rem", _hover:{animation:"float"}})}>
              <img src="/img/start.png" alt="" />
            </div>
          </div>

          <div className={flex({ml:"auto",alignItems: "center", w: "48rem", h: "27rem", borderRadius: "100px 0 0 100px",background: "linear-gradient(180deg, rgba(255, 243, 220, 0.00) 0%, #FFF3DC 100%)"})}>
            <div className={css({w: "30%", p:"1.5rem 4rem 0 0" , ml:"7rem", _hover:{animation:"float"}})}>
              <img src="/img/home.png" alt="" />
            </div>
            <div className={css({flexDirection: "column",textAlign:"right"})}>
            <div className={css({_hover:{animation:"fadeIn"}})}>
              <h4 className={css({pr:"2rem",fontFamily: "Inter", fontSize: "5rem", fontWeight: "bold", WebkitTextStrokeColor: "#F90", WebkitTextStrokeWidth: "0.2rem", color: "#fff"})}>step2</h4>
              <p className={center({w: "27rem", fontSize: "3rem", fontWeight: "bold", color: "#fff", borderRadius: "0 0 0 50px", bg: "#FFCE6F"})}>見る</p>
            </div>
              <p className={center({pt: "3rem", fontSize: "1.5rem", fontWeight: "600"})}>マイルートのにおい指数で<br />車両をタップして<br />車内がどんなにおいかチェック</p>
            </div>
          </div>

          <div className={flex({w:"48rem",h:"27rem", alignItems:"center", borderRadius: "0px 100px 100px 0px",background: "linear-gradient(180deg, rgba(255, 243, 220, 0.00) 0%, #FFF3DC 100%)"})}>
            <div className={css({flexDirection:"column"})}>
            <div className={css({_hover:{animation:"fadeIn"}})}>
              <h4 className={css({justifyContent:"flex-end",pl:"2rem",fontFamily:"Inter" ,fontSize:"5rem", fontWeight:"bold", WebkitTextStrokeColor:"var(--lp, #F90)", WebkitTextStrokeWidth:"0.2rem", color:"#fff"})}>step3</h4>
              <p className={center({w:"27rem",fontSize:"3rem",fontWeight:"bold",color:"#fff" ,borderRadius:"0 0 50px", bg:"#FFCE6F"})}>つぶやく</p>
            </div>
              <p className={center({pt:"3rem",fontSize:"1.5rem", fontWeight:"600"})}>電車に乗ったら車内のにおいを<br />つぶやいてにおいを共有</p>
            </div>
            <div className={css({w:"30%", p:"1.5rem 0 0 4rem", _hover:{animation:"float"}})}>
              <img src="/img/tweet.png" alt="" />
            </div>
          </div>

        </div>

        <div  className={css({bg:"url(/img/footer_bg.svg)",bgSize:"contain",w:"100vw", textAlign:"center"})}>
          <div className={flex({ flexDirection: "row", justifyContent: "center",pt:"13rem", alignItems: "center", gap: "1.5rem", _hover:{animation:"fadeIn"}})}>
            <img src="/img/bar.svg" alt="" className={center({w: "5%"})} />
            <h3 className={center({fontSize: "1.6rem", fontWeight: "bold" })}>
              電車内のにおいをつぶやいてスメルハラスメントで<br />困っている同士、助け合って見ませんか？
            </h3>
            <img src="/img/bar.svg" alt="" className={center({ w: "5%", transform: "rotate(90deg)" })} />
          </div>

          <div className={flex({pt:"8rem",gap:"6rem", justifyContent:"center", alignItems:"center"})}>
            <img src="img/app.png" alt="" className={css({w:"16%"})}/>
            <img src="img/google.png" alt="" className={css({w:"16%"})}/>
          </div>

          <p className={css({p:"15rem 0 3.5rem", fontSize:"1rem", fontWeight:"300"})}>ecc &copy; sumeru-to</p>
        </div>

      </div>
    </div>
  )
}
