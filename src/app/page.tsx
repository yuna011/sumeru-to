import { url } from "inspector";
import { css } from "../../styled-system/css";
import { center, flex } from "../../styled-system/patterns";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div className={css({overflow:"hidden"})}>
      <div className={css({bg:"url(/img/bg.svg) no-repeat"})}>

        <div className={flex({pt:"133px"})}>
          <div className={css({p:"0 150px", fontSize:"40px",  fontWeight:"600"})}>
            <h1>電車内での<br /><span className={css({fontSize:"60px", borderBottom:"5px solid #FFCE6F"})}>”スメルハラスメント”</span><br />で悩んでる方の生活を<br />よりよくするためのアプリ</h1>
            <h1 className={css({fontSize:"120px", fontFamily:"Nico Moji"})}>すめる〜と</h1>
            <div className={flex({w:"30%", gap:"10px"})}>
              <img src="img/app.png" alt="" />
              <img src="img/google.png" alt="" />
            </div>
          </div>

          <div>
            <img src="img/start.png" alt="" className={css({w:"50%"})}/>
          </div>
        </div>

        <div className={css({pt:"288px"})}>
          <h2 className={css({pb:"95px",textAlign:"center", fontSize:"50px", fontWeight:"700", letterSpacing:"10px"})}>こんな<span className={css({borderBottom:"5px solid #FFCE6F"})}>悩み</span>はありませんか？</h2>
          <div className={flex({flexDirection:"column", alignItems:"center"})}>
            <div className={flex({gap:"287px", pb:"40px"})}>
              <img src="/img/worries.svg" alt="" className={css({})}/>
              <img src="/img/worries.svg" alt="" className={css({})}/>
            </div>
            <div className={flex({gap:"86px", color:"#fff", fontSize:"30px", textAlign:"center", fontWeight:"700"})}>
              <h3 className={css({p:"24px 45px",borderRadius:"30px", bgColor:"#6BA6FF"})}>においに敏感で<br />体調が悪くなってしまう</h3>
              <h3 className={css({p:"24px 45px",borderRadius:"30px", bgColor:"#FFCE6F"})}>においに酔ってしまい<br />気分が優れない</h3>
            </div>
            {/* <div className={css({})}>
              <img src="/img/worries.svg" alt="" className={css({pb:"40px"})}/>
              <h3 className={css({p:"24px 45px",borderRadius:"30px",bgColor:"#6BA6FF", color:"#fff", fontSize:"30px"})}>においに敏感で<br></br>体調が悪くなってしまう</h3>
            </div>
            <div className={css({w:"390px"})}>
              <img src="/img/worries2.png" alt="" className={css({w:"41%", pb:"40px"})} />
              <h3 className={css({p:"24px 45px",borderRadius:"30px",bgColor:"#FFCE6F", color:"#fff", fontSize:"30px"})}>においに酔ってしまい<br></br>気分が優れない</h3>
            </div> */}
        </div>

        <div className={flex({})}>
          <img src="/img/train.png" alt="" className={css({overflow:"hidden"})}/>
          <div>
            <p className={css({fontSize:"50px", p:"0 32px"})}><span className={css({fontSize:"130px", fontFamily:"Nico Moji"})}>すめる〜と</span><br />が解決します</p>
          </div>
          <img src="/img/train.png" alt="" className={css({overflow:"hidden"})}/>
        </div>
          
        <div className={css({h:"870px",bgColor:"#FFF0D1"})}>
          <h3 className={css({p:"76px 0 70px",textAlign:"center", color:"#FFA800", fontSize:"50px", fontWeight:"900"})}>メリット</h3>
          <div className={flex({gap:"72px",justifyContent:"center", textAlign:"center"})}>
            <div className={css({flexDirection:"column", fontWeight:"700"})}>
              <img src="/img/merit.png" alt="" className={css({h:"400px",w:"400px",bgColor:"#FFF", borderRadius:"1000"})}/>
              <p className={css({pt:"56px",fontSize:"36px"})}>日常のストレスを軽減</p>
              <p className={css({color:"#585858"})}>電車に乗った後に苦手なにおいで<br />移動する手間が省ける！</p>
            </div>
            <div className={css({flexDirection:"column", fontWeight:"700"})}>
              <img src="/img/merit2.png" alt="" className={css({h:"400px",w:"400px",bgColor:"#FFF", borderRadius:"1000"})}/>
              <p className={css({pt:"56px",fontSize:"36px",})}>自分の苦手なにおいを回避</p>
              <p className={css({color:"#585858"})}>苦手なにおいを登録しているから<br />苦手なにおいを優先的に回避できる！</p>
            </div>
            <div className={css({flexDirection:"column", fontWeight:"700"})}>
              <img src="/img/merit3.png" alt="" className={css({h:"400px",w:"400px",bgColor:"#FFF", borderRadius:"1000"})}/>
              <p className={css({pt:"56px",fontSize:"36px"})}>においが一目でわかる</p>
              <p className={css({color:"#585858"})}>においを”見える化”しているから<br />ぱっと見てにおいの強さがわかる！</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className={css({p:"120px 0 85px",textAlign:"center", fontSize:"50px", fontWeight:"700"})}><span className={css({fontSize:"80px", fontWeight:"700"})}>3step</span>で簡単にアプリが使える♪</h3>
          <div className={flex({w:"1131px",h:"660px",borderRadius: "0px 200px 200px 0px",background: "linear-gradient(180deg, rgba(255, 243, 220, 0.00) 0%, #FFF3DC 100%)"})}>
            <div className={css({flexDirection:"column", pr:"180px"})}>
              <h4 className={css({pl:"40px", fontSize:"120px", fontWeight:"900", WebkitTextStrokeColor:"var(--lp, #F90)", WebkitTextStrokeWidth:"10px", color:"#fff"})}>step1</h4>
              <p className={css({w:"540px",textAlign:"center",fontSize:"70px",fontWeight:"700",color:"#fff" ,borderRadius:"0 0 50px", bg:"#FFCE6F"})}>登録する</p>
              <p className={css({pt:"125px",textAlign:"center",fontSize:"34px", fontWeight:"600"})}>いつも使っている電車や<br />苦手なにおいの登録</p>
            </div>
            <img src="/img/start.png" alt="" className={css({w:"26%",h:"85%"})}/>
          </div>
          
          <div className={flex({mt:"50px",justifyContent:"flex-end", w:"1131px", h:"660px", borderRadius: "200px 0px 0px 200px", background: "linear-gradient(180deg, #FFF0D1 0%, rgba(255, 240, 209, 0.00) 100%)"})}>
          <img src="/img/start.png" alt="" className={css({w:"26%",h:"85%"})}/>
            <div className={css({flexDirection:"column", justifyContent:"flex-end"})}>
              <h4 className={css({pr:"40px", fontSize:"120px", fontWeight:"900",color:"#fff"})}>step2</h4>
              <p className={css({w:"540px",textAlign:"center",fontSize:"70px",fontWeight:"700",color:"#fff" ,borderRadius:"0 0 0 50px", bg:"#FFCE6F"})}>見る</p>
              <p className={css({pt:"125px",textAlign:"center",fontSize:"34px", fontWeight:"600"})}>マイルートのにおい指数で<br />車両をタップして<br />車内がどんなにおいかチェック</p>
            </div>
          </div>

          <div className={flex({w:"1131px",h:"660px",mt:"50px",borderRadius: "0px 200px 200px 0px",background: "linear-gradient(180deg, rgba(255, 243, 220, 0.00) 0%, #FFF3DC 100%)"})}>
            <div className={css({flexDirection:"column", pr:"180px"})}>
              <h4 className={css({pl:"40px", fontSize:"120px", fontWeight:"900", color:"#fff",textShadow: '5px 5px 0 #F90, -5px -5px 0 #F90, 5px -5px 0 #F90, -5px 5px 0 #F90'})}>step3</h4>
              <p className={css({w:"540px",textAlign:"center",fontSize:"70px",fontWeight:"700",color:"#fff" ,borderRadius:"0 0 50px", bg:"#FFCE6F"})}>つぶやく</p>
              <p className={css({pt:"125px",textAlign:"center",fontSize:"34px", fontWeight:"600"})}>電車に乗ったら車内のにおいを<br />つぶやいてにおいを共有</p>
            </div>
            <img src="/img/start.png" alt="" className={css({w:"26%",h:"85%"})}/>
          </div>
        </div>

        <div  className={css({h:"1842px",pt:"147px",textAlign:"center",background: "linear-gradient(180deg, rgba(255, 240, 209, 0.00) 0%, #FFF0D1 100%)"})}>

          <div>
            <h3 className={css({pt:"166px",fontSize:"40px", fontWeight:"700"})}>電車内のにおいをつぶやいてスメルハラスメントで<br />困っている同士、助け合って見ませんか？</h3>
          </div>

          <div className={flex({w:"30%",gap:"130px",textAlign:"center", justifyContent:"center"})}>
                <img src="img/app.png" alt="" />
                <img src="img/google.png" alt="" />
          </div>

          <div><p className={css({bottom:"0", fontSize:"30px", fontWeight:"300"})}>ecc &copy; sumeru-to</p></div>
        </div>
      </div>

      </div>
    </div>
  )
}
