/**
 * Render Contact via Koban
 * 2025-2025
 * v 0.0.1
 * */

// REACT
import React, { FC, useEffect, useState } from "react";
import { useContext } from "react";
// GATSBY
import { useStaticQuery, graphql } from "gatsby";

// APP
import { useNode } from "../utils/hu.tsx";
import { MarkdownHtml } from "../components/hc.tsx";
import { RegionContext } from "../context.tsx";

// need to define properly the any... it's very too much and very lazy !
interface Props {
  style_form: any;
  style_cell: any;
  style_box: any;
}

interface PropsKoban {
  info: any;
}

const paragraphe_styles = {
  marginBottom: "0.5em",
}

const Koban: FC<PropsKoban> = ({info}) => {

  // const [loaded, set_loaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://track-eu01.app-koban.com/libapi/kobanform.js";
    script.async = true;
  
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore on ignore royalement
      if (typeof RegForm === 'function') {
        console.log("test");
        // @ts-ignore on ignore royalement
        RegForm("673c8049e856d6e37967884b");
      }
    };
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  
  return (
    <div
      data-kbnzone="true"
      data-id="1"
      className="kbnzone kbn-zone"
      id="kbnzone-1"
      data-formcode="[[!FORM;673c8049e856d6e37967884b;Contact Web]]"
    >
      <div className="row">
        <div className="col-md-12" data-elem="form">
          <form id="ncform">
            <p>{info.misc}</p>
            <div className="row">
              <div className="col-md-12">
                <div className="ncFieldct cti673c8c07e856d6e379678b3c tp">
                  <label htmlFor="673c8c07e856d6e379678b3c">
                    {info.lastname}
                  </label>
                  <div className="ncField">
                    <input
                      type="text"
                      data-fid="673c8c07e856d6e379678b3c"
                      name="contact_name"
                      id="673c8c07e856d6e379678b3c"
                      required
                      aria-required="true"
                      aria-label="Nom/Name"
                    />
                  </div>
                  <span
                    id="error-673c8c07e856d6e379678b3c"
                    className="error-message"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ncFieldct cti673c8c0be856d6e379678b3f tp">
                  <label htmlFor="673c8c0be856d6e379678b3f">
                  {info.firstname}
                  </label>
                  <div className="ncField">
                    <input
                      type="text"
                      data-fid="673c8c0be856d6e379678b3f"
                      name="contact_firstname"
                      id="673c8c0be856d6e379678b3f"
                      required
                      aria-required="true"
                      aria-label="Prénom/First name"
                    />
                  </div>
                  <span
                    id="error-673c8c0be856d6e379678b3f"
                    className="error-message"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ncFieldct cti677262ad6603ee6ab902d412 tp">
                  <label htmlFor="677262ad6603ee6ab902d412">
                    {info.mail}
                  </label>
                  <div className="ncField">
                    <input
                      data-fid="677262ad6603ee6ab902d412"
                      type="email"
                      pattern="[^ @]*@[^ @]*"
                      name="contact_email"
                      id="677262ad6603ee6ab902d412"
                      required
                      aria-required="true"
                      aria-label="EMail"
                    />
                  </div>
                  <span
                    id="error-677262ad6603ee6ab902d412"
                    className="error-message"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ncFieldct cti677262b26603ee6ab902d413 tp">
                  <label htmlFor="677262b26603ee6ab902d413">
                    {info.mobile}
                  </label>
                  <div className="ncField">
                    <input
                      data-fid="677262b26603ee6ab902d413"
                      type="text"
                      name="contact_mobile"
                      id="677262b26603ee6ab902d413"
                      required
                      aria-required="true"
                      aria-label="Mobile"
                    />
                  </div>
                  <span
                    id="error-677262b26603ee6ab902d413"
                    className="error-message"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ncFieldct cti677263296603ee6ab902d41b tp">
                  <label htmlFor="677263296603ee6ab902d41b">{info.town}</label>
                  <div className="ncField">
                    <input
                      type="text"
                      data-fid="677263296603ee6ab902d41b"
                      name="third_adrscity"
                      id="677263296603ee6ab902d41b"
                      aria-label="Ville/Town"
                    />
                  </div>
                  <span
                    id="error-677263296603ee6ab902d41b"
                    className="error-message"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ncFieldct cti6772632e6603ee6ab902d41c tp">
                  <label htmlFor="6772632e6603ee6ab902d41c">{info.country}</label>
                  <div className="ncField">
                    <select
                      data-fid="6772632e6603ee6ab902d41c"
                      name="third_adrscountry"
                      id="6772632e6603ee6ab902d41c"
                      aria-label="Pays/Country"
                    >
                      <option value="AF">Afghanistan</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">
                        Congo, The Democratic Republic of The
                      </option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Cote D'ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libyan Arab Jamahiriya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia, Federated States of
                      </option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="AN">Netherlands Antilles</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="SH">Saint Helena</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.S.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                  <span
                    id="error-6772632e6603ee6ab902d41c"
                    className="error-message"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="ncFieldct cti677263876603ee6ab902d45d tp">
                  <label htmlFor="677263876603ee6ab902d45d">
                    Message<span className="required">*</span>
                  </label>
                  <div className="ncField">
                    <textarea
                      data-fid="677263876603ee6ab902d45d"
                      name="contact_comment"
                      // rows="5"
                      id="677263876603ee6ab902d45d"
                      required
                      aria-required="true"
                      aria-label="Message"
                    ></textarea>
                  </div>
                  <span
                    id="error-677263876603ee6ab902d45d"
                    className="error-message"
                    aria-live="polite"
                  ></span>
                </div>
              </div>
            </div>
            <div className="ncFieldct tpboolean">
              <div className="ncField">
                <input
                  id="673c8049e856d6e37967884b"
                  data-fid="Optin"
                  type="checkbox"
                  name="Optin"
                />
              </div>
              <label htmlFor="673c8049e856d6e37967884b">
                <p>
                  <span
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    J'accepte de recevoir des informations de la part de la
                    société SanaConsult.
                  </span>
                </p>
              </label>
            </div>
            <div className="ncSendZone">
              <button
                type="button"
                className="kbn-form"
                data-id="673c8049e856d6e37967884b"
                data-lp="67725e426603ee6ab902d263"
                data-ct="66d705f75c6b33d385e47004"
                style={{
                  color: "#ffffff",
                  backgroundColor: "#ed0000",
                  padding: "15px",
                  borderRadius: "5px",
                  display: "block",
                }}
                aria-label="Submit"
              >
                <p>Envoyer la demande</p>
              </button>
            </div>
          </form>
          {/* <script src="https://track-eu01.app-koban.com/libapi/kobanform.js"></script> */}
          {/* <script>
            if (typeof RegForm == "function")
            RegForm("673c8049e856d6e37967884b");
          </script> */}
          <link
            rel="stylesheet"
            href="https://track-eu01.app-koban.com/Form/Style/673c8049e856d6e37967884b"
          />
        </div>
      </div>
    </div>
  );
};

export const RenderContactKoban: FC<Props> = ({
  style_box,
  style_cell,
  style_form,
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { categorie: { eq: "contact" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                lang
                firstname
                lastname
                mail
                message
                send
                misc
                mobile
                country
                town
              }
              html
            }
          }
        }
      }
    `
  );
  const { lang } = useContext(RegionContext);

  const { frontmatter, html } = useNode(data, lang);
  const info = frontmatter;
  return (
    <>
      <h1>{info.title}</h1>
      <Koban info={info}/>
      <p style={paragraphe_styles}>
            <MarkdownHtml html={html} />
          </p>
    </>
  );
};
