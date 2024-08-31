import React from "react";
import "./cropManage.css";


const CropManage =()=>{
    return <>
    
    <div className="image">
        {/* function Video(){
            return(
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wougJaN_Ha0?si=JhTGgZieyXO45pLD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            );
        } */
        // <img src="https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs="
        //  alt="" srcset="" />
        
        }
        
    
 
        <div className="crop-manage-container">
      <h1>फसल प्रबंधन मार्गदर्शिका</h1>
      <iframe  src="https://www.youtube.com/embed/DEJFbqr8_SY?si=zzzZB1v7dfwq_3QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay muted></iframe>
      <section className="introduction">
        <h2>फसल प्रबंधन का परिचय

</h2>
        <p>
        फसल प्रबंधन एक सफल फसल सुनिश्चित करने के लिए अत्यंत महत्वपूर्ण है। इसमें फसल की उपज, गुणवत्ता, और स्थिरता को बेहतर बनाने के लिए विभिन्न प्रथाएँ और तकनीकें शामिल हैं। प्रभावी फसल प्रबंधन में योजना बनाना, निगरानी करना, और मौसम, मिट्टी की स्थिति, और फसल की जरूरतों के आधार पर प्रथाओं को समायोजित करना शामिल है।
        </p>
      </section>

      <section className="key-tips">
        <h2>सफल फसल प्रबंधन के लिए प्रमुख सुझाव</h2>
        <ul>
          <li>
            <strong>मिट्टी की तैयारी:

</strong> बुवाई से पहले मिट्टी की जाँच और तैयारी करें। सुनिश्चित करें कि उसमें सही पीएच और पोषक तत्वों का स्तर हो।
          </li>
          <li>
            <strong>फसल चयन:

</strong> स्थानीय जलवायु और मिट्टी की स्थितियों के अनुसार उपयुक्त फसलों का चयन करें।
          </li>
          <li>
            <strong>सिंचाई:</strong> एक प्रभावी सिंचाई प्रणाली लागू करें ताकि आपकी फसलों को पर्याप्त पानी मिले।
          </li>
          <li>
            <strong>कीट और रोग नियंत्रण:</strong> अपने फसलों का नियमित रूप से निरीक्षण करें ताकि कीट और बीमारियों के संकेतों की पहचान हो सके और उचित नियंत्रण विधियों का उपयोग करें।
          </li>
          <li>
            <strong>फसल कटाई:</strong> फसलों की कटाई सही समय पर करें ताकि उपज और गुणवत्ता को अधिकतम किया जा सके।
          </li>
        </ul>
      </section>

      <section className="resources">
         
        <h2>सहायक संसाधन और दस्तावेज़

</h2>
        <ul>
          <li>
            <a href="https://icar.org.in/sites/default/files/inline-files/Crop-Management-hindi-AR-2011-12.pdf" target="_blank" rel="noopener noreferrer">
            फसल प्रबंधन गाइड

(PDF)
            </a>
            
          </li>
          <li>
            <a href="https://mahadhan.co.in/wp-content/uploads/2017/04/Soil-Testing-for-Successful-Agriculture-Hindi.pdf" target="_blank" rel="noopener noreferrer">
            मिट्टी परीक्षण गाइड(PDF)
            </a>
          </li>
          <li>
            <a href="https://cdn.visionias.in/value_added_material/66f8b-different-types-of-irrigation-and-irrigation-systems.pdf" target="_blank" rel="noopener noreferrer">
            सिंचाई तकनीकें(PDF)
            </a>
          </li>
        </ul>
      </section>
    </div>
    
    </div>
    </>
    
}

export default CropManage;