import React from "react";

const Mainaboutpg = () => {
  const trustMembers1 = [
    { name: "Bhupendra Kumar", position: "    Chairman" },
    { name: "Sehdev Pal", position: "    Vice Chairman" },
    { name: "Shailendra", position: "    Secretary" },
    { name: "Jitendra Pal", position: "    कोषाध्यक्ष" },
    { name: "Rampal", position: "    Trustee" },
    { name: "Omsingh", position: "    सभासद mzn" },
    { name: "Arvind Dhangar", position: "    सभासद mzn" },
    { name: "Honey Pal", position: "     सभासद mzn" },
  ];
  const trustMembers2 = [
    { name: "Abhishek Pal", position: "   BDC Meerut Masori" },
    { name: "Parveen Pal", position: "    जागृति विहार" },
    { name: "Virendra Pal", position: "    Teacher" },
    { name: "Kanchan Pal", position: "    Bank Head Cashier" },
    { name: "Priyanka Pal", position: "    Khadi Vibhag" },
    { name: "Guruvachan pal ", position: "      mzn bussines man" },
    { name: "Lokesh pal", position: "    mzn bussines man" },
    { name: "Lekh pal", position: "    mzn bussines man" },
  ];
  return (
    <>
      <section className="about-container" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="about-content">
                <ul>
                  <li>
                    <h2>What we do</h2>

                    <div className="section-text">
                      <ol>
                        <li>
                          Establishment and operation of public interest
                          facilities such as hospitals, orphanages, hostels,
                          libraries, gymnasiums, widow ashrams, and old age
                          homes.
                        </li>
                        <li>
                          Setting up and operating various educational
                          institutions and boarding houses in fields such as
                          engineering, medical, dental, computer science, arts,
                          crafts, music, painting, modeling, dancing, yoga, and
                          health education.
                        </li>
                        <li>
                          Promotion of skill development training for the
                          underprivileged through training centers.
                        </li>
                        <li>
                          Collaboration with government welfare schemes for
                          effective dissemination and availability to the
                          society.
                        </li>
                        <li>Engagement in educational research activities.</li>
                        <li>
                          Conducting free medical camps for the welfare of
                          underprivileged boys and girls.
                        </li>
                        <li>
                          Organizing educational and welfare programs on topics
                          such as traffic rules and public safety.
                        </li>
                        <li>
                          Dedication to the development of neglected and
                          economically weak sections of society.
                        </li>
                        <li>
                          Organizing debates, knowledge-science events, sports
                          competitions, and other similar activities.
                        </li>
                        <li>
                          Offering free medical services through medical camps,
                          focusing on family planning, AIDS awareness, etc.
                        </li>
                        <li>
                          Arranging educational exhibitions, seminars, tree
                          plantation drives, and personal development programs.
                        </li>
                        <li>
                          Conducting moral and social programs to foster
                          national unity and promote well-being.
                        </li>
                        <li>
                          Initiating efforts to provide education and employment
                          opportunities to illiterate and disadvantaged sections
                          of society. And so much more
                        </li>
                      </ol>
                    </div>
                  </li>

                  {/* Trust Members */}
                  <li>
                    <div className="section-text">
                      <h2>Trust Members </h2>

                      <div className="row">
                        <div className="col-12 col-lg-6 table-format ">
                          <table>
                            <thead>
                              <tr>
                                <th> Name </th>

                                <th> Position </th>
                              </tr>
                            </thead>
                            <tbody>
                              {trustMembers1.map((member) => (
                                <tr key={member.name}>
                                  <td className="data-format">
                                    {" "}
                                    {member.name}{" "}
                                  </td>

                                  <td> {member.position} </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="col-12 col-lg-6 table-format">
                          <table>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Position</th>
                              </tr>
                            </thead>
                            <tbody>
                              {trustMembers2.map((member) => (
                                <tr key={member.name}>
                                  <td>{member.name}</td>
                                  <td>{member.position}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h2>How you can join </h2>

                    <p className="section-text">
                      Membership of the trust is limited to individuals who have
                      reached the age of 18. To become a member, interested
                      individuals need to complete the application form and
                      adhere to the trust's rules. Upon approval from the
                      management committee, the applicant must submit the
                      required admission fee of 2,000/- as per the trust's
                      guidelines. Subscription fees can be paid in the form of
                      cash, bank draft, or through e-payment. The application
                      form, along with the trust's name, should be submitted to
                      the Secretary/Chairman. Membership approval will be
                      granted by the office bearers after careful consideration,
                      and the appointed Trustee will officially become a member.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainaboutpg;
