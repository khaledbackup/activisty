import React from "react";
import { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageGallery from "react-image-gallery";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./project1.css";
import Footer from "../footer";

const Msaken = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
       
      <div>
        <section id="banner" class="bg-img" data-bg="msaken.jpg">
          <div class="inner">
            <header>
              
              <h1> مساكن البية</h1>
              <p>
                على خاطر مساكن مزيانة و غنية بعاداتها و موروثاتها الثقافية من
                معالمنا التراثية
              </p>
             
             
             
            </header>
          </div>
        </section>
      </div>
      <div class="videoBgWrapper">

        <Container>
          <Row>

          <Col lg= {12} >
                    <div >
                <h1 className="title "> حكايتنا</h1>
                <p style = {{margin:"3%"}}>
                  حكايتنا حكاية مزيانة حكاية ينسجها الواقع بالخيال حكاية زمان واوطان.....
                  اما زعما شنيا حكايات الصغيرات كان تحبوا تعرفوا هالصغيرات فاش قاعدين
                  يعملوا تبعونا
                </p>
                </div>
          
                <iframe src="https://www.facebook.com/plugins/video.php?height=628&href=https%3A%2F%2Fwww.facebook.com%2FActiveCitizensTunisia%2Fvideos%2F679298652770419%2F&show_text=false&width=1120"  width = "100%" height = "628"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
          </Col>
          </Row>


        </Container>
      
              </div>
              

      <Container style={{marginTop:"10%"}} className="container">
        <Row>
          <Col lg={7}>
            <div>
              <AwesomeSlider>
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124769709_122663289617635_7617068100622872300_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=cyJmljapMQwAX_yxv4P&_nc_ht=scontent.ftun2-1.fna&oh=96d4fd279c461fffde13edb6ce834def&oe=5FD229E5" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124778330_122663326284298_4423227764548501298_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ZlBOIWeC5T8AX_S7LSO&_nc_ht=scontent.ftun2-1.fna&oh=7b79c58456bc2ac873024cde74bc11c5&oe=5FD3089E" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124379757_122663372950960_6360289374978826486_o.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=FJ-AlO78SUMAX9myA8Y&_nc_ht=scontent.ftun2-1.fna&oh=aa247cf37c5fca99072d9e702ece1ad7&oe=5FD47F5F" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124277513_122663409617623_8255925358376594572_o.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=rwUlF-cmHwAAX-Kgw3p&_nc_ht=scontent.ftun2-1.fna&oh=005a54c63af53c47d55bba801154f739&oe=5FD2C1EB" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124517549_122663406284290_1267390945435979946_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=wEfr9yvmTIEAX_cUwuy&_nc_ht=scontent.ftun2-1.fna&oh=d4aae1ffa265b483c2f99e92777edbd6&oe=5FD5C915" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124197119_122663442950953_3998376354223452898_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=sI4xdyifPt4AX_inAfr&_nc_ht=scontent.ftun2-1.fna&oh=42038118900683f7142a71ba3819744a&oe=5FD2AEE1" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124812812_122663356284295_4002967632429927586_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=XC7FFtxpofYAX8koGwk&_nc_ht=scontent.ftun2-1.fna&oh=4be849118d3c61aeb3e95c32d924eb13&oe=5FD60463" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124262191_122663432950954_4804299285418305979_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=rEjqRmOE3sQAX_QvrVI&_nc_ht=scontent.ftun2-1.fna&oh=7455b71d7a55dd333b3141b7ec05563a&oe=5FD48158" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124368257_122663429617621_3178378420625506581_o.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=HCmhEnTzRQoAX8SIfV3&_nc_ht=scontent.ftun2-1.fna&oh=bb44f299341eaa01ec69d1d790e634b9&oe=5FD577D4" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124211178_122663436284287_7630111569554077144_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=fI3ORaBKJiEAX-L7Dri&_nc_ht=scontent.ftun2-1.fna&oh=b535316250ecb8e766f31fe04417b43a&oe=5FD53961" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124443922_122663439617620_5134203679704860901_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=FPnC_P4A18wAX_oMGt2&_nc_ht=scontent.ftun2-1.fna&oh=e773e48276a1a6f8f2c2c43bcadce518&oe=5FD505D2" />
                <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124408113_122663346284296_6546071168436725205_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=8ikUQapnU68AX_NmqBp&_nc_ht=scontent.ftun2-1.fna&oh=03c17f08e5579e4a47d17db38bb6013e&oe=5FD5A1C2" />
              </AwesomeSlider>
            </div>
          </Col>
          <Col className="discription">
          <p style = {{fontSize : "20px", fontWeight : "bold"}}>في النهار مساكن و في الليل سكاكن</p>
            حكايتنا لليوم نتمناو تكون عجبتكم و ميزالوا عنا برشا حكايات علي
            مدينتنا لمزيانة ، تبعونا باش تعرفوا اكثر تفاصيل و شكرا على دعمكم و
            رسائلكم لحلوة برشا 💗💗
          </Col>
        </Row>
      </Container>
      
      <Container className="container">
        <Row>
          <Col className="discription">
          <p style = {{fontSize : "20px", fontWeight : "bold"}}>حكاية الجامع الوسطاني</p>
            حكاية الجامع الوسطاني و القصور الخمسة نتمناو تكون عجبتكم و نشكروا
            المرحوم محمود الڨزاح الي كان مصدر اساسي لتفاصيل هذه القصة عبر كتاب
            المدخل لتاريخ مدينة مساكن و اعمال الندوة العلمية الاولى حول تاريخ
            مساكن و متساكني مدينة مساكن الي مثلوا مصدر قيم و ميزالو عنا برشا
            حكايات على مدينتنا المزيانة، تبعونا باش تعرفو أكثر تفاصيل و شكرا
            على دعمكم و الرسائل الايجابية الي جاتنا ♥️
          </Col>
          <Col lg={7} style = {{marginTop:"10%"}}>
            <AwesomeSlider>
              <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/123750103_120614013155896_1340787162275498841_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=GbVheF8TTVoAX9vpSBx&_nc_oc=AQmcaCKvBkOgA86fBwjVgGkkrEFINuVkp5cqIRF1cBgGzFdPi1l5grTVwClpbydqmXY&_nc_ht=scontent.ftun2-1.fna&oh=37483901ce8ff469d7e9aae606540522&oe=5FD5F7A1" />
              <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/123722960_120614036489227_4376175386595122602_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Y_BS-yWZRK8AX92-6jf&_nc_ht=scontent.ftun2-1.fna&oh=88004ab0db7c4275e0dea453d82dd278&oe=5FD47D30" />
              <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/123717058_120614063155891_3607897605193527089_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=vyCzpXNMsWMAX_Eg4A0&_nc_ht=scontent.ftun2-1.fna&oh=f162d8250a8915aaa421b73703f4f837&oe=5FD331CD" />
              <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124171555_120614103155887_3652560337298346517_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=3AJTQSvj4b4AX--GpPP&_nc_ht=scontent.ftun2-1.fna&oh=f5987f5de673a294e6b7bf951b967055&oe=5FD2DBE0" />
              <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124056654_120614126489218_1323191963507011813_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=IBcrGGIY8GMAX8r74KH&_nc_ht=scontent.ftun2-1.fna&oh=42aa433339380160759d4b8e540c5e0f&oe=5FD2FF8F" />
              <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/123856309_120614146489216_3864475326631605828_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=pARD56Fs-8wAX_3m6JW&_nc_ht=scontent.ftun2-1.fna&oh=1b825d3cb3774f73fa058946d4d852b6&oe=5FD3D9E8" />
              <div data-src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/123996890_120614173155880_7392459741530981397_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=UxKI_KWwAVQAX9ez7m5&_nc_ht=scontent.ftun2-1.fna&oh=5ea35f30b30c6a85bb8d0170472d5f03&oe=5FD3A902" />
              
            </AwesomeSlider>
          </Col>
        </Row>
      </Container>
      
      <Container  className="container">
        <Row>
          <Col lg={7} style = {{marginTop:"10%"}}>
            <div>
              <AwesomeSlider>
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125485677_128913415659289_6992562791649082597_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=aVpMC1D_gBsAX-mKaTI&_nc_ht=scontent.ftun3-1.fna&oh=4a91d21fdddaae56b1236a04b7882436&oe=5FDAF5A2" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125833025_128913448992619_7282176047509705613_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=7JaZkC4oMvAAX-05xPO&_nc_ht=scontent.ftun3-1.fna&oh=40e3795de3dd03eb7f04f9ba69f98184&oe=5FD98824" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125523427_128913482325949_5993104466956186895_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=1BBXDm3WW7oAX_1obI-&_nc_ht=scontent.ftun3-1.fna&oh=537fc5c8ecd7398c91ef0299bdcf16ad&oe=5FDD0D47" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125474137_128913505659280_4709335559117542773_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=NWNaM3Fi4GIAX-3gfre&_nc_ht=scontent.ftun3-1.fna&oh=e1b4bf8c98674e13bd698cb2ea88b44d&oe=5FDB1B81" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125460049_128913528992611_2528878660823598687_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=j1ukWxeoEj4AX-sMZGt&_nc_ht=scontent.ftun3-1.fna&oh=0e0fa4e8cfc74ba4d6df40f4aedbf4c9&oe=5FDBB4EB" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/126113679_128913545659276_8170572151842890443_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=BbZ2LbL1hbwAX-x-Rja&_nc_ht=scontent.ftun3-1.fna&oh=6a12cdc547784f7b151699e4312ebf62&oe=5FDC40FA" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125464490_128913578992606_5202541169864286761_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=BMFgo9JGgtUAX9o9oyc&_nc_ht=scontent.ftun3-1.fna&oh=75c2df931cc3da0bf73cb880a0864edd&oe=5FDCA087" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125929289_128913615659269_847854107159447483_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=hT50cIaMWQQAX8IvG_B&_nc_ht=scontent.ftun3-1.fna&oh=210b6d866f89acab7460472b256fe711&oe=5FDB8B53" />
                
              </AwesomeSlider>
            </div>
          </Col>
          <Col className="discription">
          <p style = {{fontSize : "20px", fontWeight : "bold"}}>حكاية حسن المڤرون</p>
            هاذي كانت حكايتنا لليوم نتمناو تكون عجبتكم و ميزالوا عنا برشا حكايات علي مدينتنا لمزيانة ، تبعونا باش تعرفوا اكثر تفاصيل و شكرا على دعمكم و رسائلكم 
لحلوة برشا 💗💗
المصدر : إتحاف أهل الزمان بأخبار ملوك تونس وعهد الأمان لابن أبي ضياف
          </Col>
        </Row>
      </Container>

      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Msaken;
