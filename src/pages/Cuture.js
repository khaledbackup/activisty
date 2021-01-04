import React from "react";
import { useEffect } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "react-awesome-slider/dist/styles.css";
import "../components/patrimoine/project1.css"
import Footer from "../components/footer";



const Culture = () => {
    useEffect(() => {

        window.scrollTo(0, 0)
      }, []);

  return (
    <div>
      <div>
        <section id="banner" class="bg-img" data-bg="culture.jpg">
          <div class="inner">
            <header>
              <h1> Culture</h1>
            </header>
          </div>
        </section>
      </div>
      {/* <h1 style = {{color: "black"}}> حكايتنا</h1> */}

      <Container className="container">
        <Row>
          <Col lg={7} >
            <div>
            <iframe className="firstVideoCulture" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FActiveCitizensTunisia%2Fvideos%2F277656427021376%2F&show_text=false&width=560" width="100%" height="314"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </div>
          </Col>
          <Col className = "discriptionCulture firstDescriptionculture">
            <p style = {{fontSize : "20px", fontWeight : "bold"}}>(السبيخة) صوت الطفل</p>
            <p>الطفولة و عبق البراءة مرحلة من مراحل العمر إلي تستحق ندعموها و نطورها و نخدمو عليها على خاطر باش تبني جيل مستقبل و هوا إلي باش يأخذ المشعل من بعدك و يكمل المسار الإيجابي و على خاطر صغيراتنا يهمونا و يمثلونا و شهر نوفمبر نحتفلو باليوم العالمي للطفولة إلي هوا 13 نوفمبر و خاصة إنو فما فئة من صغيراتنا قاعدين يستغلو في برائتهم و شغفهم و إنقطاعهم على الدراسة بالعمل في القطاع الفلاحي و إستعبادهم و تكبيلهم من خلق فرص للإبداع الثقافي و الفكري وفي بادرة تحسيسية من شباب السبيخة قامو بتوثيق الإستغلال هاذا في فيلم قصير توعوي تحسيسي بمعاناة الطفولة مع متلازمات الحياة والغاية منو تحفيز السلط المعنية لإنقاذ الطفولة</p>
         
          </Col>
        </Row>
      </Container>
      <Container className="container">
        <Row>
          <Col className = "discriptionCulture" >
          <p style = {{fontSize : "20px", fontWeight : "bold" , textAlign:"center" }}>النساء الكادحات</p>
         <p> على خاطر إنت تمثل كل مرأة تونسية تتعب و تجاهد بكل قطرة عرق من جبينها ترسم مسيرة نضالية إنت رسمتها و على هذا شباب السبيخة خمم فيك باش يوصل صوتك و معاناتك اليومية من خلال فيلم وثائقي توعوي و على قريب باش يتعرض و الهدف متاعو رسم صورة التجاذبات اليومية إلي تعيشها و تنندد بعراكك المتداول لسلط المعنية لخلق حلول تحميك و تضمن صراعك مع الحياة .</p>
          </Col>
          <Col lg={7} >
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FActiveCitizensTunisia%2Fvideos%2F724663548149304%2F&show_text=false&width=560" width="100%" height="314"   scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
          </Col>
        </Row>
      </Container>

      <Footer/>
    </div>
  );
};

export default Culture;