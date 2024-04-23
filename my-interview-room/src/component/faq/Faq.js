import React from "react";
import "../faq/Faq.css";
import robot from "../assets/images/alian.png";


const Faq = () => {
  return (
    <>
      <div className="col-12">
        <div className="container pt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-10 bgcolor p-4 m-2 ">
                <div className="faq-card p-4 ">
              <div className="col-12 text-center">
                <h1>Frequently Asked Questions</h1>
              </div>
              <div className="col-12">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 mt-4 p-2">

                  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                1. How do I log in to the Company Entrance Test platform?
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                To log in, visit our website and click on the "Company Entrance Test" link. Then, enter your login credentials provided to you.
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2. What are the requirements for the video recorded submission?
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                The video recorded submission should clearly display your face and the completion of the test within the specified time limit. Make sure your environment is quiet and well-lit.
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                3. Can I take breaks during the test?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                No, the test must be completed in one sitting without breaks.
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                4. How will the questions be delivered?
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                The questions will be delivered via AI in the form of both voice and written text.
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                5. Can I review and change my answers before submitting?
            </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Yes, you can review and change your answers before final submission.
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                6. What happens if I face technical issues during the test?
            </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                If you encounter any technical issues during the test, please contact our technical support team immediately for assistance.
            </div>
        </div>
    </div>
</div>



                 
                  </div>
                  
                  <div className="col-md-6">
                    <img src={robot} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
