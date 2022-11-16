import React from "react";
import "./style.css";
import * as FaIcons from "react-icons/fa";

const Info: React.FunctionComponent = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h3 className="contact-title padd-15">Έχετε Απορίες ?</h3>
        <h4 className="contact-sub-title padd-15">
          ΕΙΜΑΣΤΕ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ ΣΑΣ
        </h4>

        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <FaIcons.FaPhone />
            </div>
            <h4>Καλέστε μας</h4>
            <p>+30 699 322 8157</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <FaIcons.FaMapMarkerAlt />
            </div>
            <h4>Βρείτε Μας</h4>
            <p>Αλ. Μπινιώρη 57, Νεάπολη</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <FaIcons.FaEnvelope />
            </div>
            <h4>Email</h4>
            <p>lyseisdomisis@gmail.com</p>
          </div>
        </div>
        <h3 className="contact-title padd-15">ΣΤΕΙΛΤΕ ΜΑΣ ΕΝΑ EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          ΒΛΕΠΟΥΜΕ ΤΑΚΤΙΚΑ ΤΑ EMAIL ΜΑΣ
        </h4>

        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Όνομα"
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Θέμα"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    placeholder="Μήνυμα"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn">
                  Στείλτε...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
