import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageGallery from "react-image-gallery";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./project1.css";
import { useEffect } from "react";
import Footer from "../footer";

const Mornag = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <section id="banner" class="bg-img" data-bg="monag.jpg">
          <div class="inner">
            <header>
              <h1> مرناق متموتش</h1>
            </header>
          </div>
        </section>
      </div>

      
      
      <Container>
          <Row>

          <Col lg= {12} >
                    <div  style ={{textAlign:"center"}} >
                <h1 className="title "> {' '}
        مشروع " مرناق متموتش "</h1>
                <p style = {{margin:"3%"}}>
                اعملوا نظرة على ملاك بن يونس تحكيلنا على مشروع مرناق ما تموتش
                </p>
                
          
                <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Flook.arabic%2Fvideos%2F384376742906640%2F&show_text=false&width=476" width="60%" height="650"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </div>
          </Col>
          </Row>


        </Container>
     
      <Container className="container">
      
        <Row>
          <Col lg={7} style = {{marginTop:"10%"}}>
            <div>
              <AwesomeSlider>
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122721646_186653452938360_4795626013182361777_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=N_qLOdc7Ps8AX_YfBFb&_nc_ht=scontent.ftun3-1.fna&oh=3df53994bd9a87711471dd017e5910ff&oe=5FDB97B8" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122656748_186652139605158_432567971541379098_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=pNIsluNKFBIAX__We2N&_nc_ht=scontent.ftun3-1.fna&oh=be49f234b8184694a30984909d9c460c&oe=5FD95992" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122860052_186652032938502_5690949516982263018_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=L9poYQL-MuYAX8MMj56&_nc_ht=scontent.ftun3-1.fna&oh=1098c45ca4423f2cb0fc210b68950a86&oe=5FD92FA9" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122700301_186653462938359_2944115391261668988_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=juDTCoLU958AX_MtZ1-&_nc_ht=scontent.ftun3-1.fna&oh=3966d774e149f992e9bd42f7867b5c86&oe=5FDC3CB9" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122674945_186651822938523_8239809914523804760_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=K8veWQYCH9kAX9VypmI&_nc_ht=scontent.ftun3-1.fna&oh=9d9d75ac301a72890b010f29cec6da9b&oe=5FDC351D" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122679144_186651726271866_4236658964042854240_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=H2MlEQuxidEAX9RExOz&_nc_ht=scontent.ftun3-1.fna&oh=a0546ff4259659883e3a14dbba1af5aa&oe=5FDA0650" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122763696_186651749605197_5889676384132796460_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=rOkrgZzeUcgAX90Rbjc&_nc_ht=scontent.ftun3-1.fna&oh=ba4cd854943159cd819e344bb6e5043c&oe=5FD9F7A8" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122703989_186651882938517_8523365258009403328_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=MYRqpXhosbgAX9UGpJR&_nc_ht=scontent.ftun3-1.fna&oh=01af9e9f18f6eff116260e42dca2e90a&oe=5FDB6597" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122532753_186652366271802_236139228973610977_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=SLWx6-rRum4AX8N8NcH&_nc_ht=scontent.ftun3-1.fna&oh=a24d1fbae05e82f7065cbeacfbccd2b2&oe=5FD9EC78" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122750630_186652176271821_8538305850075616522_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=qLWKzCGDAkUAX9xNA5-&_nc_oc=AQlMWKwlonkjc3wed25fha2dBwfzAeXBySG_zqwXtHOwv6PHPKtuzbs9ZCXS2jcOOVA&_nc_ht=scontent.ftun3-1.fna&oh=a31a2b57ed933e8f17a04519757a3317&oe=5FD96CBE" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122599628_186652349605137_2178114845059253108_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=g1KKE-IQ1JoAX9u1XBz&_nc_ht=scontent.ftun3-1.fna&oh=b5caab8e8847930425792197c3255654&oe=5FDC8AA1" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122805912_186652069605165_8696450264864376954_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=HppZgntcx18AX8TUePG&_nc_ht=scontent.ftun3-1.fna&oh=553d197284ed0a5ef6bde7ddd068c48a&oe=5FDC2128" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122704682_186652192938486_5933196175603906226_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=q0KpSDWdqhoAX-Q5unQ&_nc_ht=scontent.ftun3-1.fna&oh=24af7fa57d2055375bcd564d5df48e86&oe=5FDBFE73" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/l/t1.0-9/122787495_186653492938356_5438694017331225046_o.jpg?_nc_cat=109&cb=846ca55b-311e05c7&ccb=2&_nc_sid=730e14&_nc_ohc=vPXpOCqVny4AX8_jgw3&_nc_ht=scontent.ftun3-1.fna&oh=db1173e588610d381720c8fcd5d20f73&oe=5FD94BE7" />
                <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/122653535_186653522938353_7863838491761255943_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=DQY7v28FASAAX_ZTpit&_nc_oc=AQl6RJbm3Z3X-ATqy1THsjDIZ2aN6pVexdy3bmkp10Us5UAC8gQSHREUqnux2_9_IuE&_nc_ht=scontent.ftun3-1.fna&oh=0047b8b1eaee1752cfd16daf4a77b13a&oe=5FDBDBED" />
              </AwesomeSlider>
            </div>
          </Col>
           
          <Col className="discription">
          <p style = {{fontSize : "24px", fontWeight : "bold"}}>افتتاح المشروع</p>
            افتتاح مشروع " مرناق متموتش " لمجموعة غرام المجموعة اللي ترى مرناق
            بعينيهم , اليوم حضروا معانا المتشاركين اللي شاركوا في مسابقة اجمل
            صور مدينة مرناق واللي تنجم تسوق للمنطقة كسياحة جبلية وبيئية , تلقاو
            تدريب في فن التقاط الصورة و حقوق المؤلف وناقشنا معاهم شنوة اهم
            الرسائل الايجابية اللي يحبو يراوها في شوارع مرناق و في المعلقات
            الاشهارية واللي باش يكونوا معانا زادة في التنفيذ في الاسبوع القادم
          </Col>
        </Row>
      </Container>
     
      <Container className="container">
        <Row>
          <Col className="discription">
          <p style = {{fontSize : "24px", fontWeight : "bold"}}>{' '}
        مجموعة غرام</p>

            عاد ماو قلنالكم "مرناق متموتش " وماهياش كان جبل رصاص !! وهي الفكرة
            اللي تولدت في برنامج Active Citizens Tunisia مجموعة غرام مواطنون
            فاعلون مرناق حبوا يعرفوا بمرناق بطريقة جديدة ! وبعد ماعملوا
            مسابقة"مرناق بعدستك " وصلوهم برشة تصاور ولا اغرب من الخيال ! واللي
            اختارو منهم بعض الزوايا باش تتجسم في معلقات اشهارية على مستوى مدخل
            مدينة مرناق !! المشروع هذا بتمويل من الاتحاد الاروبي بالشراكة مع
            المجلس الثقافي البريطاني .. تنفذو جمعية الرابطة التونسية للمواطنة
            بالشراكة مع بلدية مرناق والجمعية التونسية لاحباء البيئة ... نحبوا
            نشكروا المرناقيين اللي شاركوا في المسابقة الكل و شركائنا وخاصة
            المجموعة الي تخدم على المشروع ... استناونا على الطريق ..
          </Col>
          <Col lg={7} style = {{marginTop:"10%"}}>
            <AwesomeSlider>
              <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/124624876_188842289413906_1050146460327039251_n.jpg?_nc_cat=111&ccb=2&_nc_sid=8bfeb9&_nc_ohc=wO-W7tk3CbQAX9iEK4i&_nc_ht=scontent.ftun3-1.fna&oh=db35729f6ff50eb28b4135417e231a9a&oe=5FDB4957" />
              <div data-src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/125003790_188842316080570_2552305431782913938_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=OcBNDltOJiMAX-1VNKu&_nc_ht=scontent.ftun3-1.fna&oh=8bd2648344fb7a9a3ca931b8ae0716f8&oe=5FD91DBC" />
            </AwesomeSlider>
          </Col>
        </Row>
      </Container>

      

      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Mornag;
